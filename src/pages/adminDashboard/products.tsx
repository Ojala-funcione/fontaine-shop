/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, { ReactElement, useEffect } from 'react';
import DashboardLayout from '@components/Layout/DashboardLayout';
import { useAppDispatch, useAppSelector } from '@Redux/hooks';
import { getAllProducts } from '@Redux/products/asyncActions';
// eslint-disable-next-line prettier/prettier
import SectionDashboard, { SectionDashboardHeader } from '@common/sections/SectionDashboard';
import InLineLoader from '@common/InlineLoader/InlineLoader';
// import CustomTable from '@common/Tables/CustomTable';
// import { CellActions, CellImage } from '@common/Tables/CustomTable/TableCell';
import EditProductForm from '@components/forms/EditProductForm';
import { Text } from '@chakra-ui/react';
import { NextPageWithLayout } from 'pages/_app';

const Products: NextPageWithLayout = () => {
  const handleDelete = async (id: string, onClose: () => void) => {
    try {
      // console.log('borrado');
      onClose();
    } catch (error) {
      // console.error(error);
    }
  };
  const columns = [
    {
      Header: 'Imagen',
      accessor: 'image',
      // Cell: ({ value }: { value: any }) => <CellImage data={value} />,
      minWidth: 80,
      maxWidth: 100
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      minWidth: 200,
      sort: true
    },
    {
      Header: 'Marca',
      accessor: 'brand',
      minWidth: 100,
      maxWidth: 250,
      sort: true
    },
    {
      Header: 'Categoria',
      accessor: 'category',
      minWidth: 100,
      maxWidth: 250,
      sort: true
    },
    {
      Header: 'Precio',
      accessor: 'salePrice',
      Cell: ({ value }: { value: any }) => (
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
      maxWidth: 120,
      sort: true
    },
    {
      Header: 'Stock',
      accessor: 'stock',
      Cell: ({ value }: { value: any }) => (
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
      maxWidth: 120,
      sort: true
    },
    {
      Header: 'Acciones',
      accessor: 'id',
      // Cell: ({ value }: { value: any }) => (
      //   <CellActions
      //     edit={{
      //       Component: EditProductForm,
      //       size: 'lg'
      //     }}
      //     onClickDelete={handleDelete}
      //     //   view={{
      //     //     Component: ProductDetail,
      //     //     size: '6xl',
      //     //   }}
      //     data={value}
      //   />
      // ),
      minWidth: 100,
      maxWidth: 150
    }
  ];
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.listedProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <SectionDashboard>
      <SectionDashboardHeader title="Productos" />
      {products.length ? (
        // <CustomTable data={products} columnsConfig={columns} />
        <InLineLoader />
      ) : (
        <InLineLoader />
      )}
    </SectionDashboard>
  );
};
Products.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Products;
