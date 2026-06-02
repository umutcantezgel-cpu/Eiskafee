import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { MenuItem } from "@/types/firestore";
import { HF_DATA } from "@/lib/data";

// Helper to convert HF_DATA to MenuItem[]
function getLocalFallback(category?: string): MenuItem[] {
  let items: MenuItem[] = [];

  const mapItem = (item: any, catKey: string): MenuItem => {
    // Attempt to extract numeric price from string like "7,50 €"
    let numericPrice = 0;
    if (typeof item.price === "string") {
      const match = item.price.match(/[\d,]+/);
      if (match) {
        numericPrice = parseFloat(match[0].replace(",", "."));
      }
    } else if (typeof item.price === "number") {
      numericPrice = item.price;
    }

    return {
      id: item.name,
      category: catKey,
      name: item.name,
      desc: item.desc,
      price: numericPrice,
      icon: "🍽️",
      color: "peach",
      available: true,
    } as MenuItem;
  };

  if (category && HF_DATA.menu[category as keyof typeof HF_DATA.menu]) {
    items = (
      HF_DATA.menu[category as keyof typeof HF_DATA.menu] as { items: any[] }
    ).items.map((item) => mapItem(item, category));
  } else if (!category) {
    Object.entries(HF_DATA.menu).forEach(([catKey, catData]) => {
      items.push(
        ...(catData as { items: any[] }).items.map((item) =>
          mapItem(item, catKey),
        ),
      );
    });
  }
  return items;
}

export function useMenu(category?: string) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let q = query(collection(db, "menu_items"), orderBy("category", "asc"));
    if (category) {
      q = query(
        collection(db, "menu_items"),
        where("category", "==", category),
        orderBy("category", "asc"),
      );
    }

    const unsub = onSnapshot(
      q,
      (snap) => {
        if (snap.docs.length === 0) {
          // Fallback to local data if Firebase is empty
          setItems(getLocalFallback(category));
        } else {
          setItems(
            snap.docs.map((d) => ({ id: d.id, ...d.data() }) as MenuItem),
          );
        }
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("useMenu error:", err);
        // Fallback to local data on error
        setItems(getLocalFallback(category));
        setError(err);
        setLoading(false);
      },
    );

    return () => unsub();
  }, [category]);

  return { items, loading, error };
}
