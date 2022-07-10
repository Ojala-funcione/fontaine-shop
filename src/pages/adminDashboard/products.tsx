/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, { ReactElement, useEffect } from 'react';
import DashboardLayout from '@components/Layout/DashboardLayout';
// eslint-disable-next-line prettier/prettier
import SectionDashboard, { SectionDashboardHeader } from '@common/sections/SectionDashboard';
import ProductsTable from '@components/DashboardComponents/ProductsPageComponents/ProductsTable/ProductsTable';
import { NextPageWithLayout } from '../_app';

const Products: NextPageWithLayout = () => (
  // const dispatch = useAppDispatch();
  // const products = useAppSelector((state) => state.products.listedProducts);
  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  <SectionDashboard>
    <SectionDashboardHeader title="Productos" />
    <ProductsTable />
  </SectionDashboard>
);
Products.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Products;
