import { Box, useColorModeValue } from '@chakra-ui/react';
import Footer from '@components/_Layout/footer/footer';
import Header from '@components/_Layout/header/header';

import React from 'react';

const Layout: React.FC = ({ children }) => (
  <Box minHeight="100vh" bg={useColorModeValue('white', 'gray.800')}>
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Layout;
