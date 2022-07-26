/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useToast } from '@chakra-ui/react';
import useAPICategories from '@Services/categories/apiCategories';
import { ICategory } from '@Services/categories/categoriesInterfaces';
import { useEffect, useState } from 'react';
import { ICategoryDetailController } from './interfaces';

const useCategoryDetailController = (
  itemId: string,
  onClose: () => void
): ICategoryDetailController => {
  const apICategories = useAPICategories();
  const toast = useToast();

  const [category, setCategory] = useState<ICategory | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // listeners
  useEffect(() => {
    getCategory(itemId);
  }, [itemId]);

  // view events
  const onButtonPressed = () => {
    // console.log('click');
  };

  // private methods
  const getCategory = (id: string): void => {
    setIsLoading(true);
    setTimeout(() => {
      apICategories
        .getOneCategory(id)
        .then((r) => {
          setCategory(r);
        })
        .catch((err: string) => {
          onClose();
          toast({ title: err.toString(), status: 'error', duration: 9000 });
        })
        .finally(() => {
          // console.log('finish');
          setIsLoading(false);
        });
    }, 2000);
  };

  return { isLoading, category, onButtonPressed };
};

export default useCategoryDetailController;
