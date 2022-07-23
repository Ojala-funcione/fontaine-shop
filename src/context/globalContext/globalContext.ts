import React, { createContext, useContext } from 'react';
import homeSectionsData from 'services/siteSettings/data';
import { SiteSettingsInterface } from 'services/siteSettings/siteSettingsInterfaces';

interface GlobalContextInterface {
  isLoading: boolean;
  homeActiveSections: SiteSettingsInterface;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setHomeActiveSections: React.Dispatch<
    React.SetStateAction<SiteSettingsInterface>
  >;
}

const defaultValue: GlobalContextInterface = {
  isLoading: false,
  homeActiveSections: homeSectionsData,
  setIsLoading: () => {},
  setHomeActiveSections: () => {}
};

export const GlobalContext = createContext(defaultValue);
export const useGlobalContext = (): GlobalContextInterface => {
  const store = useContext(GlobalContext);
  return store;
};
