/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Flex,
  HStack,
  IconButton,
  Button
} from '@chakra-ui/react';

import { FC } from 'react';
import { IoBagCheck } from 'react-icons/io5';

const CartFloatButton: FC = () => (
  <Box
    minW="90px"
    minH="96px"
    px="12px"
    bg="#266BF9"
    borderRadius="7px 0 0 7px"
    zIndex={3}
    position="fixed"
    right="0"
    top="50vh"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap="0.75rem"
    cursor="pointer"
  >
    <Box
      fontWeight="600"
      color="#f2f2f2"
      display="flex"
      gap="0.25rem"
      alignItems="center"
    >
      <IoBagCheck />
      <Text as="span">x item</Text>
    </Box>
    <Box
      bg="#f2f2f2"
      borderRadius="5px"
      p="8px"
      fontSize="0.875rem"
      color="#266BF9"
      fontWeight="600"
    >
      $0.00
    </Box>
  </Box>
);

export default CartFloatButton;
