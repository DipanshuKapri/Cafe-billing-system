// Avoid depending on @types/react here; use a minimal ReactNode alias
export type ReactNode = any;

export enum MenuCategory {
  COFFEE_TEA = 'Coffee & Tea',
  BEVERAGES = 'Cold Drinks & Shakes',
  SNACKS = 'Savory Snacks',
  SANDWICHES = 'Sandwiches',
  PASTRIES = 'Pastries & Sweets',
  MISC = 'Miscellaneous'
}

export interface MenuItem {
  id: number;
  name: string;
  category: MenuCategory;
  price: number;
  imageUrl: string;
}

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Sale {
  saleId: string;
  date: string; 
  itemName: string;
  quantity: number;
  pricePerUnit: number;
  staff: string | null;
}

export type Theme = 'light' | 'dark';

export interface ToastMessage {
  id: number;
  message: ReactNode;
  type: 'success' | 'error' | 'info';
}

export interface UserPreferences {
  currencySymbol?: string;
}
