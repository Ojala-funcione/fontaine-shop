import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import DashboardLayout from '@components/Layout/DashboardLayout';
import { NextPageWithLayout } from '../_app';

const Coupons: NextPageWithLayout = () => <Box>Coupons</Box>;
Coupons.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Coupons;
