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
import { useGlobalContext } from '@context/globalContext/globalContext';

import React, { FC } from 'react';
import {
  HiMinus,
  HiOutlineShoppingBag,
  HiOutlineTrash,
  HiPlus,
  HiShoppingBag
} from 'react-icons/hi';
import {
  IoIosCloseCircle,
  IoIosCloseCircleOutline,
  IoIosClose
} from 'react-icons/io';
import { ICartProduct, IProduct } from 'services/products/productsInterfaces';

interface ICartItemProps {
  item: ICartProduct;
}
const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { product, quantity, amount } = item;
  const { addProductToCart, clearProductFromCart, removeProductFromCart } =
    useGlobalContext();
  return (
    <Box
      // bg="blue"
      w="100%"
      h="120px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #aaa"
      py="1rem"
      gap="8px"
    >
      <Box
        display="flex"
        bg="#266bf9dd"
        borderRadius="50px"
        flexDirection="column"
        alignItems="center"
        w="30px"
        h="100%"
      >
        <IconButton
          borderRadius="50px 50px 0  0 "
          h="36px"
          w="30px"
          minW="30px"
          bg="transparent"
          aria-label="add-product"
          color="#fff"
          fontWeight={600}
          _focus={{
            outline: 'none'
          }}
          _hover={{
            bg: '#0005'
          }}
          _active={{
            bg: '#0005'
          }}
          onClick={() => addProductToCart(product)}
          icon={<HiPlus fontSize="1.15rem" />}
        />
        <Text
          h="36px"
          w="36px"
          lineHeight="36px"
          textAlign="center"
          verticalAlign="center"
          bg="transparent"
          fontSize="1rem"
          color="#fff"
          fontWeight={600}
        >
          {quantity}
        </Text>
        <IconButton
          aria-label="remove-product"
          borderRadius="0 0 50px 50px"
          h="36px"
          w="30px"
          minW="30px"
          bg="transparent"
          color="#fff"
          fontWeight={600}
          _focus={{
            outline: 'none'
          }}
          _hover={{
            bg: '#0005'
          }}
          _active={{
            bg: '#0005'
          }}
          onClick={() => removeProductFromCart(product)}
          icon={<HiMinus fontSize="1.15rem" />}
        />
      </Box>
      <Box display="flex" flex="1">
        <Image
          marginInline="auto"
          src={product.image}
          alt="carousel image"
          objectFit="cover"
          w="100%"
          h="100%"
          maxH="87px"
          maxW="87px"
          m="0"
        />
        <Box
          display="flex"
          pl="0.5rem"
          flex="1"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text fontSize="0.9rem" fontWeight="600">
            {product.name}
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignSelf="end"
            w="100%"
            fontSize="0.875rem"
            fontWeight="400"
          >
            <Text as="span">
              {`$ ${product.salePrice.toFixed(2)} x ${quantity}pc(s) `}
            </Text>
            <Text as="span" color="#266bf9" fontSize="1rem" fontWeight="600">
              {`$ ${amount.toFixed(2)}`}
            </Text>
          </Box>
        </Box>
      </Box>
      <IconButton
        aria-label="remove-product"
        icon={<IoIosCloseCircleOutline />}
        borderRadius="full"
        p="3px"
        h="fit-content"
        minW="fit-content"
        bg="transparent"
        color={useColorModeValue('#000', '#fff')}
        fontWeight={600}
        fontSize="1.25rem"
        _focus={{
          outline: 'none'
        }}
        _hover={{
          bg: '#0005',
          transform: 'scale(1.2)'
        }}
        _active={{
          bg: '#0005'
        }}
        onClick={() => clearProductFromCart(product)}
      />
    </Box>
  );
};

const CartProductList: FC = () => {
  const { cart, clearCart } = useGlobalContext();
  return (
    <Box w="100%" minH="100%" pb="60px">
      <Box
        // fontWeight="500"
        // color="#f2f2f2"
        h="50px"
        w="100%"
        // pl="1.5rem"
        // position="absolute"
        // top="0"
        // right="0"
        display="flex"
        gap="0.5rem"
        alignItems="center"
        borderBottom="1px solid #aaa"
        // bg={useColorModeValue('#fff', '#000')}
      >
        {cart.totalQuantity > 0 ? (
          <HiShoppingBag fontSize="1.25rem" />
        ) : (
          <HiOutlineShoppingBag fontSize="1.25rem" />
        )}
        <Text as="span" fontSize="1rem" fontWeight="500">
          {cart.totalQuantity > 1
            ? `${cart.totalQuantity} Items`
            : `${cart.totalQuantity} Item`}
        </Text>
        <IconButton
          aria-label="remove-product"
          icon={<HiOutlineTrash />}
          borderRadius="full"
          p="3px"
          ml="3rem"
          h="fit-content"
          minW="fit-content"
          bg="transparent"
          color={useColorModeValue('crimson', 'crimson')}
          fontWeight={600}
          fontSize="1.25rem"
          _focus={{
            outline: 'none'
          }}
          // _hover={{
          //   bg: '#0005',
          //   transform: 'scale(1.2)'
          // }}
          // _active={{
          //   bg: '#0005'
          // }}
          onClick={() => clearCart()}
        />
      </Box>
      {cart.products.length ? (
        <>
          {cart.products.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </>
      ) : (
        <Box p="2rem" mt="2rem" fontWeight={600} bg="green">
          Aun no agregaste ningun producto a tu carrito
        </Box>
      )}
      <Box
        w="100%"
        h="60px"
        position="absolute"
        bottom="0"
        right="0"
        bg={useColorModeValue('#fff', '#000')}
        display="flex"
        justifyContent="center"
        alignItems="center"
        px="50px"
      >
        <Button
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="50px"
          pl="20px"
          pr="5px"
          borderRadius="full"
          bg="#266bf9dd"
          _hover={{
            bg: '#266bf9',
            transform: 'scale(1.01)'
          }}
          _active={{
            bg: '#266bf9'
          }}
        >
          <Text color="#fff">Checkout</Text>
          <Text
            as="span"
            bg="#fff"
            color="#266bf9"
            p="0.65rem"
            borderRadius="full"
          >
            {`$ ${cart.totalAmount.toFixed(2)}`}
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default CartProductList;
