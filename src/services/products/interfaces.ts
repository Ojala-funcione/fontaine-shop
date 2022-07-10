export interface IProduct {
  productId: string;
  isOffer: boolean;
  isNew: boolean;
  isCombo: boolean;
  isFeatured: boolean;
  name: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  salePrice: number;
  discountInPercent: number;
  stock: number;
  minStock: number;
  sku: string | null;
  image: string;
  gallery: Array<string>;
  variants: any;
}
