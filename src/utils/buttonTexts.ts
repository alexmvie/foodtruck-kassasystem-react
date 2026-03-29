// Zentrale Text-Verwaltung für das Boniersystem
// Diese Datei enthält alle Produkt-Texte mit zweizeiliger Aufteilung für Mobile & Tablet

export interface ButtonText {
  line1: string;
  line2: string;
  fullName: string; // Für Desktop-Anzeige
}

// Hauptmenü-Produkte
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
};

// Kategorie: Extras
export const EXTRAS_TEXTS: Record<string, ButtonText> = {
  'ex2': {
    line1: 'SCHLAG',
    line2: 'OBERS',
    fullName: 'Schlagobers'
  },
  'ex6': {
    line1: 'PORTION',
    line2: 'EIS',
    fullName: 'Portion Eis'
  },
  'ex1': {
    line1: 'FRISCHES',
    line2: 'OBST',
    fullName: 'Obst'
  },
  'ex3': {
    line1: 'OREO',
    line2: 'KEKSE',
    fullName: 'Oreo'
  },
  'ex4': {
    line1: 'SMARTIES',
    line2: 'DRAGEE',
    fullName: 'Smarties'
  },
  'ex5': {
    line1: 'KROKANT',
    line2: 'STÜCKE',
    fullName: 'Krokant'
  },
};

// Kategorie: Süßes
export const SÜSSES_TEXTS: Record<string, ButtonText> = {
  's1': {
    line1: 'FRISCHER',
    line2: 'KUCHEN',
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
    line1: 'MANDEL',
    line2: 'KROKANT',
    fullName: 'Mandorle'
  },
};

// Kategorie: Kaffee
export const KAFFEE_TEXTS: Record<string, ButtonText> = {
  'c1': {
    line1: 'ESPRESSO',
    line2: 'KLASSIK',
    fullName: 'Espresso'
  },
  'c2': {
    line1: 'DOPPELTER',
    line2: 'ESPRESSO',
    fullName: 'Doppelter Espresso'
  },
  'c3': {
    line1: 'VERLÄNGERT',
    line2: 'MIT WASSER',
    fullName: 'Verlängerter'
  },
  'c4': {
    line1: 'CAPPUCCINO',
    line2: 'MIT MILCH',
    fullName: 'Cappuccino'
  },
  'c6': {
    line1: 'MATCHA',
    line2: 'TEE',
    fullName: 'Matcha'
  },
  'c7': {
    line1: 'CHAI',
    line2: 'LATTE',
    fullName: 'Chai'
  },
  'c5': {
    line1: 'HEISSE',
    line2: 'SCHOKOLADE',
    fullName: 'Kakao'
  },
  'c8': {
    line1: 'HAFER',
    line2: 'MILCH',
    fullName: 'Hafermilch'
  },
  'c9': {
    line1: 'LAKTOFREIE',
    line2: 'MILCH',
    fullName: 'Laktofreie Milch'
  },
  'c10': {
    line1: 'KOFFEIN',
    line2: 'FREI',
    fullName: 'Koffeeinfrei'
  },
};

// Kategorie: Drinks
export const DRINKS_TEXTS: Record<string, ButtonText> = {
  'a1': {
    line1: 'APEROL',
    line2: 'SPRITZ',
    fullName: 'Aperol'
  },
  'a2': {
    line1: 'LIMONCELLO',
    line2: 'DIGESTIF',
    fullName: 'Limoncello'
  },
  'a3': {
    line1: 'HUGO',
    line2: 'SPRITZ',
    fullName: 'Hugo'
  },
  'a4': {
    line1: 'FRIZZANTE',
    line2: 'WASSER',
    fullName: 'Frizzante'
  },
  'a5': {
    line1: 'WEISSWEIN',
    line2: 'SPRITZER',
    fullName: 'Spritzer'
  },
  'a6': {
    line1: 'GLÜHWEIN',
    line2: 'HEISS',
    fullName: 'Glühwein'
  },
  'a7': {
    line1: 'GLÜHWEIN',
    line2: 'MIT GIN',
    fullName: 'Glüh Gin'
  },
  'a8': {
    line1: 'HOT',
    line2: 'APEROL',
    fullName: 'Hot Aperol'
  },
};

// Kategorie: AF Drinks
export const AF_DRINKS_TEXTS: Record<string, ButtonText> = {
  'd1': {
    line1: 'STILL',
    line2: 'MINERAL',
    fullName: 'Mineral'
  },
  'd2': {
    line1: 'COCA',
    line2: 'COLA',
    fullName: 'Cola'
  },
  'd3': {
    line1: 'APFELSAFT',
    line2: 'GESPRITZT',
    fullName: 'Apfelsaft gesprizt'
  },
  'd4': {
    line1: 'EISTEE',
    line2: 'FRUCHTIG',
    fullName: 'Eistee'
  },
  'd5': {
    line1: 'LIMONADE',
    line2: 'FRISCH',
    fullName: 'Limonade'
  },
  'd6': {
    line1: 'FRUCHT',
    line2: 'SMOOTHIE',
    fullName: 'Smoothie'
  },
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

// Helper Funktion um Button-Text zu bekommen
export const getButtonText = (productId: string, isMobileOrTablet: boolean = false): ButtonText => {
  const buttonText = ALL_BUTTON_TEXTS[productId];
  
  if (!buttonText) {
    // Fallback für nicht definierte Produkte
    return {
      line1: productId,
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
    case 'cat_drinks': return DRINKS_TEXTS;
    case 'cat_af_drinks': return AF_DRINKS_TEXTS;
    default: return MAIN_MENU_TEXTS;
  }
};
