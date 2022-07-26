/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { ICategory } from 'services/categories/categoriesInterfaces';

export interface ICategoriesTableController {
  isLoading: boolean;
  categories: ICategory[];
  onDeleteButtonPressed: (id: string, onClose: () => void) => void;
}
export interface ICategoriesTableProps {
  component?: ReactNode;
  useController?: () => ICategoriesTableController;
}
