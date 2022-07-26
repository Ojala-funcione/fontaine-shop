/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import useAPICategories from 'services/categories/apiCategories';
import { ICreateCategory } from 'services/categories/categoriesInterfaces';
import { ICreateCategoryFormController } from './interfaces';

const useCreateCategoryFormController = (
  onClose?: () => void
): ICreateCategoryFormController => {
  const apiCategories = useAPICategories();
  const toast = useToast();
  const initialValues: ICreateCategory = {
    name: '',
    slug: '',
    image:
      'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/logo-square.jpg?alt=media&token=f1b1b8d0-a08d-4f9c-9798-e4eb3b4a95d8'
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Catetegory Name is Required')
      .max(100, 'Max 100 Characters'),
    slug: Yup.string().required('slug').max(100, 'Max 100 Characters')
    // parent_category: Yup.string().max(100, 'Max 100 Characters'),
    // image: Yup.array().min(1).max(5).required()
    // image: Yup.string().min(1).max(5).optional()
  });

  const [input, setInput] = useState<ICreateCategory>(initialValues);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // listeners
  // useEffect(() => {
  //   getProduct(itemId);
  // }, [itemId]);

  // view events
  const onSubmitButtonPressed = (values: ICreateCategory) => {
    // console.log('submit');
    createCategory(values);
  };
  const onCancelButtonPressed = () => {
    // console.log('cancel');
    onClose && onClose();
  };

  // private methods
  const createCategory = (newCategory: ICreateCategory): void => {
    setIsLoading(true);
    setTimeout(() => {
      apiCategories
        .createCategory(newCategory)
        .then((r) => {
          toast({
            title: `Categoria ${r.name} Creada`,
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

  return {
    initialValues,
    validationSchema,
    isLoading,
    onSubmitButtonPressed,
    onCancelButtonPressed
  };
};

export default useCreateCategoryFormController;
