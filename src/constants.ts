import { Product } from './types';

export const MAIN_MENU_ROWS: Product[][] = [
  // Row 1: Orange
  [
    { id: 'w1', name: 'Bubble Waffle', price: 8, color: 'bg-orange-100 border-orange-200 text-orange-900' },
    { id: 'w2', name: 'Belgian Waffle', price: 8, color: 'bg-orange-100 border-orange-200 text-orange-900' },
    { id: 'i1', name: 'Softeis', price: 4, color: 'bg-orange-100 border-orange-200 text-orange-900' },
  ],
  // Row 2: Green
  [
    { id: 'cat_extra', name: 'Extras', price: 0, isCategory: true, color: 'bg-green-100 border-green-200 text-green-900' },
    { id: 'cat_süsses', name: 'Süsses', price: 0, isCategory: true, color: 'bg-green-100 border-green-200 text-green-900' },
  ],
  // Row 3: Pink
  [
    { id: 'cat_kaffee', name: 'Kaffee', price: 0, isCategory: true, color: 'bg-pink-100 border-pink-200 text-pink-900' },
    { id: 'cat_drinks', name: 'Drinks', price: 0, isCategory: true, color: 'bg-pink-100 border-pink-200 text-pink-900' },
    { id: 'cat_af_drinks', name: 'AF Drinks', price: 0, isCategory: true, color: 'bg-pink-100 border-pink-200 text-pink-900' },
  ],
];

export const CATEGORY_ITEMS_ROWS: Record<string, Product[][]> = {
  'cat_extra': [
    [
      { id: 'ex2', name: 'Schlagobers', price: 1, color: 'bg-green-50 border-green-100 text-green-900' },
      { id: 'ex6', name: 'Portion Eis', price: 2, color: 'bg-green-50 border-green-100 text-green-900' },
    ],
    [
      { id: 'ex1', name: 'Obst', price: 1, color: 'bg-green-50 border-green-100 text-green-900' },
      { id: 'ex3', name: 'Oreo', price: 1, color: 'bg-green-50 border-green-100 text-green-900' },
      { id: 'ex4', name: 'Smarties', price: 1, color: 'bg-green-50 border-green-100 text-green-900' },
      { id: 'ex5', name: 'Krokant', price: 1, color: 'bg-green-50 border-green-100 text-green-900' },
    ]
  ],
  'cat_süsses': [
    [
      { id: 's1', name: 'Kuchen', price: 4, color: 'bg-green-50 border-green-100 text-green-900' },
      { id: 's2', name: 'Vegan Cookies', price: 3, color: 'bg-green-50 border-green-100 text-green-900' },
      { id: 's3', name: 'Protein Balls', price: 3, color: 'bg-green-50 border-green-100 text-green-900' },
      { id: 's4', name: 'Mandorle', price: 3, color: 'bg-green-50 border-green-100 text-green-900' },
    ]
  ],
  'cat_kaffee': [
    [
      { id: 'c1', name: 'Espresso', price: 3, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'c2', name: 'Doppelter Espresso', price: 5.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'c3', name: 'Verlängerter', price: 3, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'c4', name: 'Cappuccino', price: 4.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
    ],
    [
      { id: 'c6', name: 'Matcha', price: 6.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'c7', name: 'Chai', price: 6.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'c5', name: 'Kakao', price: 5.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
    ],
    [
      { id: 'c8', name: 'Hafermilch', price: 1, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'c9', name: 'Laktofreie Milch', price: 0, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'c10', name: 'Koffeeinfrei', price: 0, color: 'bg-pink-50 border-pink-100 text-pink-900' },
    ]
  ],
  'cat_drinks': [
    [
      { id: 'a1', name: 'Aperol', price: 6.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'a2', name: 'Limoncello', price: 6.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'a3', name: 'Hugo', price: 6.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
    ],
    [
      { id: 'a4', name: 'Frizzante', price: 5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'a5', name: 'Spritzer', price: 3, color: 'bg-pink-50 border-pink-100 text-pink-900' },
    ],
    [
      { id: 'a6', name: 'Glühwein', price: 8.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'a7', name: 'Glüh Gin', price: 8.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'a8', name: 'Hot Aperol', price: 8.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
    ]
  ],
  'cat_af_drinks': [
    [
      { id: 'd1', name: 'Mineral', price: 3, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'd2', name: 'Cola', price: 4, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'd3', name: 'Apfelsaft gesprizt', price: 4, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'd4', name: 'Eistee', price: 4, color: 'bg-pink-50 border-pink-100 text-pink-900' },
    ],
    [
      { id: 'd5', name: 'Limonade', price: 5.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
      { id: 'd6', name: 'Smoothie', price: 6.5, color: 'bg-pink-50 border-pink-100 text-pink-900' },
    ]
  ]
};
