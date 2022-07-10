import React, { ReactElement } from 'react';
import DashboardLayout from '@components/Layout/DashboardLayout';
// eslint-disable-next-line prettier/prettier
import SectionDashboard, { SectionDashboardHeader } from '@common/sections/SectionDashboard';

import CategoriesTable from '@components/DashboardComponents/CategoriesPageComponents/CategoriesTable/CategoriesTable';
import { NextPageWithLayout } from '../_app';

const Categories: NextPageWithLayout = () => (
  <SectionDashboard>
    <SectionDashboardHeader title="Categorias">
      {/* <Stack direction={['column', 'row']} spacing="24px" p={'.5rem'}>
          <ButtonAdd onClick={onOpen}>Añadir Categoria</ButtonAdd>
          <CustomDrawer Component={AddCategoryForm} onClose={onClose} isOpen={isOpen} />
        </Stack> */}
    </SectionDashboardHeader>
    <CategoriesTable />
  </SectionDashboard>
);
Categories.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Categories;
