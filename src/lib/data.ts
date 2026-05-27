import { AppData } from "../types";
import { BUSINESS } from "@/lib/seo/business-data";

export const store_settings = {
  is_open: true,
  is_accepting_orders: true,
  busy_mode: false,
  pickup_time_estimate_mins: 15,
  phone: BUSINESS.phone,
  emergencyNotice: null
};

export const HF_DATA: AppData = {
  config: {
    name: "Hey Fede!",
    tagline: "Dessertbar & Café",
    address: `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
    phone: BUSINESS.phone,
    whatsapp: "0176 25026991",
    instagram: "heyfede_wetzlar",
    rating: 4.8,
    reviewCount: 84,
  },
  categories: [
    { id: "boxen", label: "Fede Boxen", icon: "Package" },
    { id: "bubble", label: "Bubble Waffle", icon: "Layers" },
    { id: "crepes", label: "Crêpes", icon: "Cake" },
    { id: "kuchen", label: "Kuchen", icon: "Cake" },
    { id: "cookies", label: "Cookies", icon: "Cookie" },
    { id: "eisbecher", label: "Eisbecher 500ml", icon: "Coffee" },
    { id: "shakes", label: "Special Shakes", icon: "Coffee" },
    { id: "iced", label: "Iced Drinks", icon: "Droplets" },
    { id: "stullen", label: "Stullen", icon: "Sandwich" },
    { id: "getraenke", label: "Getränke", icon: "Droplets" },
  ],
  menu: {
    boxen: {
      desc: "Legendäre Sharing-Boxen — perfekt für Gruppen & Familien.",
      items: [
        {
          id: "fede-friends",
          name: "Fede & Friends",
          price: "25,00 €",
          tag: "Sharing Box",
          ticket: true,
          desc: "12 Pancakes · Bubble Waffle · 3 Fruchtsorten · 3 Mini-Croissants · 3 Mini-Schokobrötchen · 3 Mini-Windbeutel · 3 Schokosbällchen · 4 Soßen",
        },
        {
          id: "pancake-picknick",
          name: "Pancake Picknick",
          price: "7,00 €",
          tag: "",
          ticket: true,
          desc: "12 Pancakes · 2 Fruchtsorten · Soße nach Wahl",
        },
        {
          id: "mix-box",
          name: "Mix Box",
          price: "15,00 €",
          tag: "Beliebt",
          ticket: true,
          desc: "12 Pancakes · Bubble Waffle · 3 Fruchtsorten · 2 Soßen",
        },
        {
          id: "nutella-box",
          name: "Nutella Box",
          price: "15,00 €",
          tag: "",
          ticket: true,
          desc: "10 Pancakes · Bubble Waffle · 1 Fruchtsorte · 2× Nutella · 3 Mini-Croissants · 3 Schokosbällchen",
        },
      ],
    },
    bubble: {
      desc: "Knusprig, luftig, unwiderstehlich — mit Soßen & Toppings frei kreierbar.",
      note: "Deine Leckerei kannst du mit Soßen & Toppings deiner Wahl selbst kreieren!",
      items: [
        { id: "b1", name: "Puderzucker", price: "3,80 €", desc: "Klassisch mit Puderzucker bestäubt" },
        { id: "b2", name: "Soße nach Wahl", price: "5,00 €", desc: "Mit deiner Lieblingssoße" },
        { id: "b3", name: "Eis + Sahne", price: "6,50 €", desc: "Mit Eiskugel & Sahne (oder 2 Eiskugeln statt Sahne)" },
        { id: "b4", name: "Deluxe", price: "8,80 €", tag: "Beliebt", desc: "Eis + Sahne + 3 Toppings + Soße · auch mit 2 Eiskugeln möglich" },
      ],
    },
    crepes: {
      desc: "Hauchdünn und vielseitig — von klassisch bis fruchtig.",
      note: "Deine Leckerei kannst du mit Soßen & Toppings selbst kreieren!",
      items: [
        { id: "c1", name: "Puderzucker / Zimt", price: "3,50 €", desc: "Der Klassiker" },
        { id: "c2", name: "Nutella", price: "4,50 €", desc: "Mit reichlich Nutella" },
        { id: "c3", name: "Nutella + Topping", price: "5,50 €", desc: "Nutella + Topping deiner Wahl" },
        { id: "c4", name: "Fruit Fiesta", price: "5,00 €", tag: "Empfohlen", desc: "Verschiedene Früchte & eine Soße" },
      ],
    },
    kuchen: {
      desc: "Täglich frisch gebacken — schau in unsere Vitrine!",
      items: [
        { id: "k1", name: "Kuchen des Tages", price: "Auf Anfrage", tag: "Täglich frisch", desc: "Täglich wechselnde Sorten in unserer Vitrine" },
        { id: "k2", name: "Tortenstück", price: "Auf Anfrage", desc: "Auswahl an Tortenspezialitäten" },
      ],
    },
    cookies: {
      desc: "Frisch gebacken, knusprig, in verschiedenen Sorten.",
      items: [
        { id: "co1", name: "Cookies", price: "Auf Anfrage", tag: "Frisch", desc: "Täglich frisch gebacken in verschiedenen Sorten" },
      ],
    },
    eisbecher: {
      desc: "Großzügige 500ml Eisbecher — ein Traum für Eisliebhaber.",
      items: [
        { id: "e1", name: "Bananasplit", price: "7,50 €", desc: "500ml Eisbecher" },
        { id: "e2", name: "Walnuss", price: "8,00 €", desc: "500ml Eisbecher" },
        { id: "e3", name: "Schoko", price: "7,00 €", desc: "500ml Eisbecher" },
        { id: "e4", name: "Frucht", price: "7,50 €", desc: "500ml Eisbecher" },
        { id: "e5", name: "Spaghetti", price: "7,00 €", tag: "Klassiker", desc: "500ml Eisbecher" },
        { id: "e6", name: "Erdbeer", price: "7,50 €", desc: "500ml Eisbecher" },
      ],
    },
    shakes: {
      desc: "0,4l frisch gemixt mit Sahne — alle Sorten 6,50 €.",
      items: [
        { id: "s1", name: "Nutella Shake", price: "6,50 €", desc: "0,4l + Sahne" },
        { id: "s2", name: "Cheesecake Shake", price: "6,50 €", desc: "0,4l + Sahne" },
        { id: "s3", name: "Oreo Shake", price: "6,50 €", tag: "Beliebt", desc: "0,4l + Sahne" },
        { id: "s4", name: "Snickers Shake", price: "6,50 €", desc: "0,4l + Sahne" },
        { id: "s5", name: "Lotus Shake", price: "6,50 €", desc: "0,4l + Sahne" },
        { id: "s6", name: "Bueno Shake", price: "6,50 €", desc: "0,4l + Sahne" },
      ],
    },
    iced: {
      desc: "Frisch zubereitet, eiskalt serviert.",
      items: [
        { id: "i1", name: "Iced Matcha", price: "ab 4,50 €", tag: "Trend", desc: "Hochwertiger Matcha, kalt aufgegossen" },
        { id: "i2", name: "Iced Coffee", price: "ab 4,50 €", desc: "Cold Brew über Eis" },
        { id: "i3", name: "Iced Latte", price: "ab 4,50 €", desc: "Espresso, Milch & Eis" },
      ],
    },
    stullen: {
      desc: "Herzhaftes für zwischendurch.",
      items: [
        { id: "st1", name: "Stullen", price: "Auf Anfrage", desc: "Belegte Brote nach Verfügbarkeit" },
      ],
    },
    getraenke: {
      desc: "Kalte Getränke für jeden Geschmack.",
      items: [
        { id: "g1", name: "Eisschokolade 0,2l", price: "4,50 €", desc: "" },
        { id: "g2", name: "Eisschokolade 0,4l", price: "6,50 €", desc: "" },
        { id: "g3", name: "Eiskaffee 0,3l", price: "4,50 €", desc: "" },
        { id: "g4", name: "Eiskaffee 0,5l", price: "6,50 €", desc: "" },
        { id: "g5", name: "Milchshake 0,3l", price: "4,50 €", desc: "" },
        { id: "g6", name: "Milchshake 0,5l", price: "5,50 €", desc: "" },
      ],
    },
  },
  bestsellers: [
    { id: "bs1", name: "Fede & Friends Box", desc: "Das ultimative Sharing-Erlebnis für Gruppen", price: "25,00 €", tag: "Bestseller", icon: "Package" },
    { id: "bs2", name: "Bubble Waffle Deluxe", desc: "Eis + Sahne + 3 Toppings nach Wahl", price: "8,80 €", tag: "Beliebt", icon: "Layers" },
    { id: "bs3", name: "Oreo Special Shake", desc: "0,4l · frisch gemixt mit Sahne", price: "6,50 €", tag: "", icon: "Coffee" },
    { id: "bs4", name: "Pancake Picknick", desc: "12 Pancakes · 2 Fruchtsorten · Soße", price: "7,00 €", tag: "", icon: "Cake" },
  ],
  reviews: [
    { id: "r1", name: "Sarah M.", stars: 5, text: "Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend." },
    { id: "r2", name: "Thomas K.", stars: 5, text: "Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!" },
    { id: "r3", name: "Lisa R.", stars: 5, text: "Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch." },
    { id: "r4", name: "Marco S.", stars: 4, text: "Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!" },
    { id: "r5", name: "Julia W.", stars: 5, text: "Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!" },
  ],
};

export const { CATEGORIES, MENU, BESTSELLERS, REVIEWS } = {
  CATEGORIES: HF_DATA.categories,
  MENU: HF_DATA.menu,
  BESTSELLERS: HF_DATA.bestsellers,
  REVIEWS: HF_DATA.reviews,
};
