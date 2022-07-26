/* eslint-disable no-unused-vars */
import { ICategory } from '@Services/categories/categoriesInterfaces';

export interface ICategoryDetailController {
  category?: ICategory;
  isLoading: boolean;
  onButtonPressed: () => void;
}
export interface ICategoryDetailProps {
  itemId: string;
  onClose: () => void;
  useController?: (
    itemId: string,
    onClose: () => void
  ) => ICategoryDetailController;
}
