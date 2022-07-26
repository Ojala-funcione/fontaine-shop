/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { ReactElement, useEffect, useState } from 'react';
import { Box, useDisclosure, useToast } from '@chakra-ui/react';
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import HeroShop from '@components/_ShopPageComponents/HeroShop/HeroShop';
import ProductsContainer from '@components/_ShopPageComponents/ProductsContainer/ProductsContainer';
import FilterSidebar from '@components/_ShopPageComponents/FilterSidebar/FilterSidebar';
// import { useAppSelector } from '@Redux/hooks';
import CartFloatButton from '@components/Cart/CartFloatButton';
import CustomDrawer from '@common/CustomDrawer/CustomDrawer';
import CartProductList from '@components/Cart/CartProductList';
import ShopLayout from '@components/_Layout/ShopLayout';
import { IProduct } from 'services/products/productsInterfaces';
import useAPIProducts from 'services/products/apiProducts';
import { NextPageWithLayout } from './_app';

const Store: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const products = useAppSelector((state) => state.products.listedProducts);
  // const cart = useAppSelector((state) => state.products.cartProducts);
  // const quantityCart = useAppSelector((state) => state.products.quantityCart);
  // console.log('products', products);
  const apiProducts = useAPIProducts();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const getAllProducts = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      apiProducts
        .getAllProductsPaginated(0, 10)
        .then((r) => {
          setProducts(r.products);
        })
        .catch((err: string) => {
          toast({ title: err.toString(), status: 'error', duration: 9000 });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
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
Store.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};
export default Store;
