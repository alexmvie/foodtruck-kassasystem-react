import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { getButtonTextClass } from '../styles/tokens';
import { useMobileDetection } from '../hooks/useMobileDetection';
import { getButtonText } from '../utils/buttonTexts';

interface ProductButtonProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductButton = ({ product, onClick }: ProductButtonProps) => {
  const { isMobile, isPortrait } = useMobileDetection();
  
  // Dynamische Schriftgröße basierend auf Gerät
  const getTextSize = () => {
    if (isMobile && isPortrait) return 'text-xs'; // Mobile Portrait: sehr klein
    if (isMobile) return 'text-sm'; // Mobile Landscape: klein
    return 'text-sm'; // Desktop: Standard
  };
  
  const getSubtextSize = () => {
    if (isMobile && isPortrait) return 'text-xs'; // Mobile Portrait: wie erste Zeile
    if (isMobile) return 'text-sm'; // Mobile Landscape: wie erste Zeile
    return 'text-sm'; // Desktop: wie erste Zeile
  };
  
  const getPriceSize = () => {
    if (isMobile && isPortrait) return 'text-sm'; // Mobile Portrait: klein
    if (isMobile) return 'text-base'; // Mobile Landscape: mittel
    return 'text-lg'; // Desktop: groß
  };

  // Zweizeiliges Text-System für Mobile & Tablet
  const isMobileOrTablet = isMobile;
  const buttonText = getButtonText(product.id, isMobileOrTablet);
  //const displayName = isMobileOrTablet ? buttonText.line1 : buttonText.fullName;
  //const displaySubtext = isMobileOrTablet ? buttonText.line2 : product.subtext;
  const displayName = buttonText.line1 ;
  const displaySubtext = buttonText.line2 ;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(product)}
      className={`
        relative flex flex-col justify-between p-2 w-full aspect-square rounded-xl border-2 transition-all shadow-sm
        ${product.color || 'bg-white border-slate-200 hover:border-slate-400 active:bg-slate-100'}
        ${product.isCategory ? 'border-b-6 border-r-3' : 'border-slate-200'}
        overflow-hidden
      `}
    >
      {/* Product Name - Immer schwarz */}
      <div className="flex flex-col items-center justify-center text-center flex-1">
        <div className={`font-black tracking-tightest uppercase leading-tight text-black ${getTextSize()}`}>
          {displayName}
        </div>
        {displaySubtext && (
          <div className={`font-black tracking-tightest uppercase leading-tight text-black ${getSubtextSize()}`}>
            {displaySubtext}
          </div>
        )}
      </div>

      {/* Untere Bereich: Preis oder Kategorie-Info */}
      <div className="flex justify-center mt-auto">
        {!product.isCategory && (
          <div className={`font-black tracking-tightest text-black ${getPriceSize()}`}>
            {product.price.toFixed(2)} €
          </div>
        )}
        {product.isCategory && (
          <div className="bg-black/10 px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center gap-0.5">
            <ChevronRight className="w-2 h-2" /> Menü
          </div>
        )}
      </div>
    </motion.button>
  );
};
