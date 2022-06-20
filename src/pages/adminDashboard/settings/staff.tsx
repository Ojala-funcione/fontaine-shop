/* eslint-disable no-unused-vars */
import React, { ReactElement, useEffect } from 'react';
// import { Box } from '@chakra-ui/react';
import DashboardLayout from '@components/Layout/DashboardLayout';
// eslint-disable-next-line prettier/prettier
import SectionDashboard, { SectionDashboardHeader } from '@common/sections/SectionDashboard';
import { useAppDispatch, useAppSelector } from '@Redux/hooks';
import getAllCategories from '@Redux/categories/asyncActions';
import InLineLoader from '@common/InlineLoader/InlineLoader';
import { NextPageWithLayout } from 'pages/_app';

const Staff: NextPageWithLayout = () => {
  const handleDelete = async (id: string, onClose: () => void) => {
    try {
      // console.log('borrado');
      onClose();
    } catch (error) {
      // console.error(error);
    }
  };
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoryList);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <SectionDashboard>
      <SectionDashboardHeader title="Categorias" />
      {categories.length ? (
        // <CustomTable data={categories} columnsConfig={columns} />
        <InLineLoader />
      ) : (
        <InLineLoader />
      )}
    </SectionDashboard>
  );
};
Staff.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Staff;
