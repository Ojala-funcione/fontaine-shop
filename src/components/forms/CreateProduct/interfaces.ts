import { ICategory } from 'services/categories/categoriesInterfaces';
import { ICreateProduct } from 'services/products/productsInterfaces';

/* eslint-disable no-unused-vars */
export interface ICreateProductFormController {
  categories: ICategory[];
  initialValues: ICreateProduct;
  isLoading: boolean;
  validationSchema: any;
  onSubmitButtonPressed: (values: ICreateProduct) => void;
  onCancelButtonPressed: () => void;
}
export interface ICreateProductFormProps {
  onClose: () => void;
  useController?: (onClose?: () => void) => ICreateProductFormController;
}
