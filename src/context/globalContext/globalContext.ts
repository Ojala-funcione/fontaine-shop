import { IProduct } from '@Services/products/productsInterfaces';
import React, { createContext, useContext } from 'react';
import homeSectionsData from 'services/siteSettings/data';
import { SiteSettingsInterface } from 'services/siteSettings/siteSettingsInterfaces';
import { ICartState } from './reducers/interfaces';

interface GlobalContextInterface {
  isLoading: boolean;
  homeActiveSections: SiteSettingsInterface;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setHomeActiveSections: React.Dispatch<
    React.SetStateAction<SiteSettingsInterface>
  >;
  clearCart: () => void;
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (product: IProduct) => void;
  clearProductFromCart: (product: IProduct) => void;
  cart: ICartState;
}

const defaultValue: GlobalContextInterface = {
  isLoading: false,
  homeActiveSections: homeSectionsData,
  cart: {
    totalQuantity: 0,
    totalAmount: 0,
    products: []
  },
  setIsLoading: () => {},
  setHomeActiveSections: () => {},
  clearCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearProductFromCart: () => {}
};

export const GlobalContext = createContext(defaultValue);
export const useGlobalContext = (): GlobalContextInterface => {
  const store = useContext(GlobalContext);
  return store;
};
