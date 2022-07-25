import { ICartProduct } from '@Services/products/productsInterfaces';
import React from 'react';
import { CartActionType, CartReducerAction, ICartState } from './interfaces';

const cartReducer: React.Reducer<ICartState, CartReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case CartActionType.addProduct: {
      const isInCart = state.products.find(
        (item) => item.product.id === action.payload?.id
      );

      let products: ICartProduct[];
      if (isInCart) {
        products = state.products.map((item) =>
          item.product.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                amount: item.amount + item.product.salePrice
              }
            : item
        );
      } else {
        products = [
          ...state.products,
          {
            product: action.payload,
            quantity: 1,
            amount: action.payload.salePrice
          }
        ];
      }
      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + action.payload.salePrice,
        products
      };
    }
    // ___________________
    case CartActionType.removeProduct: {
      const isInCart = state.products.find(
        (item) => item.product.id === action.payload.id
      );

      const products: ICartProduct[] =
        !!isInCart && isInCart.quantity > 1
          ? state.products.map((item) =>
              item.product.id === action.payload.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    amount: item.amount - action.payload.salePrice
                  }
                : item
            )
          : state.products.filter(
              (item) => item.product.id !== action.payload.id
            );
      return {
        ...state,
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - action.payload.salePrice,
        products
      };
    }
    // ___________________
    case CartActionType.clearProduct: {
      const productInCart = state.products.find(
        (item) => item.product.id === action.payload.id
      );
      const products = state.products.filter(
        (item) => item.product.id !== action.payload.id
      );
      return {
        ...state,
        totalQuantity: state.totalQuantity - productInCart!.quantity,
        totalAmount: state.totalAmount - productInCart!.amount,
        products
      };
    }
    // ___________________
    case CartActionType.clearCart:
      return { totalQuantity: 0, totalAmount: 0, products: [] };
    // ___________________
    default:
      throw new Error();
  }
};

export default cartReducer;
