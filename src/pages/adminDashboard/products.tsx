/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, { ReactElement } from 'react';
import DashboardLayout from '@components/Layout/DashboardLayout';
// eslint-disable-next-line prettier/prettier
import SectionDashboard, { SectionDashboardHeader } from '@common/sections/SectionDashboard';
import ProductsTable from '@components/DashboardComponents/ProductsPageComponents/ProductsTable/ProductsTable';
import { Stack, useDisclosure } from '@chakra-ui/react';
import ButtonAdd from '@common/Buttons/ButtonAdd';
import CustomDrawer from '@common/CustomDrawer/CustomDrawer';
import AddProductForm from '@components/forms/CreateProduct/CreateProductForm';
import { NextPageWithLayout } from '../_app';

const Products: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SectionDashboard>
      <SectionDashboardHeader title="Productos" />
      <Stack
        direction={['column', 'row']}
        spacing="24px"
        p=".5rem"
        justifyContent="flex-end"
      >
        {/* <ButtonAdd onClick={onOpen}>Añadir Producto</ButtonAdd> */}
        <CustomDrawer
          Component={AddProductForm}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Stack>
      <ProductsTable
        component={<ButtonAdd onClick={onOpen}>Añadir Producto</ButtonAdd>}
      />
    </SectionDashboard>
  );
};
Products.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Products;
