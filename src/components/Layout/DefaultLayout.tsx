/* eslint-disable no-unused-vars */
import { Box, useColorModeValue } from '@chakra-ui/react';
import Footer from '@components/Layout/footer/footer';
import Header from '@components/Layout/header/header';
import { useRouter } from 'next/router';
import React from 'react';

const DefaultLayout: React.FC = ({ children }) => (
  // const { pathname } = useRouter();
  // // const isDashboard = pathname.startsWith('/adminDashboard');
  <Box
    display="flex"
    flexDirection="column"
    minHeight="100vh"
    bg={useColorModeValue('white', 'gray.800')}
  >
    <Header />
    <Box flex="1">{children}</Box>
    <Footer />
    {/* <Footer display={isDashboard ? 'none' : ''} /> */}
  </Box>
);
export default DefaultLayout;
