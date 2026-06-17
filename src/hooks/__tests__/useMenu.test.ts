import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useMenu } from "../useMenu";
import { HF_DATA } from "@/lib/data";
import * as firestore from "firebase/firestore";

vi.mock("firebase/firestore", async () => {
  const actual = await vi.importActual("firebase/firestore");
  return {
    ...actual,
    collection: vi.fn(),
    query: vi.fn(),
    where: vi.fn(),
    orderBy: vi.fn(),
    onSnapshot: vi.fn(),
  };
});

vi.mock("@/lib/firebase", () => ({
  db: {},
}));

describe("useMenu", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch menu items and merge availability from Firestore", async () => {
    const totalLocalItems = Object.values(HF_DATA.menu).reduce(
      (acc, cat: any) => acc + cat.items.length,
      0,
    );

    const mockData = [
      {
        id: "Eisschokolade (0,3l)",
        data: () => ({
          name: "Eisschokolade (0,3l)",
          category: "eis-getraenke",
          available: false,
        }),
      },
    ];

    // Mock onSnapshot implementation
    vi.mocked(firestore.onSnapshot).mockImplementation((query, callback) => {
      // @ts-ignore
      callback({ docs: mockData });
      return vi.fn(); // unsubscribe function
    });

    const { result } = renderHook(() => useMenu());

    // Initially loading might be true, but synchronous mock callback updates it immediately
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.items).toHaveLength(totalLocalItems);

    // Find the item "Eisschokolade (0,3l)" and verify it is unavailable (since Firestore marked it false)
    const eisschokolade = result.current.items.find(
      (item) => item.name === "Eisschokolade (0,3l)",
    );
    expect(eisschokolade).toBeDefined();
    expect(eisschokolade?.available).toBe(false);

    // Other items should still be available: true
    const eiskaffee = result.current.items.find(
      (item) => item.name === "Eiskaffee (0,3l)",
    );
    expect(eiskaffee).toBeDefined();
    expect(eiskaffee?.available).toBe(true);

    expect(result.current.error).toBeNull();
  });

  it("should handle errors in onSnapshot", async () => {
    const mockError = new Error("Permission denied");

    vi.mocked(firestore.onSnapshot).mockImplementation(
      (query, callback, errorCallback) => {
        // @ts-ignore
        errorCallback(mockError);
        return vi.fn();
      },
    );

    const { result } = renderHook(() => useMenu());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe(mockError);
    const totalFallbackItems = Object.values(HF_DATA.menu).reduce(
      (acc, cat: any) => acc + cat.items.length,
      0,
    );
    expect(result.current.items).toHaveLength(totalFallbackItems);
  });

  it("should query by category if provided", () => {
    renderHook(() => useMenu("boxen"));
    expect(firestore.where).toHaveBeenCalledWith("category", "==", "boxen");
  });
});
