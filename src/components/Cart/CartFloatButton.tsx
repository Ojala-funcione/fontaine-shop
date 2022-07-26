import { Box, Text } from '@chakra-ui/react';
import { useGlobalContext } from '@context/globalContext/globalContext';
import React, { FC } from 'react';
import { HiOutlineShoppingBag, HiShoppingBag } from 'react-icons/hi';

interface IProps {
  onOpen: () => void;
}

const CartFloatButton: FC<IProps> = ({ onOpen }) => {
  const { cart } = useGlobalContext();

  return (
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
      onClick={() => onOpen()}
    >
      <Box
        fontWeight="600"
        color="#f2f2f2"
        display="flex"
        gap="0.25rem"
        alignItems="center"
      >
        {cart.totalQuantity > 0 ? <HiShoppingBag /> : <HiOutlineShoppingBag />}
        <Text as="span" fontSize="0.875rem">
          {cart.totalQuantity > 1
            ? `${cart.totalQuantity} Items`
            : `${cart.totalQuantity} Item`}
        </Text>
      </Box>
      <Box
        bg="#f2f2f2"
        borderRadius="5px"
        p="8px"
        fontSize="0.875rem"
        color="#266BF9"
        fontWeight="600"
      >
        {`$ ${cart.totalAmount.toFixed(2)}`}
      </Box>
    </Box>
  );
};
export default CartFloatButton;
