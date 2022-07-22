/* eslint-disable no-unused-vars */
import { IProduct } from 'services/products/productsInterfaces';

export interface IProductDetailController {
  product?: IProduct;
  isLoading: boolean;
  onButtonPressed: () => void;
}
export interface IProductDetailControllerProps {
  itemId: string;
  onClose: () => void;
  useController?: (
    itemId: string,
    onClose: () => void
  ) => IProductDetailController;
}
