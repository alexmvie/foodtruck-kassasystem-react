// Design Tokens für die Foodtruck Kassen-App
export const tokens = {
  colors: {
    // Button Text Colors
    buttonText: {
      primary: 'text-black', // Hauptfarbe für alle Button-Texte
      secondary: 'text-slate-600', // Für spezielle Fälle
      accent: 'text-orange-400', // Für Akzente
    },
    
    // Button Background Colors
    buttonBg: {
      primary: 'bg-white',
      secondary: 'bg-slate-100',
      accent: 'bg-orange-500',
    },
    
    // Border Colors
    border: {
      primary: 'border-slate-200',
      hover: 'border-slate-400',
      accent: 'border-orange-200',
    }
  },
  
  typography: {
    button: {
      fontWeight: 'font-black',
      textTransform: 'uppercase',
      letterSpacing: 'tracking-wider',
    }
  },
  
  spacing: {
    button: {
      padding: 'p-3',
      gap: 'gap-3',
    }
  }
} as const;

// Helper für Button-Text-Styling
export const getButtonTextClass = (variant: 'primary' | 'secondary' | 'accent' = 'primary') => {
  return `${tokens.colors.buttonText[variant]} ${tokens.typography.button.fontWeight} ${tokens.typography.button.textTransform} ${tokens.typography.button.letterSpacing}`;
};
