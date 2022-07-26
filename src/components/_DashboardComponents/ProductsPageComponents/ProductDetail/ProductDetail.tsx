/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import {
  Box,
  Divider,
  Heading,
  Text,
  Tag,
  useColorModeValue
  // Select,
  // Image
} from '@chakra-ui/react';
import ProductImageCarousel from '@common/ProductImageCarousel/ProductImageCarousel';
import InLineLoader from '@common/InlineLoader/InlineLoader';
import { IProductDetailProps } from './interfaces';
import useProductDetailController from './ProductDetail.controller';

const ProductDetail: FC<IProductDetailProps> = (props) => {
  const { useController = useProductDetailController, itemId, onClose } = props;
  const controller = useController(itemId, onClose);
  const { product } = controller;

  // const [variantStock, setVariantStock] = useState(null);
  const titleColor = useColorModeValue('#1F2937', '#eee');
  const textColor = useColorModeValue('#6b7280', '#ccc');
  // let priceColor = useColorModeValue('#4a8cca', '#2495ff');
  const priceColor = useColorModeValue('#4a8cca', '#0c9eed');
  const textTagColor = useColorModeValue('#fafafa', '#eee');

  // const onVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = JSON.parse(e.target.value);
  //   setVariantStock(value.stock);
  // };

  return (
    <Box
      p={{ base: '1rem 0', sm: ' 1rem' }}
      display="flex"
      flexDirection="column"
      gap="1rem"
      justifyContent="center"
      alignItems="start"
      w="100%"
    >
      {!controller.isLoading && product ? (
        <>
          <Box
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            minHeight="500px"
            height="fit-content"
            alignItems="Start"
            gap="2rem"
            p={{ base: '1.5rem 0', md: '2rem 1rem' }}
            w="100%"
          >
            <Box
              w={{ base: '100%', md: '50%' }}
              h="fit-content"
              position="relative"
            >
              {product.discount > 0 && (
                <Tag
                  size="sm"
                  borderRadius="1rem"
                  color="#FFF"
                  bg="#EAB308"
                  position="absolute"
                  top="5px"
                  right="5px"
                  zIndex="2"
                  fontWeight="bold"
                  p="6px 12px"
                >
                  {`${product.discount} %`}
                </Tag>
              )}

              <ProductImageCarousel images={product.gallery} />
            </Box>
            <Box
              w={{ base: '100%', md: '50%' }}
              h="100%"
              display="flex"
              flexDirection="column"
              px={{ base: '0', lg: '2rem' }}
            >
              <Heading
                size="md"
                fontFamily="Open Sans"
                color={titleColor}
                fontWeight={600}
              >
                {product.name}
              </Heading>
              {/* <Text as="span" fontSize="14px" color="#6b7280" marginTop="12px">
                2 lb
              </Text> */}
              <Box fontSize="14px" color={textColor} marginTop="16px">
                {`${product.description.slice(0, 150)} ...`}
              </Box>
              {/* <Link as="span"> Read more </Link> */}

              {/* <Box display="flex" flexDirection="column" mt="40px">
                {product.variants &&
                  Object.keys(product.variants)?.map(
                    (variant: any, i: number) => (
                      <Box key={`${variant}_${i}`}>
                        <Text py="0.8rem" color={titleColor} fontWeight={500}>
                          {`Selecciona ${variant}`}
                        </Text>
                        <Select
                          // as="select"
                          onChange={(e) => onVariantChange(e)}
                          w="fit-content"
                          minW="50%"
                          borderRadius="3px"
                          _focus={{ outline: 'none' }}
                        >
                          {product.variants[variant].map(
                            (value: any, index: number) => (
                              <option
                                key={`${value.name}_${index}`}
                                value={JSON.stringify({
                                  name: value.name,
                                  stock: value.stock
                                })}
                              >
                                {value.name}
                              </option>
                            )
                          )}
                        </Select>
                        <Box fontSize="1rem" color={textColor} marginTop="12px">
                          {`${variantStock}.u restantes`}
                        </Box>
                      </Box>
                    )
                  )}
              </Box> */}
              <Box display="flex" my="40px">
                <Text
                  as="span"
                  fontSize="36px"
                  fontWeight={600}
                  color={priceColor}
                  // color="#0c9eed"
                  marginRight="12px"
                >
                  {`$ ${Math.ceil(product.salePrice * 100) / 100}`}
                </Text>
                {product.discount > 0 && (
                  <Text
                    as="del"
                    fontSize="16px"
                    color="#9ca3af"
                    marginTop="12px"
                  >
                    {`$ ${Math.ceil(product.price * 100) / 100}`}
                  </Text>
                )}
              </Box>
              <Divider />
              <Box mt="12px" display="flex" flexDirection="row">
                <Text mr="1.5rem" fontWeight={500}>
                  {'Stock: '}
                  <Tag
                    size="md"
                    borderRadius="1rem"
                    color={textTagColor}
                    // bg="#0c9eed"
                    bg={priceColor}
                    fontWeight={500}
                    p="4px 10px"
                  >
                    {`${product.stock}.u`}
                  </Tag>
                </Text>
                <Text mr="1.5rem" fontWeight={500}>
                  {'Stock Minimo: '}
                  <Tag
                    size="md"
                    borderRadius="1rem"
                    color={textTagColor}
                    // bg="#0c9eed"
                    bg={priceColor}
                    fontWeight={500}
                    p="4px 10px"
                  >
                    {`${product.minStock}.u`}
                  </Tag>
                </Text>
              </Box>
              <Box mt="12px" display="flex" flexDirection="row">
                <Text mr="12px" fontWeight={500}>
                  {'Categorias: '}
                </Text>
                <Tag
                  size="md"
                  borderRadius="1rem"
                  color={textTagColor}
                  // bg="#0c9eed"
                  bg={priceColor}
                  fontWeight={500}
                  p="4px 10px"
                >
                  {product.category}
                </Tag>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box p="1rem">
            <Heading
              fontFamily="Open Sans"
              fontSize="18px"
              color={titleColor}
              fontWeight={600}
              mb="1.5rem"
            >
              Detalle
            </Heading>
            <Text
              fontSize="14px"
              color={textColor}
              marginTop="16px"
              whiteSpace="pre-wrap"
            >
              {product.description}
            </Text>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          minHeight="500px"
          height="fit-content"
          alignItems="Start"
          gap="2rem"
          p={{ base: '1.5rem 0', md: '2rem 1rem' }}
          w="100%"
        >
          <InLineLoader />
        </Box>
      )}
    </Box>
  );
};
export default ProductDetail;
