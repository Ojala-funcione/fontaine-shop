import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import DashboardLayout from '@components/Layout/DashboardLayout';
import { NextPageWithLayout } from '../../_app';

const SiteSettings: NextPageWithLayout = () => <Box>siteSettings</Box>;
SiteSettings.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default SiteSettings;
