// 🎯 SOURCE OF TRUTH: Zentrale Versionsverwaltung
// ⚠️ IMMER HIER UPDATEN - Keine anderen Versionen im Code!

export const APP_VERSION = '1.1.0';

export const VERSION_HISTORY = {
  '1.0.0': 'Initial release with black button text and tokenized styling',
  '1.0.1': 'Mobile portrait mode with split layout and minimizable panels',
  '1.0.2': 'Mobile UX improvements and responsive fixes',
  '1.0.3': 'Mobile scroll fix, dark mode prevention, and abbreviation system',
  '1.0.4': 'Two-line button system and improved mobile scrolling',
  '1.0.5': 'Mobile scroll fix with fixed height solution',
  '1.0.6': 'Centralized version management and cleanup',
  '1.0.7': 'Restored original button texts from v1.0.4, removed abbreviations.ts',
  '1.0.8': 'Equal text size for both button lines',
  '1.0.9': 'Fixed headline captions and black text color for button lines',
  '1.0.10': 'Fixed sidebar issue',
  '1.1.0': 'Grouped menu items with parent-child extras flow',
} as const;

export type AppVersion = keyof typeof VERSION_HISTORY;
