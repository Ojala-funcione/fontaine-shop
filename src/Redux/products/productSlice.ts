/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'Redux/Interfaces';

interface ICartProduct {
  product: IProduct;
  quantity: number;
}
interface IProductState {
  allProducts: IProduct[];
  filteredProducts: IProduct[];
  listedProducts: IProduct[];
  searchedProducts: IProduct[];
  cartProducts: ICartProduct[];
  quantityCart: number;
  isSeasrching: boolean;
  filterActive: boolean;
  productById: IProduct | null;
  categoryFilter: string[];
}

const initialState: IProductState = {
  cartProducts: [],
  quantityCart: 0,
  allProducts: [],
  isSeasrching: false,
  filterActive: false,
  searchedProducts: [],
  listedProducts: [],
  filteredProducts: [],
  categoryFilter: [],
  productById: null
};
export const productSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    // Esto es una action
    setProductList: (state, action: PayloadAction<IProduct[]>) => {
      state.allProducts = action.payload;
      state.listedProducts = action.payload;
    },
    addProductCart: (state, action: PayloadAction<IProduct>) => {
      state.quantityCart += 1;
      const isInCart = state.cartProducts.find(
        (item) => item.product.productId === action.payload.productId
      );
      state.cartProducts = isInCart
        ? [...state.cartProducts, { product: action.payload, quantity: 1 }]
        : [...state.cartProducts, { product: action.payload, quantity: 1 }];
    },
    removeOneProductFromCart: (state, action: PayloadAction<IProduct[]>) => {
      state.quantityCart -= 1;
      state.listedProducts = action.payload;
    },
    removeAllProductFromCart: (state, action: PayloadAction<IProduct[]>) => {
      state.quantityCart -= 1;
      state.listedProducts = action.payload;
    },
    clearCart: (state, action: PayloadAction<IProduct[]>) => {
      state.quantityCart -= 1;
      state.listedProducts = action.payload;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      state.isSeasrching = action.payload.length > 0;
      console.log(action.payload);
      state.searchedProducts = state.allProducts.filter((product: IProduct) =>
        // eslint-disable-next-line prettier/prettier
        product.name.toLowerCase().includes(action.payload.toLowerCase()));
      state.listedProducts = [...state.searchedProducts];
    },

    getOneProduct: (state, action: PayloadAction<IProduct>) => {
      state.productById = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<IProduct>) => {
      state.productById = action.payload;
    }
  }
});

export const { setProductList, searchProducts } = productSlice.actions;

export default productSlice;
