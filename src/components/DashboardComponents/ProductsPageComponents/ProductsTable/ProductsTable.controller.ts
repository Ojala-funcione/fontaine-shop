/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useAPIProducts from 'services/products/apiProducts';
import { IProduct } from 'services/products/productsInterfaces';
import { IProductsTableController } from './interfaces';

const useProductsTableController = (): IProductsTableController => {
  const apiProducts = useAPIProducts();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  // listeners
  useEffect(() => {
    getAllProducts();
  }, []);

  // view events
  const onDeleteButtonPressed = (id: string, onClose: () => void) => {
    console.log('delete');
    deleteProduct(id);
    onClose();
  };
  // private methods
  const getAllProducts = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      apiProducts
        .getAllProducts()
        .then((r) => {
          setProducts(r.products);
        })
        .catch((err: string) => {
          toast({ title: err.toString(), status: 'error', duration: 9000 });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  const deleteProduct = (id: string): void => {
    setIsLoading(true);
    setTimeout(() => {
      apiProducts
        .deleteProduct(id)
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
    products,
    onDeleteButtonPressed
  };
};

export default useProductsTableController;
