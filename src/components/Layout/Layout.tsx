import { Box, useColorModeValue } from '@chakra-ui/react';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import React from 'react';

const Layout: React.FC = ({ children }) => (
  <Box
    // height="fit-content"
    // minHeight="100vh"
    bg={useColorModeValue('white', 'gray.800')}
  >
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Layout;
