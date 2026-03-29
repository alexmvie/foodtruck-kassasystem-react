import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { getButtonTextClass } from '../styles/tokens';
import { useMobileDetection } from '../hooks/useMobileDetection';
import { getAbbreviation } from '../utils/abbreviations';

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
    if (isMobile && isPortrait) return 'text-[8px]'; // Mobile Portrait: winzig
    if (isMobile) return 'text-[9px]'; // Mobile Landscape: sehr klein
    return 'text-[9px]'; // Desktop: Standard
  };
  
  const getPriceSize = () => {
    if (isMobile && isPortrait) return 'text-sm'; // Mobile Portrait: klein
    if (isMobile) return 'text-base'; // Mobile Landscape: mittel
    return 'text-lg'; // Desktop: groß
  };

  // Abkürzung für Mobile
  const displayName = isMobile && isPortrait ? getAbbreviation(product.id, product.name, true) : product.name;
  const displaySubtext = isMobile && isPortrait && product.subtext ? 
    getAbbreviation(`${product.id}_sub`, product.subtext, true) : product.subtext;

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
      {/* Obere Bereich: Name und Subtext */}
      <div className="flex flex-col items-center text-center flex-1 min-w-0">
        <span className={`${getTextSize()} leading-tight ${getButtonTextClass('primary')} truncate`}>
          {displayName}
        </span>
        {displaySubtext && (
          <span className={`${getSubtextSize()} opacity-70 mt-0.5 ${getButtonTextClass('primary')} truncate`}>
            {displaySubtext}
          </span>
        )}
      </div>
      
      {/* Untere Bereich: Preis oder Kategorie-Info */}
      <div className="flex justify-center mt-auto">
        {!product.isCategory && (
          <span className={`${getPriceSize()} ${getButtonTextClass('primary')}`}>
            {product.price.toFixed(2)} €
          </span>
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
