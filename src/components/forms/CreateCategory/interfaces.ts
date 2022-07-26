import { ICreateCategory } from 'services/categories/categoriesInterfaces';

/* eslint-disable no-unused-vars */
export interface ICreateCategoryFormController {
  initialValues: ICreateCategory;
  isLoading: boolean;
  validationSchema: any;
  onSubmitButtonPressed: (values: ICreateCategory) => void;
  onCancelButtonPressed: () => void;
}
export interface ICreateCategoryFormProps {
  onClose: () => void;
  useController?: (onClose?: () => void) => ICreateCategoryFormController;
}
