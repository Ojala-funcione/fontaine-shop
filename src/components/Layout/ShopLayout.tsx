/* eslint-disable no-unused-vars */
import { Box, useColorModeValue } from '@chakra-ui/react';
import Footer from '@components/Layout/footer/footer';
import Header from '@components/Layout/header/header';
import React from 'react';

const ShopLayout: React.FC = ({ children }) => (
  <Box
    // height="fit-content"
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

export default ShopLayout;
