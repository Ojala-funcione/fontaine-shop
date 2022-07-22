/* eslint-disable no-unused-vars */
export interface ICategory {
  id: string;
  name: string;
  slug: string;
  image?: string;
  parent?: string;
  subcategories?: any;
}
export interface AllCategoriesResponse {
  categories: ICategory[];
  total: number;
}
export interface ICreateCategory {
  name: string;
  slug: string;
  image?: string;
}
export interface CategoriesApi {
  getAllCategories(): Promise<AllCategoriesResponse>;
  createCategory(category: ICreateCategory): Promise<ICategory>;
  editCategory(category: ICategory): Promise<ICategory>;
  getOneCategory(categoryId: string): Promise<ICategory>;
  deleteCategory(categoryId: string): Promise<string>;
}
