/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
import axios from 'axios';
import productData from './data';
import {
  IProduct,
  AllProductsResponse,
  ProductsApi,
  ICreateProduct
} from './productsInterfaces';

const useAPIProducts = (): ProductsApi => {
  const getAllProducts = async (): Promise<AllProductsResponse> => {
    // try {
    //   const response = await axios.get('https://url_base.com/algo');
    //   return response as unknown as AllProductsResponse;
    // } catch (error) {
    //   throw error;
    // }
    console.log('getAllProducts');
    return { products: productData, total: productData.length };
  };

  const getOneProduct = async (id: string): Promise<IProduct> => {
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as IProduct;
    // } catch (error) {
    //   throw error;
    // }
    // const product = productData.filter(
    try {
      const product = productData.find((item) => item.id === id);
      if (!product) {
        throw new Error('producto no encontrado');
      }
      return product;
    } catch (error) {
      throw error;
    }
  };
  const deleteProduct = async (id: string): Promise<string> => {
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as IProduct;
    // } catch (error) {
    //   throw error;
    // }
    // const product = productData.filter(
    console.log(id);
    return 'borrado';
  };

  const getAllProductsPaginated = async (
    page: number,
    pageSize: number
  ): Promise<AllProductsResponse> => {
    // try {
    //   const response = await axios.get('https://url_base.com/algo');
    //   return response as unknown as AllProductsResponse;
    // } catch (error) {
    //   throw error;
    // }
    console.log('pageSize:', pageSize, 'page:', page);
    return { products: productData, total: productData.length };
  };

  const createProduct = async (product: ICreateProduct): Promise<IProduct> => {
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as IProduct;
    // } catch (error) {
    //   throw error;
    // }
    console.log(product);
    return productData[0];
  };

  const editProduct = async (product: IProduct): Promise<IProduct> => {
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as IProduct;
    // } catch (error) {
    //   throw error;
    // }
    console.log(product);
    return product;
  };

  return {
    deleteProduct,
    getAllProducts,
    getOneProduct,
    getAllProductsPaginated,
    createProduct,
    editProduct
  };
};
export default useAPIProducts;
