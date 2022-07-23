import { FC, useState } from 'react';
import { BaseContext, SettingsInterface } from './baseContext';

const BaseProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsInterface>({
    prop1: '',
    prop2: 4,
    prop3: true
  });
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isLoading,
    setIsLoading,
    settings,
    setSettings
  };
  return <BaseContext.Provider value={value}>{children}</BaseContext.Provider>;
};

export default BaseProvider;
