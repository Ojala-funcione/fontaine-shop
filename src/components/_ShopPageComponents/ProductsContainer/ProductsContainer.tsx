import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ProductCard from '@components/shopCard/ProductCard';
import { IProduct } from 'services/products/productsInterfaces';

const ProductsContainer = ({ products }: { products: IProduct[] }) => (
  <Box
    h="100%"
    w="100%"
    p={{ base: '0rem 0', sm: '1.5rem 10px', md: '2.5rem 20px' }}
    // bg="#aaa"
    display="flex"
    justifyContent="center"
    // flexDirection="row"
    // flexWrap="wrap"
    // gap="20px"
  >
    <SimpleGrid
      columns={[1, 2, 3, 4, 4, 5]}
      spacingX={{ base: '0', sm: '20px' }}
      spacingY={{ base: '0', sm: '20px' }}
    >
      {/* <Box
    h="100%"
    w="fit-content"
    p="20px"
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    gap="20px"
  > */}

      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  </Box>
);

export default ProductsContainer;
