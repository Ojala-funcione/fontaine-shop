/* eslint-disable object-curly-newline */
import React, { ReactElement } from 'react';
import DashboardLayout from '@components/Layout/DashboardLayout';
import SectionDashboard, {
  SectionDashboardHeader
} from '@common/sections/SectionDashboard';

import CategoriesTable from '@components/DashboardComponents/CategoriesPageComponents/CategoriesTable/CategoriesTable';
import { Stack, useDisclosure } from '@chakra-ui/react';
import CreateCategoryForm from '@components/forms/CreateCategory/CreateCategory';
import CustomDrawer from '@common/CustomDrawer/CustomDrawer';
import ButtonAdd from '@common/Buttons/ButtonAdd';
import { NextPageWithLayout } from '../_app';

const Categories: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SectionDashboard>
      <SectionDashboardHeader title="Categorias" />
      <Stack
        direction={['column', 'row']}
        spacing="24px"
        p=".5rem"
        justifyContent="flex-end"
      >
        {/* <ButtonAdd onClick={onOpen}>Añadir Categoria</ButtonAdd> */}
        <CustomDrawer
          Component={CreateCategoryForm}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Stack>
      <CategoriesTable
        component={<ButtonAdd onClick={onOpen}>Añadir Categoria</ButtonAdd>}
      />
    </SectionDashboard>
  );
};
Categories.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Categories;
