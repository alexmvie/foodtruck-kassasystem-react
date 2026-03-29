import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { ProductButton } from './ProductButton';
import { CATEGORY_ITEMS_ROWS } from '../constants';

interface CategoryMenuProps {
  categoryId: string;
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export const CategoryMenu = ({ categoryId, onBack, onProductClick }: CategoryMenuProps) => {
  const rows = CATEGORY_ITEMS_ROWS[categoryId] || [];

  return (
    <motion.div 
      className="flex flex-col gap-6 h-full overflow-hidden"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 150) {
          onBack();
        }
      }}
    >
      {/* Product Rows */}
      <div className="flex flex-col gap-6 overflow-y-auto flex-1">
        <AnimatePresence mode="popLayout">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-4 gap-3 content-start">
              {row.map((product) => (
                <ProductButton 
                  key={product.id} 
                  product={product} 
                  onClick={onProductClick} 
                />
              ))}
            </div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
