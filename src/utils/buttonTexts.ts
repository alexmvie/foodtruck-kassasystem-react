// Original Buttontexte aus Git-Version v1.0.4
// Zweizeiliges Text-System für Mobile & Tablet

export interface ButtonText {
  line1: string;
  line2: string;
  fullName: string; // Für Desktop-Anzeige
}

// Hauptmenü-Produkte (Originaltexte)
export const MAIN_MENU_TEXTS: Record<string, ButtonText> = {
  'w1': {
    line1: 'BUBBLE',
    line2: 'WAFFLE',
    fullName: 'Bubble Waffle'
  },
  'w2': {
    line1: 'BELGIAN',
    line2: 'WAFFLE',
    fullName: 'Belgian Waffle'
  },
  'i1': {
    line1: 'SOFT',
    line2: 'EIS',
    fullName: 'Softeis'
  },
  'cat_extra': {
    line1: 'EXTRAS',
    line2: '',
    fullName: 'Extras'
  },
  'cat_süsses': {
    line1: 'SÜSSES',
    line2: '',
    fullName: 'Süsses'
  },
  'cat_kaffee': {
    line1: 'KAFFEE',
    line2: '',
    fullName: 'Kaffee'
  },
  'cat_kaffee_extra': {
    line1: 'KAFFEE',
    line2: 'EXTRAS',
    fullName: 'Kaffee Extras'
  },
  'cat_drinks': {
    line1: 'DRINKS',
    line2: '',
    fullName: 'Drinks'
  },
  'cat_af_drinks': {
    line1: 'AF',
    line2: 'DRINKS',
    fullName: 'AF Drinks'
  },
  'menu_with_extras': {
    line1: 'MIT',
    line2: 'EXTRAS',
    fullName: 'Mit Extras'
  },
  'menu_without_extras': {
    line1: 'OHNE',
    line2: 'EXTRAS',
    fullName: 'Ohne Extras'
  }
};

// Kategorie: Extras (Updated with new products)
export const EXTRAS_TEXTS: Record<string, ButtonText> = {
  'ex2': {
    line1: 'SCHLAG',
    line2: 'OBERS',
    fullName: 'Schlagobers'
  },
  'ex2v': {
    line1: 'SCHLAG',
    line2: 'VEGAN',
    fullName: 'Schlagobers Vegan'
  },
  'ex6': {
    line1: 'PORTION',
    line2: 'EIS',
    fullName: 'Portion Eis'
  },
  'ex_matcha': {
    line1: 'MATCHA',
    line2: '',
    fullName: 'Matcha'
  },
  'ex_marsh': {
    line1: 'MARSH',
    line2: 'MELLOW',
    fullName: 'Marshmellow'
  },
  'ex3': {
    line1: 'OREO',
    line2: '',
    fullName: 'Oreo'
  },
  'ex4': {
    line1: 'SMARTIES',
    line2: '',
    fullName: 'Smarties'
  },
  'ex5': {
    line1: 'KROKANT',
    line2: '',
    fullName: 'Krokant'
  },
  'ex_banana': {
    line1: 'BANANE',
    line2: '',
    fullName: 'Banane'
  },
  'ex_erdbeer': {
    line1: 'ERDBEERE',
    line2: '',
    fullName: 'Erdbeere'
  },
  'ex_heidelbeer': {
    line1: 'HEIDEL',
    line2: 'BEERE',
    fullName: 'Heidelbeere'
  },
  'ex_himbeer': {
    line1: 'HIMBEERE',
    line2: '',
    fullName: 'Himbeere'
  },
  'ex_schoko': {
    line1: 'SCHOKO',
    line2: 'SAUCE',
    fullName: 'Schoko Sauce'
  },
  'ex_nutella': {
    line1: 'NUTELLA',
    line2: 'SAUCE',
    fullName: 'Nutella Sauce'
  },
  'ex_karamell': {
    line1: 'KARAMELL',
    line2: 'SAUCE',
    fullName: 'Karamell Sauce'
  },
  'ex_himbeer_sauce': {
    line1: 'HIMBEER',
    line2: 'SAUCE',
    fullName: 'Himbeer Sauce'
  },
  'ex_waldbeer': {
    line1: 'WALDBEERE',
    line2: 'SAUCE',
    fullName: 'Waldbeere Sauce'
  },
  'ex_erdbeer_sauce': {
    line1: 'ERDBEERE',
    line2: 'SAUCE',
    fullName: 'Erdbeere Sauce'
  },
  'ex_zimt': {
    line1: 'ZIMT',
    line2: '',
    fullName: 'Zimt'
  },
  'ex_staubzucker': {
    line1: 'STAUB',
    line2: 'ZUCKER',
    fullName: 'Staubzucker'
  }
};

// Kategorie: Süßes (Originaltexte)
export const SÜSSES_TEXTS: Record<string, ButtonText> = {
  's1': {
    line1: 'KUCHEN',
    line2: '',
    fullName: 'Kuchen'
  },
  's2': {
    line1: 'VEGAN',
    line2: 'COOKIES',
    fullName: 'Vegan Cookies'
  },
  's3': {
    line1: 'PROTEIN',
    line2: 'BALLS',
    fullName: 'Protein Balls'
  },
  's4': {
    line1: 'MANDORLE',
    line2: '',
    fullName: 'Mandorle'
  }
};

// Kategorie: Kaffee (Updated with new products and prices)
export const KAFFEE_TEXTS: Record<string, ButtonText> = {
  'c1': {
    line1: 'ESPRESSO',
    line2: '',
    fullName: 'Espresso'
  },
  'c2': {
    line1: 'DOPPELTER',
    line2: 'ESPRESSO',
    fullName: 'Doppelter Espresso'
  },
  'c3': {
    line1: 'VERLÄNGERT',
    line2: '',
    fullName: 'Verlängerter'
  },
  'c4': {
    line1: 'CAPPUCCINO',
    line2: '',
    fullName: 'Cappuccino'
  },
  'c_latte': {
    line1: 'LATTE',
    line2: 'MACCHIATO',
    fullName: 'Latte Macchiato'
  },
  'c6': {
    line1: 'MATCHA',
    line2: '',
    fullName: 'Matcha'
  },
  'c7': {
    line1: 'CHAI',
    line2: '',
    fullName: 'Chai'
  },
  'c5': {
    line1: 'KAKAO',
    line2: '',
    fullName: 'Kakao'
  },
  'c8': {
    line1: 'HAFER',
    line2: 'MILCH',
    fullName: 'Hafermilch'
  },
  'c_kokos': {
    line1: 'KOKOS',
    line2: '',
    fullName: 'Kokos'
  },
  'c9': {
    line1: 'LAKTOFREIE',
    line2: 'MILCH',
    fullName: 'Laktofreie Milch'
  },
  'c10': {
    line1: 'KOFFEINFREI',
    line2: '',
    fullName: 'Koffeeinfrei'
  },
  'c_vanille': {
    line1: 'VANILLE',
    line2: 'SIRUP',
    fullName: 'Vanille Sirup'
  },
  'c_karamell_sirup': {
    line1: 'KARAMELL',
    line2: 'SIRUP',
    fullName: 'Karamell Sirup'
  }
};

// Kategorie: Drinks (Updated with new products)
export const DRINKS_TEXTS: Record<string, ButtonText> = {
  'a1': {
    line1: 'APEROL',
    line2: '',
    fullName: 'Aperol'
  },
  'a2': {
    line1: 'LIMONCELLO',
    line2: '',
    fullName: 'Limoncello'
  },
  'a3': {
    line1: 'HUGO',
    line2: '',
    fullName: 'Hugo'
  },
  'a4': {
    line1: 'FRIZZANTE',
    line2: '',
    fullName: 'Frizzante'
  },
  'a5': {
    line1: 'SPRITZER',
    line2: '',
    fullName: 'Spritzer'
  },
  'a_bier': {
    line1: 'BIER',
    line2: '',
    fullName: 'Bier'
  },
  'a_glühwein': {
    line1: 'GLÜHWEIN',
    line2: '',
    fullName: 'Glühwein'
  },
  'a7': {
    line1: 'GLÜH',
    line2: 'GIN',
    fullName: 'Glüh Gin'
  },
  'a8': {
    line1: 'HOT',
    line2: 'APEROL',
    fullName: 'Hot Aperol'
  }
};

// Kategorie: AF Drinks (Originaltexte)
export const AF_DRINKS_TEXTS: Record<string, ButtonText> = {
  'd1': {
    line1: 'MINERAL',
    line2: '',
    fullName: 'Mineral'
  },
  'd2': {
    line1: 'COLA',
    line2: '',
    fullName: 'Cola'
  },
  'd3': {
    line1: 'APFELSAFT',
    line2: 'GESP.',
    fullName: 'Apfelsaft gesprizt'
  },
  'd4': {
    line1: 'EISTEE',
    line2: '',
    fullName: 'Eistee'
  },
  'd5': {
    line1: 'LIMONADE',
    line2: '',
    fullName: 'Limonade'
  },
  'd6': {
    line1: 'SMOOTHIE',
    line2: '',
    fullName: 'Smoothie'
  }
};

// Alle Texte zusammenfassen
export const ALL_BUTTON_TEXTS = {
  ...MAIN_MENU_TEXTS,
  ...EXTRAS_TEXTS,
  ...SÜSSES_TEXTS,
  ...KAFFEE_TEXTS,
  ...DRINKS_TEXTS,
  ...AF_DRINKS_TEXTS,
};

// Helper Funktion um Buttontext zu bekommen
export const getButtonText = (productId: string, isMobileOrTablet: boolean = true): ButtonText => {
  const buttonText = ALL_BUTTON_TEXTS[productId];
  
  if (!buttonText) {
    // Fallback wenn kein Text gefunden wurde
    return {
      line1: productId.toUpperCase(),
      line2: '',
      fullName: productId
    };
  }
  
  return buttonText;
};

// Helper Funktion um alle Texte für eine Kategorie zu bekommen
export const getCategoryTexts = (categoryId: string): Record<string, ButtonText> => {
  switch (categoryId) {
    case 'cat_extra': return EXTRAS_TEXTS;
    case 'cat_süsses': return SÜSSES_TEXTS;
    case 'cat_kaffee': return KAFFEE_TEXTS;
    case 'cat_kaffee_extra': return KAFFEE_TEXTS;
    case 'cat_drinks': return DRINKS_TEXTS;
    case 'cat_af_drinks': return AF_DRINKS_TEXTS;
    default: return MAIN_MENU_TEXTS;
  }
};
