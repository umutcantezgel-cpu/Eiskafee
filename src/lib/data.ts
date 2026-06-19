import { AppData } from "../types";
import { BUSINESS } from "@/lib/seo/business-data";

export const store_settings = {
  is_open: true,
  is_accepting_orders: true,
  busy_mode: false,
  pickup_time_estimate_mins: 15,
  phone: BUSINESS.phone,
  emergencyNotice: null,
};

export const HF_DATA: AppData = {
  config: {
    name: "Hey Fede!",
    tagline: "Dessertbar & Café",
    address: `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
    phone: BUSINESS.phone,
    whatsapp: "0176 25026991",
    instagram: "heyfede_dessertbar",
    rating: 4.8,
    reviewCount: 84,
  },
  categories: [
    { id: "eis-getraenke", label: "Eis - Getränke", icon: "Coffee" },
    { id: "kalte-getraenke", label: "Kalte Getränke", icon: "Droplets" },
    { id: "warme-getraenke", label: "Warme Getränke", icon: "Coffee" },
    { id: "eisbecher", label: "Eisbecher", icon: "IceCream" },
    { id: "kinderbecher", label: "Kinderbecher", icon: "Cake" },
    { id: "special-shake", label: "Special Shake", icon: "Coffee" },
    { id: "fede-boxen", label: "Fede Boxen", icon: "Package" },
    { id: "crepes", label: "Crêpes", icon: "Cake" },
    { id: "crepes-herzhaft", label: "Crêpes Herzhaft", icon: "Sandwich" },
    { id: "bubble-waffle", label: "Bubble Waffle", icon: "Layers" },
  ],
  menu: {
    "eis-getraenke": {
      desc: "",
      items: [
        {
          id: "eg1",
          name: "Eisschokolade (0,3l)",
          price: "6,00€",
          desc: "2 Eiskugeln, Kakao, Sahne, Schokosoße",
          image: "/assets/menu/eisschokolade.png",
          imageAlt:
            "Eine köstliche Eisschokolade serviert mit zwei cremigen Kugeln Eis, reichlich Kakaopulver, Sahnehaube und Schokosoße verziert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Eisschokolade (0,3l)",
        },
        {
          id: "eg2",
          name: "Eisschokolade (0,5l)",
          price: "7,00€",
          desc: "3 Eiskugeln, Kakao, Sahne, Schokosoße",
          image: "/assets/menu/eisschokolade.png",
          imageAlt:
            "Große Eisschokolade mit drei Kugeln feinstem Vanilleeis, kakaohaltigem Getränk, cremiger Sahne und Schokoladensoße verziert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Eisschokolade (0,5l)",
        },
        {
          id: "eg3",
          name: "Eiskaffee (0,3l)",
          price: "6,00€",
          desc: "2 Eiskugeln, Kaffee, Sahne, Kaffee-Soße",
          image: "/assets/menu/eiskaffee.png",
          imageAlt:
            "Erfrischender Eiskaffee mit zwei Kugeln Vanilleeis, kräftigem Kaffee, einer Sahnehaube und feiner Kaffeesoße dekoriert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Eiskaffee (0,3l)",
        },
        {
          id: "eg4",
          name: "Eiskaffee (0,5l)",
          price: "7,00€",
          desc: "3 Eiskugeln, Kaffee, Sahne, Kaffee-Soße",
          image: "/assets/menu/eiskaffee.png",
          imageAlt:
            "Großer Eiskaffee mit drei Kugeln Vanilleeis, starkem Kaffee, frischer Schlagsahne und süßer Kaffeesoße garniert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Eiskaffee (0,5l)",
        },
        {
          id: "eg5",
          name: "Milchshake (0,3l)",
          price: "5,50€",
          desc: "",
          image: "/assets/menu/milchshake.png",
          imageAlt:
            "Cremiger, frisch gemixter Milchshake mit zwei Kugeln Eis nach Wahl, perfekt zubereitet für süßen Genuss bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Milchshake (0,3l)",
        },
        {
          id: "eg6",
          name: "Milchshake (0,5l)",
          price: "6,50€",
          desc: "",
          image: "/assets/menu/milchshake.png",
          imageAlt:
            "Großer, frisch zubereiteter Milchshake mit drei Kugeln Premium-Eis, cremig geschlagen für erfrischenden Geschmack bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Milchshake (0,5l)",
        },
      ],
    },
    "kalte-getraenke": {
      desc: "mit Eiswürfel",
      items: [
        {
          id: "kg1",
          name: "Iced Americano",
          price: "5,00€",
          desc: "",
          image: "/assets/menu/iced-americano.png",
          imageAlt:
            "Klassischer Iced Americano aus frisch gebrühten Espressoschüssen, serviert auf Eiswürfeln für eine kühle Erfrischung bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Iced Americano",
        },
        {
          id: "kg2",
          name: "Iced Latte Macchiato",
          price: "6,00€",
          desc: "Sirup nach Wahl",
          image: "/assets/menu/latte-macchiato.png",
          imageAlt:
            "Kalter Iced Latte Macchiato mit cremig geschäumter Milch, kräftigem Espresso und feinem Sirup nach Wahl verfeinert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Iced Latte Macchiato",
        },
        {
          id: "kg3",
          name: "Iced Matcha Latte",
          price: "6,00€",
          desc: "Traditional Matcha mit Milch",
          image: "/assets/menu/iced-matcha-latte.png",
          imageAlt:
            "Erfrischender Iced Matcha Latte zubereitet mit traditionellem japanischen Matcha-Grüntee und kalter, cremiger Milch bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Iced Matcha Latte",
        },
        {
          id: "kg4",
          name: "Matcha Erdbeere",
          price: "7,50€",
          desc: "mit Erdbeerpüree (Hausgemacht)",
          image: "/assets/menu/matcha-erdbeere.png",
          imageAlt:
            "Iced Matcha Latte kombiniert mit hausgemachtem süßem Erdbeerpüree für eine fruchtig-herbe Erfrischung bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Matcha Erdbeere",
        },
        {
          id: "kg5",
          name: "Matcha Mango",
          price: "7,50€",
          desc: "mit Mangopüree (Hausgemacht)",
          image: "/assets/menu/matcha-mango.png",
          imageAlt:
            "Matcha Mango Kaltgetränk zubereitet mit aromatischem Mangopüree und cremigem Matcha für exotischen Genuss bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Matcha Mango",
        },
        {
          id: "kg-ext1",
          name: "Extra: Hafer, Soja, Kokos",
          price: "0,50€",
          desc: "",
        },
        { id: "kg-ext2", name: "Extra: Sirup", price: "1,00€", desc: "" },
      ],
    },
    "warme-getraenke": {
      desc: "",
      items: [
        {
          id: "wg1",
          name: "Kaffee",
          price: "2,50€",
          desc: "",
          image: "/assets/menu/kaffee.png",
          imageAlt:
            "Tasse frisch gebrühter, aromatischer Kaffee zubereitet aus erlesenen Bohnen für den perfekten Kaffeegenuss bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Kaffee",
        },
        {
          id: "wg2",
          name: "Espresso",
          price: "2,50€",
          desc: "",
          image: "/assets/menu/espresso.png",
          imageAlt:
            "Klassischer Espresso mit einer dichten, goldbraunen Crema, intensiv und aromatisch im Geschmack bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Espresso",
        },
        {
          id: "wg3",
          name: "Doppio Espresso",
          price: "4,00€",
          desc: "",
          image: "/assets/menu/doppio-espresso.png",
          imageAlt:
            "Doppelter Espresso zubereitet aus frisch gemahlenen Kaffeebohnen für einen kräftigen und belebenden Genuss bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Doppio Espresso",
        },
        {
          id: "wg4",
          name: "Cappuccino",
          price: "3,50€",
          desc: "",
          image: "/assets/menu/cappuccino.png",
          imageAlt:
            "Cappuccino mit einem kräftigen Espresso, warmer Milch und einer samtigen Haube aus Milchschaum bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Cappuccino",
        },
        {
          id: "wg5",
          name: "Milchkaffee",
          price: "3,50€",
          desc: "",
          image: "/assets/menu/kaffee.png",
          imageAlt:
            "Klassischer Milchkaffee zubereitet mit frisch gebrühtem Kaffee und einem hohen Anteil warmer Milch bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Milchkaffee",
        },
        {
          id: "wg6",
          name: "Latte Macchiato",
          price: "4,00€",
          desc: "",
          image: "/assets/menu/latte-macchiato.png",
          imageAlt:
            "Schichtgetränk Latte Macchiato mit heißer Milch, cremigem Milchschaum und einem frisch aufgebrühten Espresso bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Latte Macchiato",
        },
        {
          id: "wg7",
          name: "Affogato",
          price: "4,00€",
          desc: "",
          image: "/assets/menu/affogato.png",
          imageAlt:
            "Traditioneller italienischer Affogato bestehend aus einer Kugel Vanilleeis, übergossen mit einem heißen Espresso bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Affogato",
        },
        {
          id: "wg8",
          name: "Kakao",
          price: "2,50€",
          desc: "",
          image: "/assets/menu/kakao.png",
          imageAlt:
            "Warmer, süßer Kakao zubereitet mit cremiger Milch für gemütliche Momete im Hey Fede Café",
          imageTitle: "Kakao",
        },
        {
          id: "wg9",
          name: "Tee",
          price: "2,50€",
          desc: "",
          image: "/assets/menu/tee.png",
          imageAlt:
            "Heißer Tee zubereitet aus ausgewählten Kräutern und Früchten, serviert in einer gemütlichen Tasse bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Tee",
        },
        {
          id: "wg-ext1",
          name: "Extra: Hafer, Soja, Kokos",
          price: "0,50€",
          desc: "",
        },
        { id: "wg-ext2", name: "Extra: Sirup", price: "1,00€", desc: "" },
      ],
    },
    eisbecher: {
      desc: "",
      items: [
        {
          id: "eb1",
          name: "Schoko",
          price: "8,00€",
          desc: "",
          image: "/assets/menu/eisbecher-schoko.png",
          imageAlt:
            "Schokoladen-Eisbecher verziert mit verschiedenen Eissorten, cremiger Sahne und einer feinen Schokoladensoße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Schoko",
        },
        {
          id: "eb2",
          name: "Haselnuss",
          price: "8,50€",
          desc: "",
          image: "/assets/menu/eisbecher-haselnuss.png",
          imageAlt:
            "Köstlicher Haselnuss-Eisbecher verfeinert mit aromatischen Premium-Nusseissorten, extra knackigen ganzen Haselnüssen und einer süßen Karamellsoße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Haselnuss",
        },
        {
          id: "eb3",
          name: "Walnuss",
          price: "9,00€",
          desc: "",
          image: "/assets/menu/eisbecher-walnuss.png",
          imageAlt:
            "Exklusiver Walnuss-Eisbecher serviert mit cremigen Premium-Eiskugeln, extra knackigen Walnüssen, einer großen Sahnehaube und süßem Nusslikör-Aroma bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Walnuss",
        },
        {
          id: "eb4",
          name: "Erdbeere",
          price: "9,00€",
          desc: "",
          image: "/assets/menu/eisbecher-erdbeere.png",
          imageAlt:
            "Erdbeer-Eisbecher mit fruchtigen Kugel Eis, frischen Erdbeerscheiben, Schlagsahne und hausgemachter Erdbeersoße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Erdbeere",
        },
        {
          id: "eb5",
          name: "Frucht",
          price: "8,50€",
          desc: "",
          image: "/assets/menu/eisbecher-frucht.png",
          imageAlt:
            "Fruchtiger Eisbecher angerichtet mit gemischtem Saisonsalat aus Früchten, verschiedenen Kugel Eis und Sahne bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Frucht",
        },
        {
          id: "eb6",
          name: "Bananasplit",
          price: "8,50€",
          desc: "",
          image: "/assets/menu/eisbecher-bananasplit.png",
          imageAlt:
            "Klassischer Bananensplit Eisbecher mit einer halbierten Banane, Vanilleeis, Sahnehaube und warmer Schokoladensoße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Bananasplit",
        },
        {
          id: "eb7",
          name: "Amarena",
          price: "8,50€",
          desc: "",
          image: "/assets/menu/eisbecher-amarena.png",
          imageAlt:
            "Amarena-Eisbecher garniert mit cremigem Eis, süßen Amarena-Kirschen, Sahne und feiner Kirschsoße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Amarena",
        },
        {
          id: "eb8",
          name: "Spaghetti",
          price: "8,50€",
          desc: "",
          image: "/assets/menu/kinderbecher-spaghetti.png",
          imageAlt:
            "Spaghetti-Eisbecher zubereitet aus Vanilleeis, Erdbeersoße und geraspelter weißer Schokolade für die klassische Optik bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Spaghetti",
        },
      ],
    },
    kinderbecher: {
      desc: "",
      items: [
        {
          id: "kb1",
          name: "Zuckerwatte",
          price: "4,50€",
          desc: "eine Eiskugel, Sahne & Zuckerwatte",
          image: "/assets/menu/kinderbecher-zuckerwatte.png",
          imageAlt:
            "Zuckerwatte Kinderbecher serviert mit einer Kugel Eis, frischer Schlagsahne und bunter Zuckerwatte dekoriert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Zuckerwatte",
        },
        {
          id: "kb2",
          name: "Regenbogen",
          price: "4,50€",
          desc: "eine Eiskugel, Sahne & Streusel",
          image: "/assets/menu/kinderbecher-regenbogen.png",
          imageAlt:
            "Regenbogen Kinderbecher zubereitet mit einer Eiskugel, Sahnehaube und vielen bunten Streuseln verziert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Regenbogen",
        },
        {
          id: "kb3",
          name: "Marshmallow",
          price: "4,50€",
          desc: "eine Eiskugel, Sahne & Marshmallows",
          image: "/assets/menu/kinderbecher-marshmallow.png",
          imageAlt:
            "Marshmallow Kinderbecher bestehend aus einer Kugel Eis nach Wahl, Sahne and weichen Marshmallows bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Marshmallow",
        },
        {
          id: "kb4",
          name: "Spaghetti",
          price: "5,50€",
          desc: "mit Smarties",
          image: "/assets/menu/kinderbecher-spaghetti.png",
          imageAlt:
            "Kinder-Spaghetti-Eisbecher dekoriert mit Vanilleeis, fruchtiger Erdbeersoße und einer Handvoll bunten Smarties bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Spaghetti",
        },
      ],
    },
    "special-shake": {
      desc: "0,4l + Sahne · je 7,50€",
      items: [
        {
          id: "ss1",
          name: "Nutella<sup>G, H, F</sup>",
          price: "7,50€",
          desc: "",
          image: "/assets/menu/special-shake-nutella.png",
          imageAlt:
            "Cremiger Nutella Special Shake frisch zubereitet mit echter Nutella, Milch und einer Sahnehaube bei Hey Fede Wetzlar Altstadt",
          imageTitle: "NutellaG, H, F",
        },
        {
          id: "ss2",
          name: "Oreo<sup>G, F, A</sup>",
          price: "7,50€",
          desc: "",
          image: "/assets/menu/special-shake-oreo.png",
          imageAlt:
            "Oreo Special Shake gemixt mit knusprigen Oreo-Keksen, kalter Milch, Sahne und Keksbröseln bei Hey Fede Wetzlar Altstadt",
          imageTitle: "OreoG, F, A",
        },
        {
          id: "ss3",
          name: "Snickers<sup>G, E</sup>",
          price: "7,50€",
          desc: "",
          image: "/assets/menu/special-shake-snickers.png",
          imageAlt:
            "Erdnussiger Snickers Special Shake zubereitet mit Snickers-Riegeln, Karamellsoße, Milch und frischer Sahne bei Hey Fede Wetzlar Altstadt",
          imageTitle: "SnickersG, E",
        },
        {
          id: "ss4",
          name: "Bueno<sup>G, H, F</sup>",
          price: "7,50€",
          desc: "",
          image: "/assets/menu/special-shake-bueno.png",
          imageAlt:
            "Bueno Special Shake gemixt mit knusprigen Kinder Bueno Riegeln, Milch und feiner Sahnehaube bei Hey Fede Wetzlar Altstadt",
          imageTitle: "BuenoG, H, F",
        },
        {
          id: "ss5",
          name: "Lotus<sup>G, F, A</sup>",
          price: "7,50€",
          desc: "",
          image: "/assets/menu/special-shake-lotus.png",
          imageAlt:
            "Lotus Special Shake zubereitet mit originalen Lotus Biscoff Keksen, Milch, Sahne und Kekssoße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "LotusG, F, A",
        },
        {
          id: "ss6",
          name: "Cheesecake<sup>G, L</sup>",
          price: "7,50€",
          desc: "",
          image: "/assets/menu/special-shake-cheesecake.png",
          imageAlt:
            "Cheesecake Special Shake cremig gemixt mit Frischkäse-Aroma, Milch, Sahne und feinen Keksbröseln bei Hey Fede Wetzlar Altstadt",
          imageTitle: "CheesecakeG, L",
        },
      ],
    },
    "fede-boxen": {
      desc: "To Go und vor Ort!",
      items: [
        {
          id: "fb1",
          name: "Fruit Fiesta",
          price: "6,50€",
          desc: "versch. Früchte & eine Soße",
          image: "/assets/menu/fede-box-fruit-fiesta.png",
          imageAlt:
            "Fruit Fiesta Box gefüllt mit einer bunten Auswahl an frischen Früchten und einer Soße nach Wahl bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Fruit Fiesta",
        },
        {
          id: "fb2",
          name: "Pancake Picknick<sup>A, C, G</sup>",
          price: "8,50€",
          desc: "12 Pancakes, 2 Fruchtsorten, eine Soße",
          image: "/assets/menu/fede-box-pancake-picknick.png",
          imageAlt:
            "Pancake Picknick Box mit 12 warmen Pancakes, zwei verschiedenen frischen Fruchtsorten und einer süßen Soße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Pancake PicknickA, C, G",
        },
        {
          id: "fb3",
          name: "Mix Box<sup>A, C, G</sup>",
          price: "15,00€",
          desc: "12 Pancakes, Bubble Waffle, 3 Fruchtsorten, 2 Soßen",
          image: "/assets/menu/fede-box-mix-box.png",
          imageAlt:
            "Mix Box bestehend aus 12 Pancakes, einer warmen Bubble Waffel, drei Fruchtsorten und zwei Soßen bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Mix BoxA, C, G",
        },
        {
          id: "fb4",
          name: "Pancake Picknick klein",
          price: "6,00€",
          desc: "6 Pancakes, eine Fruchtsorte, eine Soße",
          image: "/assets/menu/fede-box-pancake-picknick.png",
          imageAlt:
            "Kleine Pancake Picknick Box mit 6 flaumigen Pancakes, einer Fruchtsorte und einer süßen Soße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Pancake Picknick klein",
        },
        {
          id: "fb5",
          name: "Fede & Friends<sup>A, C, G, H</sup>",
          price: "30,00€",
          desc: "12 Pancakes, eine Bubble Waffle, ein Crêpes, 3 mini Croissants, versch. Früchte, Cookies, 4 Soßen nach Wahl",
          image: "/assets/menu/fede-box-fede-and-friends.png",
          imageAlt:
            "Große Fede and Friends Box gefüllt mit Pancakes, Waffel, Crêpe, Croissants, Früchten und vier leckeren Soßen bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Fede & FriendsA, C, G, H",
        },
      ],
    },
    crepes: {
      desc: "Unsere Fruchtsorten sind SAISONBEDINGT erhältlich",
      items: [
        {
          id: "cr1",
          name: "Puderzucker oder Zimt / Zucker<sup>A, C, G</sup>",
          price: "4,00€",
          desc: "",
          image: "/assets/menu/crepe-puderzucker.png",
          imageAlt:
            "Klassischer warmer Crêpe wahlweise mit feinem Puderzucker oder Zimt und Zucker bestäubt bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Puderzucker oder Zimt / ZuckerA, C, G",
        },
        {
          id: "cr2",
          name: "Nutella<sup>A, C, G, H, F</sup>",
          price: "5,50€",
          desc: "",
          image: "/assets/menu/crepe-nutella.png",
          imageAlt:
            "Warmer französischer Crêpe großzügig bestrichen mit cremiger Nutella für den Schokoladengenuss bei Hey Fede Wetzlar Altstadt",
          imageTitle: "NutellaA, C, G, H, F",
        },
        {
          id: "cr3",
          name: "Eigene Kreation<sup>A, C, G</sup>",
          price: "7,00€",
          desc: "1x Topping + 1x Soße",
          image: "/assets/menu/bubble-waffle-eigene-kreation.png",
          imageAlt:
            "Eigene Crêpe Kreation individuell zusammengestellt mit einem leckeren Topping und einer süßen Soße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Eigene KreationA, C, G",
        },
        {
          id: "cr4",
          name: "Crêpes Kinder Riegel<sup>A, C, G, F</sup>",
          price: "5,50€",
          desc: "",
          image: "/assets/menu/crepe-kinder-riegel.png",
          imageAlt:
            "Süßer Crêpe gefüllt mit geschmolzenen Kinder Riegeln, warm serviert für Schokoladenliebhaber bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Crêpes Kinder RiegelA, C, G, F",
        },
        {
          id: "cr5",
          name: "Crêpes Yogurette<sup>A, C, G, F, H</sup>",
          price: "5,50€",
          desc: "",
          image: "/assets/menu/crepe-yogurette.png",
          imageAlt:
            "Fruchtig-schokoladiger, warmer Crêpe reichlich gefüllt mit sanft geschmolzenen Yogurette-Riegeln und einer extra feinen Erdbeernote bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Crêpes YoguretteA, C, G, F, H",
        },
        {
          id: "cr6",
          name: "Crêpes Pistazie<sup>A, C, G, H</sup>",
          price: "6,00€",
          desc: "",
          image: "/assets/menu/crepe-pistazie.png",
          imageAlt:
            "Exklusiver Crêpe bestrichen mit hochwertiger Pistaziencreme und garniert mit gehackten Pistazienkernen bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Crêpes PistazieA, C, G, H",
        },
        {
          id: "cr7",
          name: "Crêpes Lotus<sup>F, A, C, G</sup>",
          price: "7,00€",
          desc: "",
          image: "/assets/menu/crepe-lotus.png",
          imageAlt:
            "Süßer Crêpe gefüllt mit feiner Lotus Biscoff Creme und knusprigen Lotus Keksbröseln bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Crêpes LotusF, A, C, G",
        },
        {
          id: "cr8",
          name: "Crêpes Bueno<sup>A, C, G, F, H</sup>",
          price: "7,00€",
          desc: "",
          image: "/assets/menu/crepe-bueno.png",
          imageAlt:
            "Süßer Crêpe gefüllt mit geschmolzenen Kinder Bueno Stücken und cremiger Haselnusssoße bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Crêpes Bueno",
        },
      ],
    },
    "crepes-herzhaft": {
      desc: "Allergene: A, C, G",
      items: [
        {
          id: "crh1",
          name: "Schinken & Käse<sup>A, C, G</sup>",
          price: "7,00€",
          desc: "",
          image: "/assets/menu/crepe-herzhaft-schinken-kaese.png",
          imageAlt:
            "Herzhafter Crêpe gefüllt mit saftigem Kochschinken und zart schmelzendem Käse warm serviert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Schinken & KäseA, C, G",
        },
        {
          id: "crh2",
          name: "Salami & Käse<sup>A, C, G</sup>",
          price: "7,00€",
          desc: "",
          image: "/assets/menu/crepe-herzhaft-salami-kaese.png",
          imageAlt:
            "Herzhafter Crêpe belegt mit würziger Salami und geschmolzenem Käse für den herzhaften Appetit bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Salami & KäseA, C, G",
        },
        {
          id: "crh3",
          name: "Caprese (Tomate / Mozzarella)<sup>A, C, G</sup>",
          price: "8,00€",
          desc: "",
          image: "/assets/menu/crepe-herzhaft-caprese.png",
          imageAlt:
            "Vegetarischer herzhafter Crêpe belegt mit Tomatenscheiben, cremigem Mozzarella und frischem Basilikum bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Caprese (Tomate / Mozzarella)A, C, G",
        },
      ],
    },
    "bubble-waffle": {
      desc: "fluffig, knusprig, warm · Allergene: A, C, G",
      items: [
        {
          id: "bw1",
          name: "Puderzucker<sup>A, C, G</sup>",
          price: "4,50€",
          desc: "",
          image: "/assets/menu/bubble-waffle-puderzucker.png",
          imageAlt:
            "Eine fluffige warme Bubble Waffle klassisch bestäubt mit feinem Puderzucker serviert bei Hey Fede Wetzlar Altstadt",
          imageTitle: "PuderzuckerA, C, G",
        },
        {
          id: "bw2",
          name: "Soße nach Wahl<sup>A, C, G</sup>",
          price: "6,00€",
          desc: "",
          image: "/assets/menu/bubble-waffle-sosse.png",
          imageAlt:
            "Frisch gebackene Bubble Waffle serviert mit einer süßen Soße nach Wahl des Kunden bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Soße nach WahlA, C, G",
        },
        {
          id: "bw3",
          name: "Eis + Sahne<sup>A, C, G</sup>",
          price: "7,50€",
          desc: "oder zwei Eiskugeln statt Sahne",
          image: "/assets/menu/bubble-waffle-eis-sahne.png",
          imageAlt:
            "Warme Bubble Waffle serviert mit einer Kugel Eis und einer portion frischer Schlagsahne bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Eis + SahneA, C, G",
        },
        {
          id: "bw4",
          name: "Eigene Kreation<sup>A, C, G</sup>",
          price: "11,00€",
          desc: "Eis + Sahne + 3 Toppings + Soße oder zwei Eiskugeln statt Sahne",
          image: "/assets/menu/bubble-waffle-eigene-kreation.png",
          imageAlt:
            "Eigene Bubble Waffle Kreation serviert mit Eis, Sahne, drei Toppings und einer Soße nach Wahl bei Hey Fede Wetzlar Altstadt",
          imageTitle: "Eigene KreationA, C, G",
        },
      ],
    },
  },
  bestsellers: [
    {
      id: "bs1",
      name: "Fede & Friends Box",
      desc: "Das ultimative Sharing-Erlebnis für Gruppen",
      price: "25,00 €",
      tag: "Bestseller",
      icon: "Package",
    },
    {
      id: "bs2",
      name: "Bubble Waffle Deluxe",
      desc: "Eis + Sahne + 3 Toppings nach Wahl",
      price: "8,80 €",
      tag: "Beliebt",
      icon: "Layers",
    },
    {
      id: "bs3",
      name: "Oreo Special Shake",
      desc: "0,4l · frisch gemixt mit Sahne",
      price: "6,50 €",
      tag: "",
      icon: "Coffee",
    },
    {
      id: "bs4",
      name: "Pancake Picknick",
      desc: "12 Pancakes · 2 Fruchtsorten · Soße",
      price: "7,00 €",
      tag: "",
      icon: "Cake",
    },
  ],
  reviews: [
    {
      id: "r1",
      name: "Sarah M.",
      stars: 5,
      text: "Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend.",
    },
    {
      id: "r2",
      name: "Thomas K.",
      stars: 5,
      text: "Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!",
    },
    {
      id: "r3",
      name: "Lisa R.",
      stars: 5,
      text: "Mit den Kindern dort gewesen - die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch.",
    },
    {
      id: "r4",
      name: "Marco S.",
      stars: 4,
      text: "Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!",
    },
    {
      id: "r5",
      name: "Julia W.",
      stars: 5,
      text: "Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!",
    },
  ],
};

export const { CATEGORIES, MENU, BESTSELLERS, REVIEWS } = {
  CATEGORIES: HF_DATA.categories,
  MENU: HF_DATA.menu,
  BESTSELLERS: HF_DATA.bestsellers,
  REVIEWS: HF_DATA.reviews,
};
