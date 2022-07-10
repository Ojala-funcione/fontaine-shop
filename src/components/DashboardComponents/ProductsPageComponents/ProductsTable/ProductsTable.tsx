/* eslint-disable react/no-unstable-nested-components */
import { Text } from '@chakra-ui/react';
import { Column } from 'react-table';
import { FC } from 'react';

import { IProduct } from '@Redux/Interfaces';
import productData from 'services/products/data';
import { CellActions, CellImage } from '@common/Tables/CustomTable/TableCell';
import CustomTable from '@common/Tables/CustomTable';

const ProductssTable: FC = () => {
  const handleDelete = async (id: string, onClose: () => void) => {
    try {
      console.log('borrado', id);
      onClose();
    } catch (error) {
      // console.error(error);
    }
  };
  const data: IProduct[] = productData;

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
      accessor: 'productId',
      Cell: ({ value }: { value: any }) => (
        <CellActions
          edit={{
            // Component: EditProductForm,
            size: 'lg'
          }}
          onClickDelete={handleDelete}
          //   view={{
          //     Component: ProductDetail,
          //     size: '6xl',
          //   }}
          data={value}
        />
      ),
      minWidth: 100,
      maxWidth: 150,
      disableSortBy: true
    }
  ];

  return <CustomTable data={data} columns={columns} />;
};
export default ProductssTable;
