/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useAPICategories from 'services/categories/apiCategories';
import { ICategory } from 'services/categories/categoriesInterfaces';
import { ICategoriesTableController } from './interfaces';

const useCategoriesTableController = (): ICategoriesTableController => {
  const apiCategories = useAPICategories();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  // listeners
  useEffect(() => {
    getAllCategories();
  }, []);

  // view events
  const onDeleteButtonPressed = (id: string, onClose: () => void) => {
    console.log('delete');
    deleteCategory(id);
    onClose();
  };
  // private methods
  const getAllCategories = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      apiCategories
        .getAllCategories()
        .then((r) => {
          setCategories(r.categories);
        })
        .catch((err: string) => {
          toast({ title: err.toString(), status: 'error', duration: 9000 });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  const deleteCategory = (id: string): void => {
    setIsLoading(true);
    setTimeout(() => {
      apiCategories
        .deleteCategory(id)
        .then((r) => {
          toast({
            title: `${r}`,
            status: 'success',
            duration: 5000
          });
        })
        .catch((err: string) => {
          toast({ title: err.toString(), status: 'error', duration: 9000 });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  return {
    isLoading,
    categories,
    onDeleteButtonPressed
  };
};

export default useCategoriesTableController;
