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
  IconButton
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@Redux/hooks';
import { ICartProduct, IProduct } from '@Redux/Interfaces';
import {
  addProductCart,
  removeOneProductFromCart,
  removeProductFromCart
} from '@Redux/products/productSlice';

import { FC } from 'react';
import {
  HiMinus,
  HiOutlineShoppingBag,
  HiPlus,
  HiShoppingBag
} from 'react-icons/hi';
import {
  IoIosCloseCircle,
  IoIosCloseCircleOutline,
  IoIosClose
} from 'react-icons/io';

interface ICartItemProps {
  item: ICartProduct;
}
const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const dispatch = useAppDispatch();
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
          onClick={() => dispatch(addProductCart(product))}
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
          onClick={() => dispatch(removeOneProductFromCart(product))}
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
        <Box pl="0.5rem" flex="1">
          {product.name}
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
        color="#fff"
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
        onClick={() => dispatch(removeProductFromCart(product))}
      />
    </Box>
  );
};

const CartProductList: FC = () => {
  const { cartProducts, quantityCart } = useAppSelector(
    (state) => state.products
  );
  return (
    <Box w="100%" h="100%">
      <Box
        h="50px"
        // fontWeight="500"
        // color="#f2f2f2"
        display="flex"
        gap="0.5rem"
        alignItems="center"
        borderBottom="1px solid #aaa"
      >
        {quantityCart > 0 ? (
          <HiShoppingBag fontSize="1.25rem" />
        ) : (
          <HiOutlineShoppingBag fontSize="1.25rem" />
        )}
        <Text as="span" fontSize="1rem" fontWeight="500">
          {quantityCart > 1 ? `${quantityCart} Items` : `${quantityCart} Item`}
        </Text>
      </Box>
      {cartProducts.length ? (
        <>
          {cartProducts.map((item) => (
            <CartItem key={item.product.productId} item={item} />
          ))}
        </>
      ) : (
        <Box p="2rem" mt="2rem" fontWeight={600} bg="green">
          Aun no agregaste ningun producto a tu carrito
        </Box>
      )}
    </Box>
  );
};

export default CartProductList;
