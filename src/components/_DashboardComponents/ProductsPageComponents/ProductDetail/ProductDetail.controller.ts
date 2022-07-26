/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useAPIProducts from 'services/products/apiProducts';
import { IProduct } from 'services/products/productsInterfaces';
import { IProductDetailController } from './interfaces';

const useProductDetailController = (
  itemId: string,
  onClose: () => void
): IProductDetailController => {
  const apiProducts = useAPIProducts();
  const toast = useToast();

  const [product, setProduct] = useState<IProduct>({
    id: '',
    onSale: false,
    isNew: false,
    onCombo: false,
    isFeatured: false,
    name: '',
    brand: '',
    description: '',
    category: '',
    price: 0,
    salePrice: 0,
    discount: 0,
    stock: 0,
    minStock: 0,
    sku: '',
    image: '',
    gallery: [],
    dimensions: {},
    variants: false
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // listeners
  useEffect(() => {
    getProduct(itemId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  // view events
  const onButtonPressed = () => {
    // setProduct(undefined);
    // console.log('click');
  };

  // private methods
  const getProduct = (id: string): void => {
    setIsLoading(true);
    setTimeout(() => {
      apiProducts
        .getOneProduct(id)
        .then((r) => {
          setProduct(r);
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

  return { isLoading, product, onButtonPressed };
};

export default useProductDetailController;
