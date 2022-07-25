import { ICategory } from 'services/categories/categoriesInterfaces';

/* eslint-disable no-unused-vars */
export interface IEditCategoryFormController {
  category?: ICategory;
  isLoading: boolean;
  validationSchema: any;
  onSubmitButtonPressed: (values: ICategory) => void;
  onCancelButtonPressed: () => void;
}
export interface IEditCategoryFormProps {
  onClose: () => void;
  itemId: string;
  useController?: (
    itemId: string,
    onClose?: () => void
  ) => IEditCategoryFormController;
}
