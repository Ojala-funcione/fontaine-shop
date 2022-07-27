/* eslint-disable no-console */
/* eslint-disable no-useless-catch */
import axios from 'axios';
import { env } from 'process';
import {
  AllCategoriesResponse,
  CategoriesApi,
  ICategory
} from './categoriesInterfaces';
import categoriesData from './data';

const useAPICategories = (): CategoriesApi => {
  const getAllCategories = async (): Promise<AllCategoriesResponse> => {
    console.log('url', process.env.NEXT_PUBLIC_BASE_URL);
    console.log('url_db', process.env.DATABASE_URL);
    console.log('url_db', env.DATABASE_URL);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/categories`
      );
      console.log(response);
      console.log(response.data);
      return response.data as unknown as AllCategoriesResponse;
    } catch (error) {
      throw error;
    }
    // console.log('');
    // return { categories: categoriesData, total: categoriesData.length };
  };
  const createCategory = async (category: ICategory): Promise<ICategory> => {
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as ICategory;
    // } catch (error) {
    //   throw error;
    // }
    console.log(category);
    return category;
  };

  const editCategory = async (category: ICategory): Promise<ICategory> => {
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as ICategory;
    // } catch (error) {
    //   throw error;
    // }
    console.log(category);
    return categoriesData[0];
  };
  const getOneCategory = async (id: string): Promise<ICategory | undefined> => {
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as ICategory;
    // } catch (error) {
    //   throw error;
    // }
    const category = categoriesData.find((item) => item.id === id);

    return category;
  };
  const deleteCategory = async (categoryId: string): Promise<string> => {
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as ICategory;
    // } catch (error) {
    //   throw error;
    // }
    console.log(categoryId);
    return 'borrado';
  };

  return {
    getOneCategory,
    editCategory,
    createCategory,
    getAllCategories,
    deleteCategory
  };
};
export default useAPICategories;
