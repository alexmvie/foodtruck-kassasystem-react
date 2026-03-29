export interface Product {
  id: string;
  name: string;
  price: number;
  category?: string;
  subtext?: string;
  color?: string;
  isCategory?: boolean;
}

export interface OrderItem extends Product {
  quantity: number;
  orderId: string;
}

export type ViewState = 'POS' | 'HOME' | 'CATEGORY';
