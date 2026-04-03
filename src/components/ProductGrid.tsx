import { Product } from '../types';
import { ProductButton } from './ProductButton';
import { MAIN_MENU_ROWS } from '../constants';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

export const ProductGrid = ({ onProductClick }: ProductGridProps) => {
  return (
    <div className="flex flex-col gap-6 h-full overflow-y-auto">
      {MAIN_MENU_ROWS.map((row, rowIndex) => (
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
    </div>
  );
};
