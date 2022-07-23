import React, { createContext, useContext } from 'react';
/*
pasos:
1- crear interface del contexto
2- crear default value del tipo de la interface del contexto
3- crear contexto y pasarle default value
4- crear hook use context
5- en el archivo provider importar el contexto y su interface y crear el componente provider
6- dentro del componente provider crear estados con useState para cada elemento declarado
dentro de la inteface
7- envolver todos esos esados en un objeto y pasarlos com value al provider
*/

export interface SettingsInterface {
  prop1: string;
  prop2: number;
  prop3: boolean;
}

interface BaseContextInterface {
  isLoading: boolean;
  settings: SettingsInterface;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSettings: React.Dispatch<React.SetStateAction<SettingsInterface>>;
}

const defaultValue: BaseContextInterface = {
  isLoading: false,
  settings: {
    prop1: 'chau',
    prop2: 0,
    prop3: true
  },
  setIsLoading: () => {},
  setSettings: () => {}
};

export const BaseContext = createContext(defaultValue);
export const useBaseContext = (): BaseContextInterface => {
  const store = useContext(BaseContext);
  return store;
};
