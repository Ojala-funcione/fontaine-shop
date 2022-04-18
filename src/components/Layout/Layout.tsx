import { Box } from '@chakra-ui/react';
import Header2 from '@components/header/header2';
import React from 'react';

const Layout: React.FC = ({ children }) => (
  <Box minHeight="100vh">
    <Header2 />
    {children}
  </Box>
);

export default Layout;
