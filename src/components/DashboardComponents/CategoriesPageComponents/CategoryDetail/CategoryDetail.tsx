/* eslint-disable no-unused-vars */
import React, { FC, useEffect, useState } from 'react';
// import { InLineLoader } from '../../components/InlineLoader/InlineLoader';
// import { useDb } from '../../db/DbProvider';
import {
  Box,
  Divider,
  Heading,
  Image,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import InLineLoader from '@common/InlineLoader/InlineLoader';
import { ICategory } from 'services/categories/categoriesInterfaces';

interface ICategoryDetail {
  itemId: string;
}

const CategoryDetail: FC<ICategoryDetail> = ({ itemId }) => {
  // const { getOneCategory } = useDb();
  const [category, setCategory] = useState<ICategory | undefined>(undefined);
  const titleColor = useColorModeValue('#1F2937', '#eee');
  const textColor = useColorModeValue('#6b7280', '#ccc');
  useEffect(() => {
    // async function getData(id) {
    //   const customerDetail = await getOneCategory(id);
    //   setCategory(customerDetail);
    // }
    // getData(itemId);
  }, [itemId]);

  return (
    <Box
      p="1rem"
      display="flex"
      flexDirection="column"
      gap="1rem"
      justifyContent="center"
      alignItems="start"
      w="100%"
    >
      {category ? (
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          minHeight="400px"
          height="fit-content"
          alignItems="Start"
          gap="2rem"
          p="3rem 1rem"
          w="100%"
        >
          <Box
            w={{ base: '100%', sm: '80%', md: '50%' }}
            h="fit-content"
            position="relative"
            alignSelf="center"
          >
            <Image alt="" src={category.image} />
          </Box>
          <Box
            w={{ base: '100%', md: '50%' }}
            h="100%"
            display="flex"
            flexDirection="column"
            px={{ base: '0', lg: '2rem' }}
            pt="1rem"
          >
            <Heading
              size="md"
              fontFamily="Open Sans"
              color={titleColor}
              fontWeight={600}
              textTransform="capitalize"
            >
              {category.name}
            </Heading>
            <Box fontSize="14px" color={textColor} my="16px">
              {`Slug: ${category.slug}`}
            </Box>

            <Divider />
            <Box mt="12px" display="flex" flexDirection="row">
              <Text mr="1.5rem" color={titleColor}>
                {'Subcategorias: '}
                {category.subcategories?.length &&
                  category.subcategories.map((item: string) => (
                    <Tag textTransform="capitalize" mx="6px" key={item}>
                      {item}
                    </Tag>
                  ))}
              </Text>
            </Box>
            {/* <Box mt="12px" display="flex" flexDirection="row">
              <Text mr="1.5rem" color={titleColor}>
                {'Categoria Padre: '}
                {category.parentCategory && (
                  <Tag textTransform="capitalize" mx="6px">
                    {category.parentCategory}
                  </Tag>
                )}
              </Text>
            </Box> */}
          </Box>
        </Box>
      ) : (
        <InLineLoader />
      )}
    </Box>
  );
};
export default CategoryDetail;
