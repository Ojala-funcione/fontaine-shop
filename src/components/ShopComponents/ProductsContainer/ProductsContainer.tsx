import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { IProduct } from '@Redux/Interfaces';
import ProductCard from '@components/shopCard/ProductCard';

const ProductsContainer = ({ products }: { products: IProduct[] }) => (
  <Box
    h="100%"
    w="100%"
    p={{ base: '0rem 0', sm: '10px', md: '20px' }}
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
      {/* {console.log('estao llega', products)} */}

      {products?.map((product) => (
        <ProductCard
          key={product.productId}
          name={product.name}
          price={product.price}
          image={product.image}
          gallery={product.gallery}
          discountInPercent={product.discountInPercent}
          salePrice={product.salePrice}
          isOffer={product.isOffer}
          category={product.category}
          isNew={product.isNew}
          productId={product.productId}
          isCombo={product.isCombo}
          isFeatured={product.isFeatured}
          brand={product.brand}
          description={product.description}
          stock={product.stock}
          minStock={product.minStock}
          sku={product.sku}
          variants={product.variants}
        />
      ))}
    </SimpleGrid>
  </Box>
);

export default ProductsContainer;
