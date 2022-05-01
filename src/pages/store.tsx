import React from 'react';
import { Box } from '@chakra-ui/react';
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import HeroShop from '@components/ShopComponents/HeroShop/HeroShop';
import ProductsContainer from '@components/ShopComponents/ProductsContainer/ProductsContainer';
import FilterSidebar from '@components/ShopComponents/FilterSidebar/FilterSidebar';
import { useAppSelector } from '@Redux/hooks';
// import { IProduct } from '@Redux/Interfaces';

const Store = () => {
  const products = useAppSelector((state) => state.products.allProducts);
  console.log('store', products);
  return (
    <>
      <ScrollToTopButton />
      <Box minH="100vh">
        <HeroShop />
        <Box
          display="flex"
          flexDirection={{ base: 'column', xl: 'row' }}
          // bg="#01731456"
        >
          <FilterSidebar />
          <ProductsContainer products={products} />
        </Box>
      </Box>
    </>
  );
};

export default Store;
