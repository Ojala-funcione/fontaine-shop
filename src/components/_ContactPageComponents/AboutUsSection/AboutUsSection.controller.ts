/* eslint-disable no-use-before-define */
import { useToast } from '@chakra-ui/react';
import useAPISiteSettings from '@Services/siteSettings/apiSiteSettings';
import { useEffect, useState } from 'react';
import { IAboutUsData, IAboutUsSectionController } from './interfaces';

const useAboutUsController = (): IAboutUsSectionController => {
  const apiSiteSettings = useAPISiteSettings();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IAboutUsData | undefined>(undefined);

  // listeners
  useEffect(() => {
    getAboutUsData();
  }, []);

  // private methods

  const getAboutUsData = (): void => {
    setIsLoading(true);
    apiSiteSettings
      .getAboutUsSectionSettings()
      .then((response) => {
        setData(response.data);
      })
      .catch((err: string) => {
        toast({ title: err.toString(), status: 'error', duration: 9000 });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    data
  };
};

export default useAboutUsController;
