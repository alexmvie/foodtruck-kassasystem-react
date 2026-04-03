import { Product } from './types';

// Color palette for rows - each row gets a unique color
const ROW_COLORS = {
  // Green shades for extras
  green1: 'bg-green-50 border-green-100 text-green-900',
  green2: 'bg-green-100 border-green-200 text-green-900',
  green3: 'bg-emerald-50 border-emerald-100 text-emerald-900',
  green4: 'bg-emerald-100 border-emerald-200 text-emerald-900',
  green5: 'bg-teal-50 border-teal-100 text-teal-900',
  green6: 'bg-teal-100 border-teal-200 text-teal-900',
  green7: 'bg-lime-50 border-lime-100 text-lime-900',
  // Pink shades for coffee
  pink1: 'bg-pink-50 border-pink-100 text-pink-900',
  pink2: 'bg-pink-100 border-pink-200 text-pink-900',
  pink3: 'bg-rose-50 border-rose-100 text-rose-900',
  // Orange shades for waffles
  orange1: 'bg-orange-50 border-orange-100 text-orange-900',
  orange2: 'bg-orange-100 border-orange-200 text-orange-900',
};

export const MAIN_MENU_ROWS: Product[][] = [
  // Row 1: Orange - Waffles & Soft Ice
  [
    { id: 'w1', name: 'Bubble Waffle', price: 8, color: ROW_COLORS.orange2, menuCategoryId: 'cat_menu_extra' },
    { id: 'w2', name: 'Belgian Waffle', price: 8, color: ROW_COLORS.orange2, menuCategoryId: 'cat_menu_extra' },
    { id: 'i1', name: 'Softeis', price: 4, color: ROW_COLORS.orange2, menuCategoryId: 'cat_menu_extra' },
  ],
  // Row 2: Green - Kaffee & Süsses
  [
    { id: 'cat_kaffee', name: 'Kaffee', price: 0, isCategory: true, color: ROW_COLORS.green2 },
    { id: 'cat_süsses', name: 'Süsses', price: 0, isCategory: true, color: ROW_COLORS.green2 },
  ],
  // Row 3: Pink - Drinks & AF Drinks
  [
    { id: 'cat_drinks', name: 'Drinks', price: 0, isCategory: true, color: ROW_COLORS.pink2 },
    { id: 'cat_af_drinks', name: 'AF Drinks', price: 0, isCategory: true, color: ROW_COLORS.pink2 },
  ],
  // Row 4: Green - Extras
  [
    { id: 'cat_extra', name: 'Extras', price: 0, isCategory: true, color: ROW_COLORS.green7 },
  ],
];

export const CATEGORY_ITEMS_ROWS: Record<string, Product[][]> = {
  'cat_extra': [
    // Row 1: Basic extras - 3 items (Schlagobers, Vegan, Eis) + empty slots
    [
      { id: 'ex2', name: 'Schlagobers', price: 1, color: ROW_COLORS.green1 },
      { id: 'ex2v', name: 'Schlagobers Vegan', price: 2, color: ROW_COLORS.green1 },
      { id: 'ex6', name: 'Portion Eis', price: 2, color: ROW_COLORS.green1 },
    ],
    // Row 2: Crunchy extras - 5 items (Marshmellow, Oreo, Smarties, Krokant, Matcha)
    [
      { id: 'ex_marsh', name: 'Marshmellow', price: 1, color: ROW_COLORS.green2 },
      { id: 'ex3', name: 'Oreo', price: 1, color: ROW_COLORS.green2 },
      { id: 'ex4', name: 'Smarties', price: 1, color: ROW_COLORS.green2 },
      { id: 'ex5', name: 'Krokant', price: 1, color: ROW_COLORS.green2 },
      { id: 'ex_matcha', name: 'Matcha', price: 2, color: ROW_COLORS.green2 },
    ],
    // Row 3: Fruits - 4 items (Banane, Erdbeere, Heidelbeere, Himbeere)
    [
      { id: 'ex_banana', name: 'Banane', price: 1, color: ROW_COLORS.green3 },
      { id: 'ex_erdbeer', name: 'Erdbeere', price: 1, color: ROW_COLORS.green3 },
      { id: 'ex_heidelbeer', name: 'Heidelbeere', price: 1, color: ROW_COLORS.green3 },
      { id: 'ex_himbeer', name: 'Himbeere', price: 1, color: ROW_COLORS.green3 },
    ],
    // Row 4: Sauces - 6 items
    [
      { id: 'ex_schoko', name: 'Schoko Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_nutella', name: 'Nutella Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_karamell', name: 'Karamell Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_himbeer_sauce', name: 'Himbeer Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_waldbeer', name: 'Waldbeer Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_erdbeer_sauce', name: 'Erdbeer Sauce', price: 1, color: ROW_COLORS.green4 },
    ],
    // Row 5: Free toppings - 2 items (Zimt, Staubzucker)
    [
      { id: 'ex_zimt', name: 'Zimt', price: 0, color: ROW_COLORS.green5 },
      { id: 'ex_staubzucker', name: 'Staubzucker', price: 0, color: ROW_COLORS.green5 },
    ],
    // Row 6: Milk options - 4 items
    [
      { id: 'c8', name: 'Hafermilch', price: 1, color: ROW_COLORS.green6 },
      { id: 'c_kokos', name: 'Kokosmilch', price: 1, color: ROW_COLORS.green6 },
      { id: 'c9', name: 'Laktosefrei', price: 0, color: ROW_COLORS.green6 },
      { id: 'c10', name: 'Koffeinfrei', price: 0, color: ROW_COLORS.green6 },
    ],
    // Row 7: Syrups - 2 items
    [
      { id: 'c_vanille', name: 'Vanille Sirup', price: 1, color: ROW_COLORS.green7 },
      { id: 'c_karamell_sirup', name: 'Karamell Sirup', price: 1, color: ROW_COLORS.green7 },
    ]
  ],
  'cat_menu_extra': [
    // Row 1: Basic extras - 3 items (Schlagobers, Vegan, Eis)
    [
      { id: 'ex2', name: 'Schlagobers', price: 1, color: ROW_COLORS.green1 },
      { id: 'ex2v', name: 'Schlagobers Vegan', price: 2, color: ROW_COLORS.green1 },
      { id: 'ex6', name: 'Portion Eis', price: 2, color: ROW_COLORS.green1 },
    ],
    // Row 2: Crunchy extras - 5 items
    [
      { id: 'ex_marsh', name: 'Marshmellow', price: 1, color: ROW_COLORS.green2 },
      { id: 'ex3', name: 'Oreo', price: 1, color: ROW_COLORS.green2 },
      { id: 'ex4', name: 'Smarties', price: 1, color: ROW_COLORS.green2 },
      { id: 'ex5', name: 'Krokant', price: 1, color: ROW_COLORS.green2 },
      { id: 'ex_matcha', name: 'Matcha', price: 2, color: ROW_COLORS.green2 },
    ],
    // Row 3: Fruits - 4 items
    [
      { id: 'ex_banana', name: 'Banane', price: 1, color: ROW_COLORS.green3 },
      { id: 'ex_erdbeer', name: 'Erdbeere', price: 1, color: ROW_COLORS.green3 },
      { id: 'ex_heidelbeer', name: 'Heidelbeere', price: 1, color: ROW_COLORS.green3 },
      { id: 'ex_himbeer', name: 'Himbeere', price: 1, color: ROW_COLORS.green3 },
    ],
    // Row 4: Sauces - 6 items
    [
      { id: 'ex_schoko', name: 'Schoko Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_nutella', name: 'Nutella Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_karamell', name: 'Karamell Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_himbeer_sauce', name: 'Himbeer Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_waldbeer', name: 'Waldbeer Sauce', price: 1, color: ROW_COLORS.green4 },
      { id: 'ex_erdbeer_sauce', name: 'Erdbeer Sauce', price: 1, color: ROW_COLORS.green4 },
    ],
    // Row 5: Free toppings - 2 items
    [
      { id: 'ex_zimt', name: 'Zimt', price: 0, color: ROW_COLORS.green5 },
      { id: 'ex_staubzucker', name: 'Staubzucker', price: 0, color: ROW_COLORS.green5 },
    ]
  ],
  'cat_süsses': [
    [
      { id: 's1', name: 'Kuchen', price: 4, color: ROW_COLORS.green1 },
      { id: 's2', name: 'Vegan Cookies', price: 3, color: ROW_COLORS.green1 },
      { id: 's3', name: 'Protein Balls', price: 3, color: ROW_COLORS.green1 },
      { id: 's4', name: 'Mandorle', price: 3, color: ROW_COLORS.green1 },
    ]
  ],
  'cat_kaffee': [
    // Row 1: Basic coffee
    [
      { id: 'c1', name: 'Espresso', price: 3.5, color: ROW_COLORS.pink1, menuCategoryId: 'cat_kaffee_extra' },
      { id: 'c2', name: 'Doppelter Espresso', price: 5.5, color: ROW_COLORS.pink1, menuCategoryId: 'cat_kaffee_extra' },
      { id: 'c3', name: 'Verlängerter', price: 3.5, color: ROW_COLORS.pink1, menuCategoryId: 'cat_kaffee_extra' },
      { id: 'c4', name: 'Cappuccino', price: 4.5, color: ROW_COLORS.pink1, menuCategoryId: 'cat_kaffee_extra' },
    ],
    // Row 2: Specialty coffee
    [
      { id: 'c_latte', name: 'Latte Macchiato', price: 5, color: ROW_COLORS.pink2, menuCategoryId: 'cat_kaffee_extra' },
      { id: 'c6', name: 'Matcha', price: 6.5, color: ROW_COLORS.pink2, menuCategoryId: 'cat_kaffee_extra' },
      { id: 'c7', name: 'Chai', price: 6.5, color: ROW_COLORS.pink2, menuCategoryId: 'cat_kaffee_extra' },
      { id: 'c5', name: 'Kakao', price: 5.5, color: ROW_COLORS.pink2, menuCategoryId: 'cat_kaffee_extra' },
    ]
  ],
  'cat_kaffee_extra': [
    [
      { id: 'c8', name: 'Hafermilch', price: 1, color: ROW_COLORS.pink1 },
      { id: 'c_kokos', name: 'Kokosmilch', price: 1, color: ROW_COLORS.pink1 },
      { id: 'c9', name: 'Laktosefrei', price: 0, color: ROW_COLORS.pink1 },
    ],
    [
      { id: 'c10', name: 'Koffeinfrei', price: 0, color: ROW_COLORS.pink2 },
      { id: 'c_vanille', name: 'Vanille Sirup', price: 1, color: ROW_COLORS.pink2 },
      { id: 'c_karamell_sirup', name: 'Karamell Sirup', price: 1, color: ROW_COLORS.pink2 },
    ],
    [
      { id: 'ex2', name: 'Schlagobers', price: 1, color: ROW_COLORS.pink3 },
      { id: 'ex2v', name: 'Schlagobers Vegan', price: 2, color: ROW_COLORS.pink3 },
    ]
  ],
  'cat_drinks': [
    // Row 1: Spirits
    [
      { id: 'a1', name: 'Aperol', price: 6.5, color: ROW_COLORS.pink1 },
      { id: 'a2', name: 'Limoncello', price: 6.5, color: ROW_COLORS.pink1 },
      { id: 'a3', name: 'Hugo', price: 6.5, color: ROW_COLORS.pink1 },
    ],
    // Row 2: Mixed drinks
    [
      { id: 'a4', name: 'Frizzante', price: 5, color: ROW_COLORS.pink2 },
      { id: 'a5', name: 'Spritzer', price: 3, color: ROW_COLORS.pink2 },
      { id: 'a_bier', name: 'Bier', price: 4, color: ROW_COLORS.pink2 },
    ],
    // Row 3: Hot drinks
    [
      { id: 'a_glühwein', name: 'Glühwein', price: 5.5, color: ROW_COLORS.pink1 },
      { id: 'a7', name: 'Glüh Gin', price: 8.5, color: ROW_COLORS.pink1 },
      { id: 'a8', name: 'Hot Aperol', price: 8.5, color: ROW_COLORS.pink1 },
    ]
  ],
  'cat_af_drinks': [
    // Row 1: Basic drinks
    [
      { id: 'd1', name: 'Mineral', price: 3, color: ROW_COLORS.pink1 },
      { id: 'd2', name: 'Cola', price: 4, color: ROW_COLORS.pink1 },
      { id: 'd3', name: 'Apfelsaft gesprizt', price: 4, color: ROW_COLORS.pink1 },
      { id: 'd4', name: 'Eistee', price: 4, color: ROW_COLORS.pink1 },
    ],
    // Row 2: Premium drinks
    [
      { id: 'd5', name: 'Limonade', price: 5.5, color: ROW_COLORS.pink2 },
      { id: 'd6', name: 'Smoothie', price: 6.5, color: ROW_COLORS.pink2 },
    ]
  ]
};
