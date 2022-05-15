/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import HeroShop from '@components/ShopComponents/HeroShop/HeroShop';
import ProductsContainer from '@components/ShopComponents/ProductsContainer/ProductsContainer';
import FilterSidebar from '@components/ShopComponents/FilterSidebar/FilterSidebar';
import { useAppSelector } from '@Redux/hooks';
import CartFloatButton from '@components/Cart/CartFloatButton';
import CustomDrawer from '@common/CustomDrawer/CustomDrawer';
import CartProductList from '@components/Cart/CartProductList';
import ShopLayout from '@components/Layout/ShopLayout';
// import { IProduct } from '@Redux/Interfaces';

const Store = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const products = useAppSelector((state) => state.products.listedProducts);
  // const cart = useAppSelector((state) => state.products.cartProducts);
  // const quantityCart = useAppSelector((state) => state.products.quantityCart);
  // // console.log('cart', quantityCart, cart);
  return (
    <>
      <ScrollToTopButton />
      <CartFloatButton onOpen={onOpen} />
      <CustomDrawer
        size="sm"
        isOpen={isOpen}
        onClose={onClose}
        // Component={<FilterSidebar />}
      >
        <CartProductList />
      </CustomDrawer>
      <Box minH="100vh">
        <HeroShop />
        <Box
          display="flex"
          flexDirection={{ base: 'column', xl: 'row' }}
          // bg="#01731456"
          // pt="1.5rem"
        >
          <FilterSidebar />
          <ProductsContainer products={products} />
        </Box>
      </Box>
    </>
  );
};
Store.Layout = ShopLayout;
export default Store;
