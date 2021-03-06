import React, { ReactElement } from 'react';
import DashboardLayout from '@components/_Layout/DashboardLayout';
import {
  SectionDashboard,
  SectionDashboardHeader
} from '@common/sections/SectionDashboard';

import CustomersTable from '@components/_DashboardComponents/CustomersPageComponents/CustomersTable/CustomersTable';
import { NextPageWithLayout } from '../_app';

const Customers: NextPageWithLayout = () => (
  <SectionDashboard>
    <SectionDashboardHeader title="Clientes" />
    <CustomersTable />
  </SectionDashboard>
);
Customers.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Customers;
