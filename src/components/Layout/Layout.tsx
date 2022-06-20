import { Box, useColorModeValue } from '@chakra-ui/react';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import getAllCategories from '@Redux/categories/asyncActions';
import { useAppDispatch } from '@Redux/hooks';
import { getAllProducts } from '@Redux/products/asyncActions';
// import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Layout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  // const { pathname } = useRouter();
  // const isDashboard = pathname.startsWith('/adminDashboard');
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
    <Box
      // height="fit-content"
      minHeight="100vh"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Header />
      {children}
      {/* <Footer display={isDashboard ? 'none' : ''} /> */}
      <Footer />
    </Box>
  );
};

export default Layout;
