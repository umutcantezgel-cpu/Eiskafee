import { HF_DATA } from "@/lib/data";
import { MenuClient } from "@/components/menu/MenuClient";

export default function MenuPage() {
  return <MenuClient categories={HF_DATA.categories} menu={HF_DATA.menu} />;
}
