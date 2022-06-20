/* eslint-disable no-unused-vars */
import { Box, useColorModeValue } from '@chakra-ui/react';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import getAllCategories from '@Redux/categories/asyncActions';
import { useAppDispatch } from '@Redux/hooks';
import { getAllProducts } from '@Redux/products/asyncActions';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const DefaultLayout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  // const { pathname } = useRouter();
  // // const isDashboard = pathname.startsWith('/adminDashboard');
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
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
};

export default DefaultLayout;
