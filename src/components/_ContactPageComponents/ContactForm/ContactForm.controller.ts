/* eslint-disable no-unused-expressions */
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IContactForm, IContactFormController } from './interfaces';

const useContactFormController = (
  onClose?: () => void
): IContactFormController => {
  // const apiCategories = useAPICategories();
  const toast = useToast();
  const initialValues: IContactForm = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is Required')
      .max(255, 'Max 255 Characters'),
    email: Yup.string().email('Invalid email'),
    message: Yup.string().max(2000, 'Max 2000 Characters')
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // listeners
  // useEffect(() => {
  //   getAllCategories();
  // }, []);

  // view events
  const onSubmitButtonPressed = (values: IContactForm) => {
    const input = values;

    // console.log('submit', input);
    // createProduct(input);
  };

  const onCancelButtonPressed = () => {
    // console.log('cancel');
    onClose && onClose();
  };

  // const getAllCategories = (): void => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     apiCategories
  //       .getAllCategories()
  //       .then((r) => {
  //         setCategories(r.categories);
  //       })
  //       .catch((err: string) => {
  //         toast({ title: err.toString(), status: 'error', duration: 9000 });
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }, 2000);
  // };

  return {
    initialValues,
    validationSchema,
    isLoading,
    onSubmitButtonPressed,
    onCancelButtonPressed
  };
};

export default useContactFormController;
