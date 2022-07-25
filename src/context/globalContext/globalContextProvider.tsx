/* eslint-disable react/jsx-no-constructed-context-values */
import { IProduct } from '@Services/products/productsInterfaces';
import { FC, useReducer, useState } from 'react';
import homeSectionsData from 'services/siteSettings/data';
import { SiteSettingsInterface } from 'services/siteSettings/siteSettingsInterfaces';
import cartReducer from './reducers/cartReducer';
import { GlobalContext } from './globalContext';
import { CartActionType, ICartState } from './reducers/interfaces';

const GlobalProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [homeActiveSections, setHomeActiveSections] =
    useState<SiteSettingsInterface>(homeSectionsData);

  const cartInitialState: ICartState = {
    totalQuantity: 0,
    totalAmount: 0,
    products: []
  };

  // Use reducer
  const [cart, cartDispatch] = useReducer(cartReducer, cartInitialState);

  // Define reducer actions
  const clearCart = (): void => {
    cartDispatch({ type: CartActionType.clearCart });
  };
  const addProductToCart = (product: IProduct): void => {
    cartDispatch({ type: CartActionType.addProduct, payload: product });
  };
  const removeProductFromCart = (product: IProduct): void => {
    cartDispatch({ type: CartActionType.removeProduct, payload: product });
  };
  const clearProductFromCart = (product: IProduct): void => {
    cartDispatch({ type: CartActionType.clearProduct, payload: product });
  };

  const value = {
    isLoading,
    setIsLoading,
    homeActiveSections,
    setHomeActiveSections,
    cart,
    clearCart,
    addProductToCart,
    removeProductFromCart,
    clearProductFromCart
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
