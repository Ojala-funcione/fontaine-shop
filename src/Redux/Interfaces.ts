export interface IProduct {
  productId: string;
  isOffer: boolean;
  isNew: boolean;
  isCombo: boolean;
  isFeatured: boolean;
  name: string;
  brand: number;
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
export interface ICartProduct {
  product: IProduct;
  quantity: number;
}
export interface ICategory {
  id: string;
  name: string;
  parent: string;
  subcategories: any;
}
export interface IUser {
  uid: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  address: string | null;
  city: string | null;
  country: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  state: string | null;
  zip: string | null;
}
