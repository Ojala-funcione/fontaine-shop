/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'Redux/Interfaces';

interface IProductState {
  allProducts: IProduct[];
  search: IProduct[];
  productById: IProduct | null;
}

const initialState: IProductState = {
  allProducts: [],
  search: [],
  productById: null
};
export const productSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    // Esto es una action
    setProductList: (state, action: PayloadAction<IProduct[]>) => {
      state.allProducts = action.payload;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      state.search = state.allProducts.filter((product: IProduct) =>
        // eslint-disable-next-line prettier/prettier
        product.name.toLowerCase().includes(action.payload.toLowerCase()));
    },
    getOneProduct: (state, action: PayloadAction<IProduct>) => {
      state.productById = action.payload;
    }
  }
});

export const { setProductList } = productSlice.actions;

export default productSlice;
