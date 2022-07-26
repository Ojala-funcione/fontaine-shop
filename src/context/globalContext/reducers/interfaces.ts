/* eslint-disable no-unused-vars */
import { ICartProduct, IProduct } from '@Services/products/productsInterfaces';

export interface ICartState {
  totalAmount: number;
  totalQuantity: number;
  products: ICartProduct[];
}
// eslint-disable-next-line no-shadow
export enum CartActionType {
  addProduct = 'ADD_PRODUCT',
  removeProduct = 'REMOVE_PRODUCT',
  clearProduct = 'CLEAR_PRODUCT',
  clearCart = 'CLEAR_CART'
}

export interface CartAction {
  type: CartActionType;
  payload?: IProduct;
}

export type AddOrRemoveProductFromCartAction = {
  type:
    | CartActionType.addProduct
    | CartActionType.removeProduct
    | CartActionType.clearProduct;
  payload: IProduct;
};

export type ClearCartAction = {
  type: CartActionType.clearCart;
};
export type CartReducerAction =
  | ClearCartAction
  | AddOrRemoveProductFromCartAction;
