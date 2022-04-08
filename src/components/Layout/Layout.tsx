import { Box } from '@chakra-ui/react';
import Header from '@components/header/header';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <Box minHeight="100vh" bg="lavender">
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
