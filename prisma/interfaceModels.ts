

export interface IModelProduct {
  sku: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  discount: number;
  price: number;
  stock: number;
  minStock: number;
  dimensions: {};
  image: string;
  gallery: string[];
  variants: boolean;
  onSale: boolean;
  isNew: boolean;
  onCombo: boolean;
  isFeatured: boolean;
}

export interface IModelCategory {
  name: string;
  slug: string;
  image?: string;
  parent?: string;
  subcategories?: any;
}
