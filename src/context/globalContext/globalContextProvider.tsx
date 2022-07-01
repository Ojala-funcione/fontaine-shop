import { FC, useState } from 'react';
import homeSectionsData from 'services/siteSettings/data';
import { SiteSettingsInterface } from 'services/siteSettings/siteSettingsInterfaces';
import { GlobalContext } from './globalContext';

const GlobalProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [homeActiveSections, setHomeActiveSections] =
    useState<SiteSettingsInterface>(homeSectionsData);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isLoading,
    setIsLoading,
    homeActiveSections,
    setHomeActiveSections
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
