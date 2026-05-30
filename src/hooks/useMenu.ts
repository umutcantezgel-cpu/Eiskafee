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
  if (category && HF_DATA.menu[category as keyof typeof HF_DATA.menu]) {
    items = (
      HF_DATA.menu[category as keyof typeof HF_DATA.menu] as { items: any[] }
    ).items.map(
      (item) =>
        ({
          id: item.name,
          category,
          name: item.name,
          desc: item.desc,
          price: item.price,
          isAvailable: true,
          popular: false,
          allergens: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        }) as MenuItem,
    );
  } else if (!category) {
    Object.entries(HF_DATA.menu).forEach(([catKey, catData]) => {
      items.push(
        ...(catData as { items: any[] }).items.map(
          (item) =>
            ({
              id: item.name,
              category: catKey,
              name: item.name,
              desc: item.desc,
              price: item.price,
              isAvailable: true,
              popular: false,
              allergens: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            }) as MenuItem,
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
