/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useAPIProducts from 'services/products/apiProducts';
import { ICreateProduct } from 'services/products/productsInterfaces';
import { ICategory } from 'services/categories/categoriesInterfaces';
import useAPICategories from 'services/categories/apiCategories';
import { ICreateProductFormController } from './interfaces';

const useCreateProductFormController = (
  onClose?: () => void
): ICreateProductFormController => {
  const apiProducts = useAPIProducts();
  const apiCategories = useAPICategories();
  const toast = useToast();
  const initialValues: ICreateProduct = {
    onSale: false,
    isNew: false,
    onCombo: false,
    isFeatured: false,
    name: '',
    brand: '',
    description: '',
    category: '',
    price: '',
    discount: '',
    stock: '',
    minStock: '',
    sku: '',
    image:
      'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/logo-square.jpg?alt=media&token=f1b1b8d0-a08d-4f9c-9798-e4eb3b4a95d8',
    gallery: [
      'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/logo-square.jpg?alt=media&token=f1b1b8d0-a08d-4f9c-9798-e4eb3b4a95d8'
    ],
    variants: false
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is Required')
      .max(255, 'Max 255 Characters'),
    brand: Yup.string().max(255, 'Max 255 Characters'),
    description: Yup.string().max(2000, 'Max 2000 Characters'),
    price: Yup.number().required().min(0, 'the price should be higher zero'),
    stock: Yup.number().required().min(0, 'the stock should be higher zero'),
    minStock: Yup.number()
      .required()
      .min(0, 'the min stock should be higher zero'),
    category: Yup.string().required().min(0, 'Select a category'),
    gallery: Yup.array().min(1).max(5).required(),
    discount: Yup.number()
      .min(0, 'The discount should be higher zero')
      .max(100, 'The discount should be lower one hundred'),
    sku: Yup.string()
  });

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // listeners
  useEffect(() => {
    getAllCategories();
  }, []);

  // view events
  const onSubmitButtonPressed = (values: ICreateProduct) => {
    // const gallery: any[] = [];
    // for (const item of values.gallery) {
    //   const url = await onUpload('products/', item);
    //   gallery.push(url);
    // }
    let input = values;
    if (input.discount === undefined) {
      input.discount = 0;
    }
    input = { ...input, image: input.gallery[0] };
    // console.log('submit', input, typeof input.discount);
    createProduct(input);
  };

  const onCancelButtonPressed = () => {
    // console.log('cancel');
    onClose && onClose();
  };

  // private methods
  const createProduct = (newProduct: ICreateProduct): void => {
    setIsLoading(true);
    setTimeout(() => {
      apiProducts
        .createProduct(newProduct)
        .then((r) => {
          toast({
            title: 'Producto creado exitosamente',
            status: 'success',
            duration: 5000
          });
        })
        .catch((err: string) => {
          onClose && onClose();
          toast({ title: err.toString(), status: 'error', duration: 9000 });
        })
        .finally(() => {
          // console.log('finish');
          setIsLoading(false);
          onClose && onClose();
        });
    }, 2000);
  };

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

  return {
    categories,
    initialValues,
    validationSchema,
    isLoading,
    onSubmitButtonPressed,
    onCancelButtonPressed
  };
};

export default useCreateProductFormController;
