import { describe, it, expect, beforeEach, vi } from "vitest";
import { useAchievements } from "../useAchievements";
import { auth } from "@/lib/firebase";
import * as firestore from "firebase/firestore";

vi.mock("@/lib/firebase", () => {
  return {
    auth: {
      get currentUser() {
        return (global as any).mockCurrentUser || null;
      },
    },
    db: {},
  };
});

vi.mock("firebase/firestore", () => ({
  doc: vi.fn(),
  updateDoc: vi.fn(),
  arrayUnion: vi.fn(),
  setDoc: vi.fn(),
  getDoc: vi.fn().mockResolvedValue({ exists: () => false }),
}));

describe("useAchievements", () => {
  beforeEach(() => {
    useAchievements.setState({ unlocked: [] });
  });

  it("should unlock a new achievement", async () => {
    await useAchievements.getState().unlock("sweet-tooth");
    expect(useAchievements.getState().isUnlocked("sweet-tooth")).toBe(true);
    expect(useAchievements.getState().unlocked).toContain("sweet-tooth");
  });

  it("should not unlock an already unlocked achievement", async () => {
    useAchievements.setState({ unlocked: ["early-bird"] });
    await useAchievements.getState().unlock("early-bird");

    expect(useAchievements.getState().unlocked).toHaveLength(1);
    expect(useAchievements.getState().unlocked).toContain("early-bird");
  });

  it("should set unlocked achievements in bulk", () => {
    useAchievements.getState().syncFromFirebase(["loyal-fan", "waffle-master"]);
    expect(useAchievements.getState().unlocked).toEqual([
      "loyal-fan",
      "waffle-master",
    ]);
  });

  it("should sync to firebase if user is logged in", async () => {
    // Mock user
    (global as any).mockCurrentUser = { uid: "user123" };

    await useAchievements.getState().unlock("sweet-tooth");

    // verify updateDoc was called
    expect(firestore.updateDoc).toHaveBeenCalled();

    (global as any).mockCurrentUser = null; // cleanup
  });
});
