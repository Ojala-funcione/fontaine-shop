import { Box, useColorModeValue } from '@chakra-ui/react';
import Footer from '@components/footer/footer';
import Header2 from '@components/header/header2';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <Box minHeight="100vh" bg={useColorModeValue('white', 'gray.800')}>
      <Header2 />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
