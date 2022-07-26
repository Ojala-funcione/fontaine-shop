/* eslint-disable react/no-unstable-nested-components */
import { Text } from '@chakra-ui/react';
import { Column } from 'react-table';
import React, { FC } from 'react';
import { CellActions, CellImage } from '@common/Tables/CustomTable/TableCell';
import CustomTable from '@common/Tables/CustomTable';
import EditProductForm from '@components/forms/EditProduct/EditProductForm';
import { IProduct } from 'services/products/productsInterfaces';
import ProductDetail from '../ProductDetail/ProductDetail';
import { IProductsTableProps } from './interfaces';
import useProductsTableController from './ProductsTable.controller';

const ProductssTable: FC<IProductsTableProps> = (props) => {
  const { useController = useProductsTableController, component } = props;
  const controller = useController();

  const columns: Column<IProduct>[] = [
    {
      Header: 'Imagen',
      accessor: 'image',
      minWidth: 80,
      maxWidth: 100,
      disableSortBy: true,
      Cell: ({ value }: { value: string }) => <CellImage data={value} />
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      minWidth: 200
    },
    {
      Header: 'Marca',
      accessor: 'brand',
      minWidth: 100,
      maxWidth: 250
    },
    {
      Header: 'Categoria',
      accessor: 'category',
      minWidth: 100,
      maxWidth: 250
    },
    {
      Header: 'Precio',
      accessor: 'salePrice',
      Cell: ({ value }: { value: number }) => (
        <Text
          as="span"
          fontWeight={600}
          fontSize="1rem"
          w="100%"
          textAlign="center"
        >
          {`$ ${value}`}
        </Text>
      ),
      minWidth: 80,
      maxWidth: 120
    },
    {
      Header: 'Stock',
      accessor: 'stock',
      Cell: ({ value }: { value: number }) => (
        <Text
          as="span"
          fontWeight={600}
          fontSize="1rem"
          w="100%"
          textAlign="center"
        >
          {value}
          .u
        </Text>
      ),
      minWidth: 80,
      maxWidth: 120
    },
    {
      Header: 'Acciones',
      accessor: 'id',
      Cell: ({ value }: { value: any }) => (
        <CellActions
          edit={{
            Component: EditProductForm,
            size: 'lg'
          }}
          onClickDelete={controller.onDeleteButtonPressed}
          view={{
            Component: ProductDetail,
            size: '6xl'
          }}
          data={value}
        />
      ),
      minWidth: 100,
      maxWidth: 150,
      disableSortBy: true
    }
  ];

  return (
    <CustomTable
      data={controller.products}
      columns={columns}
      isLoading={controller.isLoading}
      component={component}
    />
  );
};
export default ProductssTable;
