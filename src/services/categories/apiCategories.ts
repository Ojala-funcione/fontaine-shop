/* eslint-disable no-useless-catch */
// import axios from 'axios';
import {
  AllCategoriesResponse,
  CategoriesApi,
  ICategory
} from './categoriesInterfaces';
import categoriesData from './data';

const useAPICategories = (): CategoriesApi => {
  const getAllCategories = async (): Promise<AllCategoriesResponse> => {
    // try {
    //   const response = await axios.get('https://url_base.com/algo');
    //   return response as unknown as AllCategoriesResponse;
    // } catch (error) {
    //   throw error;
    // }
    console.log('');
    return { categories: categoriesData, total: categoriesData.length };
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
