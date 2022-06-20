/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
// import { useAppDispatch, useAppSelector } from 'Redux/hooks';
import { getAllProducts } from 'Redux/products/asyncActions';

const Contact: FC = () => (
  // const dispatch = useAppDispatch();
  // const { products } = useAppSelector((state) => state.products);
  // console.log(products);
  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);
  <Box>
    {/* <Button onClick={() => dispatch(getAllProducts())}>Test</Button> */}
    Contact Page
  </Box>
);
export default Contact;
