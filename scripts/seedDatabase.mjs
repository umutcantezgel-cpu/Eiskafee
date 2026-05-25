import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsX2Xrr31gmxRbR1l76k0CRGQGxy-y9fk",
  authDomain: "hey-fedee.firebaseapp.com",
  projectId: "hey-fedee",
  storageBucket: "hey-fedee.firebasestorage.app",
  messagingSenderId: "186954349069",
  appId: "1:186954349069:web:cc771e75cc91c934d03344"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const MENU_ITEMS = [
  // Fede Boxen
  { id: "fede-friends", name: "Fede & Friends", price: 25.00, tag: "Sharing Box", desc: "12 Pancakes · Bubble Waffle · 3 Fruchtsorten · 3 Mini-Croissants · 3 Mini-Schokobrötchen · 3 Mini-Windbeutel · 3 Schokosbällchen · 4 Soßen", category: "boxen" },
  { id: "pancake-picknick", name: "Pancake Picknick", price: 7.00, tag: "", desc: "12 Pancakes · 2 Fruchtsorten · Soße nach Wahl", category: "boxen" },
  { id: "mix-box", name: "Mix Box", price: 15.00, tag: "Beliebt", desc: "12 Pancakes · Bubble Waffle · 3 Fruchtsorten · 2 Soßen", category: "boxen" },
  { id: "nutella-box", name: "Nutella Box", price: 15.00, tag: "", desc: "10 Pancakes · Bubble Waffle · 1 Fruchtsorte · 2× Nutella · 3 Mini-Croissants · 3 Schokosbällchen", category: "boxen" },
  
  // Bubble Waffle (preconfigured)
  { id: "b1", name: "Puderzucker", price: 3.80, desc: "Klassisch mit Puderzucker bestäubt", category: "bubble" },
  { id: "b2", name: "Soße nach Wahl", price: 5.00, desc: "Mit deiner Lieblingssoße", category: "bubble" },
  { id: "b3", name: "Eis + Sahne", price: 6.50, desc: "Mit Eiskugel & Sahne (oder 2 Eiskugeln statt Sahne)", category: "bubble" },
  { id: "b4", name: "Deluxe", price: 8.80, tag: "Beliebt", desc: "Eis + Sahne + 3 Toppings + Soße · auch mit 2 Eiskugeln möglich", category: "bubble" },

  // Crêpes
  { id: "c1", name: "Puderzucker / Zimt", price: 3.50, desc: "Der Klassiker", category: "crepes" },
  { id: "c2", name: "Nutella", price: 4.50, desc: "Mit reichlich Nutella", category: "crepes" },
  { id: "c3", name: "Nutella + Topping", price: 5.50, desc: "Nutella + Topping deiner Wahl", category: "crepes" },
  { id: "c4", name: "Fruit Fiesta", price: 5.00, tag: "Empfohlen", desc: "Verschiedene Früchte & eine Soße", category: "crepes" },

  // Eisbecher
  { id: "e1", name: "Bananasplit", price: 7.50, desc: "500ml Eisbecher", category: "eisbecher" },
  { id: "e2", name: "Walnuss", price: 8.00, desc: "500ml Eisbecher", category: "eisbecher" },
  { id: "e3", name: "Schoko", price: 7.00, desc: "500ml Eisbecher", category: "eisbecher" },
  { id: "e4", name: "Frucht", price: 7.50, desc: "500ml Eisbecher", category: "eisbecher" },
  { id: "e5", name: "Spaghetti", price: 7.00, tag: "Klassiker", desc: "500ml Eisbecher", category: "eisbecher" },
  { id: "e6", name: "Erdbeer", price: 7.50, desc: "500ml Eisbecher", category: "eisbecher" },

  // Shakes
  { id: "s1", name: "Nutella Shake", price: 6.50, desc: "0,4l + Sahne", category: "shakes" },
  { id: "s2", name: "Cheesecake Shake", price: 6.50, desc: "0,4l + Sahne", category: "shakes" },
  { id: "s3", name: "Oreo Shake", price: 6.50, tag: "Beliebt", desc: "0,4l + Sahne", category: "shakes" },
  { id: "s4", name: "Snickers Shake", price: 6.50, desc: "0,4l + Sahne", category: "shakes" },
  { id: "s5", name: "Lotus Shake", price: 6.50, desc: "0,4l + Sahne", category: "shakes" },
  { id: "s6", name: "Bueno Shake", price: 6.50, desc: "0,4l + Sahne", category: "shakes" },

  // Getränke
  { id: "g1", name: "Eisschokolade 0,2l", price: 4.50, desc: "", category: "getraenke" },
  { id: "g2", name: "Eisschokolade 0,4l", price: 6.50, desc: "", category: "getraenke" },
  { id: "g3", name: "Eiskaffee 0,3l", price: 4.50, desc: "", category: "getraenke" },
  { id: "g4", name: "Eiskaffee 0,5l", price: 6.50, desc: "", category: "getraenke" },
  { id: "g5", name: "Milchshake 0,3l", price: 4.50, desc: "", category: "getraenke" },
  { id: "g6", name: "Milchshake 0,5l", price: 5.50, desc: "", category: "getraenke" },

  // Waffle Base & Toppings
  { id: 'eis-vanille',  name: 'Vanille-Eis',     price: 1.50, icon: 'Droplets',  color: '#f5efe8', category: 'waffle_topping' },
  { id: 'eis-schoko',   name: 'Schoko-Eis',      price: 1.50, icon: 'Droplets',  color: '#5c3d35', category: 'waffle_topping' },
  { id: 'erdbeere',     name: 'Erdbeeren',       price: 1.20, icon: 'Heart',     color: '#CC624C', category: 'waffle_topping' },
  { id: 'banane',       name: 'Banane',          price: 0.80, icon: 'Sparkles',  color: '#E4C0A8', category: 'waffle_topping' },
  { id: 'schokosauce',  name: 'Schoko-Soße',     price: 0.80, icon: 'Droplets',  color: '#3a2820', category: 'waffle_topping' },
  { id: 'nutella',      name: 'Nutella',         price: 1.00, icon: 'Cookie',    color: '#6b3a1f', category: 'waffle_topping' },
  { id: 'oreo',         name: 'Oreo-Crumbs',     price: 0.80, icon: 'Cookie',    color: '#2d1f19', category: 'waffle_topping' },
  { id: 'sprinkles',    name: 'Bunte Streusel',  price: 0.60, icon: 'Sparkles',  color: '#CC624C', category: 'waffle_topping' },
  { id: 'base-waffle',  name: 'Basis Waffel',    price: 4.80, icon: 'Layers',    color: '#f5efe8', category: 'waffle_base' }
];

async function seedDatabase() {
  console.log('Seeding menu_items to Firestore using client SDK...');
  
  const batch = writeBatch(db);
  
  for (const item of MENU_ITEMS) {
    const docRef = doc(db, 'menu_items', item.id);
    batch.set(docRef, {
      ...item,
      createdAt: new Date().toISOString(),
    });
  }

  try {
    await batch.commit();
    console.log(`Successfully seeded ${MENU_ITEMS.length} items to the 'menu_items' collection!`);
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
