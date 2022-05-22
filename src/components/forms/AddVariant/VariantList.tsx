/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import { Box, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { HiOutlineMinusCircle } from 'react-icons/hi';

const ShowVariants = ({ allVariants, variant, deleteVariantOption }) => {
  const btn_color = useColorModeValue('#2f2f2f', '#bababa');
  return (
    <Box h="fit-content" w="100%" py="1rem">
      {allVariants[variant].map((item, i) => (
        <Box
          key={`${item.name} ${i}`}
          display="flex"
          flexDirection="row"
          gap="0.5rem"
          justifyContent="start"
          alignItems="center"
          borderBottom="1px solid #eaeaea"
          py="0.5rem"
        >
          <IconButton
            aria-label="menos"
            borderRadius="20px"
            bg="transpatent"
            h="fit-content"
            w="fit-content"
            minW="fit-content"
            color={btn_color}
            _focus={{
              outline: 'none',
              bg: 'transpatent'
            }}
            _hover={{
              bg: 'transpatent',
              color: 'crimson'
            }}
            _active={{
              bg: 'transpatent'
            }}
            onClick={() => deleteVariantOption(variant, item.name)}
            icon={<HiOutlineMinusCircle fontSize="20px" />}
          />
          <Text w="40%" as="span">
            {item.name}
          </Text>
          <Text w="25%" as="span">
            {`Stock: ${item.stock}`}
          </Text>
          <Text w="25%" as="span">
            {`Sku: ${item.sku}`}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
export default ShowVariants;
