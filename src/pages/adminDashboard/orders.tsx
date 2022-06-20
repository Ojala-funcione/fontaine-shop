import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import DashboardLayout from '@components/Layout/DashboardLayout';
import { NextPageWithLayout } from 'pages/_app';

const Orders: NextPageWithLayout = () => <Box>orders</Box>;
Orders.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Orders;
