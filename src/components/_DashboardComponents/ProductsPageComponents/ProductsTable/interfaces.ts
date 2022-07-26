/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { IProduct } from 'services/products/productsInterfaces';

export interface IProductsTableController {
  isLoading: boolean;
  products: IProduct[];
  onDeleteButtonPressed: (id: string, onClose: () => void) => void;
}
export interface IProductsTableProps {
  component?: ReactNode;
  useController?: () => IProductsTableController;
}
