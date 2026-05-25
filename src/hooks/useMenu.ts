import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export interface MenuItem {
  id: string;
  name?: string;
  price?: number;
  [key: string]: any;
}

export function useMenu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const querySnapshot = await getDocs(collection(db, "menu_items"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MenuItem[];
        setItems(data);
      } catch (err) {
        console.error("Error fetching menu_items:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, []);

  return { items, loading, error };
}
