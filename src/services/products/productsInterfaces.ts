/* eslint-disable no-unused-vars */
export interface ICreateProduct {
  onSale?: boolean;
  isNew?: boolean;
  onCombo?: boolean;
  isFeatured?: boolean;
  name: string;
  brand: string;
  description: string;
  category: string;
  price: number | undefined;
  discount: number | undefined;
  stock: number | undefined;
  minStock: number | undefined;
  sku: string;
  image: string;
  gallery: Array<string>;
  variants?: boolean;
}
export interface IProduct {
  id: string;
  sku: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  discount: number;
  price: number;
  salePrice: number;
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

export interface ICartProduct {
  product: IProduct;
  amount: number;
  quantity: number;
}
export interface AllProductsResponse {
  products: IProduct[];
  total: number;
}
export interface ProductsApi {
  getAllProducts(): Promise<AllProductsResponse>;
  getAllProductsPaginated(
    page: number,
    pageSize: number
  ): Promise<AllProductsResponse>;
  createProduct(product: ICreateProduct): Promise<IProduct>;
  editProduct(product: IProduct): Promise<IProduct>;
  getOneProduct(id: string): Promise<IProduct>;
  deleteProduct(id: string): Promise<string>;
}
// export interface IProductBackend {
//   id: string;
//   sku: string;
//   name: string;
//   brand: string;
//   description: string;
//   category: string;
//   discount: number;
//   price: number;
//   salePrice: number;
//   stock: number;
//   minStock: number;
//   dimensions: {};
//   image: string;
//   gallery: string[];
//   variants: boolean;
//   onSale: boolean;
//   isNew: boolean;
//   onCombo: boolean;
//   isFeatured: boolean;
// }
