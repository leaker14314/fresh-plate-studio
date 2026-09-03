export type Item = {
  name: string;
  note?: string;
  price: string;
  price2?: string;
};

export type Group = {
  title: string;
  columns?: [string, string];
  items: Item[];
};

export type Section = {
  id: string;
  label: string;
  groups: Group[];
};

export const menu: Section[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    groups: [
      {
        title: "Lite",
        items: [
          { name: "Poha (Flattened Rice)", note: "250/500 gm", price: "₹69", price2: "₹99" },
          { name: "Suji Cheela", note: "3 pcs", price: "₹99" },
          { name: "Moong Daal Cheela", note: "2 pcs", price: "₹129" },
        ],
      },
      {
        title: "North Indian",
        items: [
          { name: "Chole Bhature", note: "1 qty", price: "₹109" },
          { name: "Pav Bhaji", note: "1 qty", price: "₹109" },
          { name: "Puri Sabji", note: "1 qty", price: "₹109" },
        ],
      },
      {
        title: "Maggie",
        items: [
          { name: "Plain Maggi", note: "1 qty", price: "₹69" },
          { name: "Masala Maggi", note: "1 qty", price: "₹109" },
          { name: "Cheesy Maggi", note: "1 qty", price: "₹139" },
        ],
      },
      {
        title: "Paratha",
        items: [
          { name: "Fyaz Paratha", note: "2 pcs", price: "₹109" },
          { name: "Aloo Paratha", note: "2 pcs", price: "₹129" },
          { name: "Aloo Pyaz Paratha", note: "2 pcs", price: "₹139" },
          { name: "Paneer Paratha", note: "2 pcs", price: "₹179" },
        ],
      },
      {
        title: "Sandwich",
        items: [
          { name: "Bread Jam", note: "4 pcs", price: "₹49" },
          { name: "Coleslaw Sandwich", note: "2 pcs", price: "₹119" },
          { name: "Masala Sandwich", note: "2 pcs", price: "₹129" },
          { name: "Cheesy Masala Sandwich", note: "2 pcs", price: "₹149" },
        ],
      },
      {
        title: "Eggs",
        items: [
          { name: "Boiled Egg", note: "2 pcs", price: "₹79" },
          { name: "Omelette", note: "2 pcs", price: "₹99" },
          { name: "Bhurji", note: "2 pcs", price: "₹99" },
          { name: "Egg Toast", note: "2 pcs", price: "₹119" },
        ],
      },
    ],
  },
  {
    id: "rice-roti",
    label: "Rice & Roti",
    groups: [
      {
        title: "Rice",
        items: [
          { name: "Plain Rice", note: "250 gm", price: "₹89" },
          { name: "Jeera Rice", note: "250 gm", price: "₹109" },
          { name: "Paneer Pulao", note: "300 gm", price: "₹179" },
          { name: "Veg Fried Rice", note: "300 gm", price: "₹149" },
          { name: "Non-veg Fried Rice", note: "300 gm", price: "₹189" },
        ],
      },
      {
        title: "Roti",
        items: [
          { name: "Tawa Roti — plain", note: "1 pc", price: "₹15" },
          { name: "Tawa Butter / Ghee Roti", note: "1 pc", price: "₹20" },
          { name: "Paratha — plain", note: "1 pc", price: "₹25" },
          { name: "Paratha Butter / Ghee", note: "1 pc", price: "₹30" },
        ],
      },
    ],
  },
  {
    id: "curry",
    label: "Curry",
    groups: [
      {
        title: "Veg Curry & Sabji",
        columns: ["Half", "Full"],
        items: [
          { name: "Dal Fry", note: "150 / 300 gm", price: "₹129", price2: "₹249" },
          { name: "Aloo Jhol", note: "150 gm", price: "₹99", price2: "₹189" },
          { name: "Aloo Jeera", note: "150 gm", price: "₹129", price2: "₹239" },
          { name: "Soy Tomatar", note: "150 gm", price: "₹149", price2: "₹289" },
          { name: "Rajma", note: "150 gm", price: "₹149", price2: "₹289" },
          { name: "Chola", note: "150 gm", price: "₹149", price2: "₹289" },
          { name: "Baingan Bharta", note: "150 gm", price: "₹149", price2: "₹289" },
          { name: "Matar Paneer", note: "150 gm", price: "₹189", price2: "₹369" },
          { name: "Paneer Butter Masala", note: "150 gm", price: "₹199", price2: "₹389" },
        ],
      },
      {
        title: "Non-veg Curry",
        columns: ["Half", "Full"],
        items: [
          { name: "Egg Masala", note: "2 pcs", price: "₹149", price2: "₹289" },
          { name: "Tawa Chicken", note: "4 pcs / 250 gm", price: "₹269", price2: "₹519" },
          { name: "Chicken Rassa", note: "4 pcs / 250 gm", price: "₹289", price2: "₹559" },
          { name: "Tawa Mutton", note: "2 pcs / 250 gm", price: "₹429", price2: "₹848" },
          { name: "Mutton Rassa", note: "2 pcs / 250 gm", price: "₹449", price2: "₹869" },
        ],
      },
    ],
  },
  {
    id: "special",
    label: "Special",
    groups: [
      {
        title: "Thali",
        items: [
          { name: "Simple Thali", price: "₹149" },
          { name: "Delux Thali", price: "₹219" },
          { name: "Chicken Thali", price: "₹289" },
          { name: "Mutton Thali", price: "₹469" },
        ],
      },
      {
        title: "Combo",
        items: [
          { name: "Sabji + Roti", note: "1 plate", price: "₹129" },
          { name: "Rajma Rice", note: "1 plate", price: "₹129" },
          { name: "Puri Sabji", note: "1 plate", price: "₹129" },
          { name: "Dal Khichdi", note: "1 plate", price: "₹139" },
          { name: "Egg Sabji + Paratha", note: "1 plate", price: "₹159" },
          { name: "Chicken Rice", note: "1 plate", price: "₹289" },
          { name: "Mutton Rice", note: "1 plate", price: "₹369" },
        ],
      },
      {
        title: "Biryani",
        items: [
          { name: "Veg Biryani", note: "1 plate", price: "₹179" },
          { name: "Egg Biryani", note: "1 plate", price: "₹199" },
          { name: "Chicken Biryani", note: "1 plate", price: "₹229" },
          { name: "Chicken Biryani 2 pcs", note: "1 plate", price: "₹239" },
          { name: "Chicken Biryani 4 pcs", note: "1 plate", price: "₹289" },
        ],
      },
    ],
  },
  {
    id: "sides",
    label: "Beverages & Sides",
    groups: [
      {
        title: "Beverages",
        items: [
          { name: "Beetroot Juice", note: "400 ml", price: "₹69" },
          { name: "Plain Chaach", note: "400 ml", price: "₹45" },
          { name: "Masala Chaach", note: "400 ml", price: "₹59" },
          { name: "Cold Coffee", note: "400 ml", price: "₹99" },
          { name: "Cold Coffee with ice cream", note: "400 ml", price: "₹129" },
        ],
      },
      {
        title: "Accompaniments",
        items: [
          { name: "Plain Dahi", note: "150 gm", price: "₹89" },
          { name: "Boondi Raita", note: "250 gm", price: "₹99" },
          { name: "Green Salad", note: "250 gm", price: "₹129" },
          { name: "Papad", note: "100 gm", price: "₹149" },
        ],
      },
    ],
  },
];

export const advancePlans = [
  {
    n: "01",
    name: "Mini Meal",
    price: "₹80",
    includes: "Sabzi + 4 Roti + Dal",
  },
  {
    n: "02",
    name: "Medium Meal",
    price: "₹100",
    includes: "Sabzi + 4 Roti + Dal + Rice + Salad",
  },
  {
    n: "03",
    name: "Mega Meal",
    price: "₹140",
    includes: "Sabzi + 4 Paratha + Dal + Jeera Rice + Salad",
  },
];

export const occasionalPlans = [
  { n: "01", name: "Mood to Munch", price: "₹70", includes: "Sabzi + 2 Roti OR Dal Rice" },
  { n: "02", name: "Mini Meal", price: "₹100", includes: "Sabzi + 4 Roti + Dal" },
  { n: "03", name: "Medium Meal", price: "₹120", includes: "Sabzi + 4 Roti + Dal + Rice + Salad" },
  {
    n: "04",
    name: "Mega Meal",
    price: "₹160",
    includes: "Sabzi + 4 Paratha + Dal + Jeera Rice + Salad",
  },
];

export const PHONE = "9784039999";
export const WHATSAPP = "https://wa.me/919784039999";
