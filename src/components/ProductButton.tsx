import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductButtonProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductButton = ({ product, onClick }: ProductButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(product)}
      className={`
        relative flex flex-col justify-between p-3 w-full aspect-square rounded-xl border-2 transition-all shadow-sm
        ${product.color || 'bg-white border-slate-200 hover:border-slate-400 active:bg-slate-100'}
        ${product.isCategory ? 'border-b-6 border-r-3' : 'border-slate-200'}
      `}
    >
      {/* Obere Bereich: Name und Subtext */}
      <div className="flex flex-col items-center text-center flex-1">
        <span className="text-sm font-black leading-tight uppercase">{product.name}</span>
        {product.subtext && (
          <span className="text-[9px] opacity-70 mt-0.5 uppercase tracking-wider font-black">
            {product.subtext}
          </span>
        )}
      </div>
      
      {/* Untere Bereich: Preis oder Kategorie-Info */}
      <div className="flex justify-center mt-auto">
        {!product.isCategory && (
          <span className="text-lg font-black">{product.price.toFixed(2)} €</span>
        )}
        {product.isCategory && (
          <div className="bg-black/10 px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-0.5">
            <ChevronRight className="w-2.5 h-2.5" /> Menü
          </div>
        )}
      </div>
    </motion.button>
  );
};
