export interface Product {
  id: string;
  name: string;
  price: number;
  category?: string;
  subtext?: string;
  color?: string;
  isCategory?: boolean;
  menuCategoryId?: string;
  hidePrice?: boolean;
}

export interface OrderItem extends Product {
  quantity: number;
  orderId: string;
  parentOrderId?: string;
}

export type ViewState = 'POS' | 'HOME' | 'CATEGORY';
