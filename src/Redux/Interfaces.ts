export interface IProduct {
  id: string;
  name: string;
  stock: number;
  minStock: number;
  brand: number;
  category: string;
  description: string;
  image: any;
  price: number;
  dicountInPercent: number;
  salePrice: number;
  variants: any;
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
