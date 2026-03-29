// Abkürzungs-System für Mobile Product Buttons
// Diese Datei enthält alle Produkt- und Kategorienamen mit ihren Mobile-Abkürzungen

export interface ProductAbbreviation {
  fullName: string;
  abbreviation: string;
  maxLength?: number; // Maximale Länge für die Abkürzung
}

// Hauptmenü-Produkte
export const MAIN_MENU_ABBREVIATIONS: Record<string, ProductAbbreviation> = {
  'w1': { fullName: 'Bubble Waffle', abbreviation: 'BUBBLE', maxLength: 8 },
  'w2': { fullName: 'Belgian Waffle', abbreviation: 'BELGIAN', maxLength: 8 },
  'i1': { fullName: 'Softeis', abbreviation: 'SOFT', maxLength: 8 },
  'cat_extra': { fullName: 'Extras', abbreviation: 'EXTRAS', maxLength: 8 },
  'cat_süsses': { fullName: 'Süsses', abbreviation: 'SÜSSES', maxLength: 8 },
  'cat_kaffee': { fullName: 'Kaffee', abbreviation: 'KAFFEE', maxLength: 8 },
  'cat_drinks': { fullName: 'Drinks', abbreviation: 'DRINKS', maxLength: 8 },
  'cat_af_drinks': { fullName: 'AF Drinks', abbreviation: 'AF DR', maxLength: 8 },
};

// Kategorie: Extras
export const EXTRAS_ABBREVIATIONS: Record<string, ProductAbbreviation> = {
  'ex2': { fullName: 'Schlagobers', abbreviation: 'SCHLAG', maxLength: 8 },
  'ex6': { fullName: 'Portion Eis', abbreviation: 'EIS', maxLength: 8 },
  'ex1': { fullName: 'Obst', abbreviation: 'OBST', maxLength: 8 },
  'ex3': { fullName: 'Oreo', abbreviation: 'OREO', maxLength: 8 },
  'ex4': { fullName: 'Smarties', abbreviation: 'SMART', maxLength: 8 },
  'ex5': { fullName: 'Krokant', abbreviation: 'KROK', maxLength: 8 },
};

// Kategorie: Süßes
export const SÜSSES_ABBREVIATIONS: Record<string, ProductAbbreviation> = {
  's1': { fullName: 'Kuchen', abbreviation: 'KUCHEN', maxLength: 8 },
  's2': { fullName: 'Vegan Cookies', abbreviation: 'V-COOK', maxLength: 8 },
  's3': { fullName: 'Protein Balls', abbreviation: 'PROTEIN', maxLength: 8 },
  's4': { fullName: 'Mandorle', abbreviation: 'MANDOR', maxLength: 8 },
};

// Kategorie: Kaffee
export const KAFFEE_ABBREVIATIONS: Record<string, ProductAbbreviation> = {
  'c1': { fullName: 'Espresso', abbreviation: 'ESPRESS', maxLength: 8 },
  'c2': { fullName: 'Doppelter Espresso', abbreviation: 'D-ESP', maxLength: 8 },
  'c3': { fullName: 'Verlängerter', abbreviation: 'VERLÄNG', maxLength: 8 },
  'c4': { fullName: 'Cappuccino', abbreviation: 'CAPPU', maxLength: 8 },
  'c6': { fullName: 'Matcha', abbreviation: 'MATCHA', maxLength: 8 },
  'c7': { fullName: 'Chai', abbreviation: 'CHAI', maxLength: 8 },
  'c5': { fullName: 'Kakao', abbreviation: 'KAKAO', maxLength: 8 },
  'c8': { fullName: 'Hafermilch', abbreviation: 'HAFER', maxLength: 8 },
  'c9': { fullName: 'Laktofreie Milch', abbreviation: 'LAKTO', maxLength: 8 },
  'c10': { fullName: 'Koffeeinfrei', abbreviation: 'K-FREI', maxLength: 8 },
};

// Kategorie: Drinks
export const DRINKS_ABBREVIATIONS: Record<string, ProductAbbreviation> = {
  'a1': { fullName: 'Aperol', abbreviation: 'APEROL', maxLength: 8 },
  'a2': { fullName: 'Limoncello', abbreviation: 'LIMON', maxLength: 8 },
  'a3': { fullName: 'Hugo', abbreviation: 'HUGO', maxLength: 8 },
  'a4': { fullName: 'Frizzante', abbreviation: 'FRIZZ', maxLength: 8 },
  'a5': { fullName: 'Spritzer', abbreviation: 'SPRITZ', maxLength: 8 },
  'a6': { fullName: 'Glühwein', abbreviation: 'GLÜHWEIN', maxLength: 8 },
  'a7': { fullName: 'Glüh Gin', abbreviation: 'GLÜH GIN', maxLength: 8 },
  'a8': { fullName: 'Hot Aperol', abbreviation: 'HOT AP', maxLength: 8 },
};

// Kategorie: AF Drinks
export const AF_DRINKS_ABBREVIATIONS: Record<string, ProductAbbreviation> = {
  'd1': { fullName: 'Mineral', abbreviation: 'MINERAL', maxLength: 8 },
  'd2': { fullName: 'Cola', abbreviation: 'COLA', maxLength: 8 },
  'd3': { fullName: 'Apfelsaft gesprizt', abbreviation: 'APFEL G', maxLength: 8 },
  'd4': { fullName: 'Eistee', abbreviation: 'EISTEE', maxLength: 8 },
  'd5': { fullName: 'Limonade', abbreviation: 'LIMO', maxLength: 8 },
  'd6': { fullName: 'Smoothie', abbreviation: 'SMOOTH', maxLength: 8 },
};

// Alle Abkürzungen zusammenfassen
export const ALL_ABBREVIATIONS = {
  ...MAIN_MENU_ABBREVIATIONS,
  ...EXTRAS_ABBREVIATIONS,
  ...SÜSSES_ABBREVIATIONS,
  ...KAFFEE_ABBREVIATIONS,
  ...DRINKS_ABBREVIATIONS,
  ...AF_DRINKS_ABBREVIATIONS,
};

// Helper Funktion um Abkürzung zu bekommen
export const getAbbreviation = (productId: string, fullName: string, isMobile: boolean = false): string => {
  if (!isMobile) return fullName;
  
  const abbreviation = ALL_ABBREVIATIONS[productId];
  if (abbreviation) {
    return abbreviation.abbreviation;
  }
  
  // Auto-Abkürzung wenn keine manuelle vorhanden
  return fullName.length > 8 ? fullName.substring(0, 6) + '...' : fullName;
};

// Helper Funktion um alle Abkürzungen für eine Kategorie zu bekommen
export const getCategoryAbbreviations = (categoryId: string): Record<string, ProductAbbreviation> => {
  switch (categoryId) {
    case 'cat_extra': return EXTRAS_ABBREVIATIONS;
    case 'cat_süsses': return SÜSSES_ABBREVIATIONS;
    case 'cat_kaffee': return KAFFEE_ABBREVIATIONS;
    case 'cat_drinks': return DRINKS_ABBREVIATIONS;
    case 'cat_af_drinks': return AF_DRINKS_ABBREVIATIONS;
    default: return MAIN_MENU_ABBREVIATIONS;
  }
};
