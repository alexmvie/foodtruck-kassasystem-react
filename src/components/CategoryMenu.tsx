import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { ProductButton } from './ProductButton';

interface CategoryMenuProps {
  categoryId: string;
  rows: Product[][];
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export const CategoryMenu = ({ rows, onBack, onProductClick }: CategoryMenuProps) => {
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
                <div key={product.id}>
                  <ProductButton 
                    product={product} 
                    onClick={onProductClick} 
                  />
                </div>
              ))}
            </div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
