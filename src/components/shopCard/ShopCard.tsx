/* eslint-disable no-unused-vars */
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Flex,
  Button,
  Container
} from '@chakra-ui/react';
import { useState } from 'react';

interface shopCardProps {
  slides: Array<{ img: string }>;
  isDiscount: boolean;
  discountInPercent: string;
  isNew: boolean;
  title: string;
  subTitle: string;
  price: string;
  discountPrice: string;
  category: string;
}

const ShopCard = (props: shopCardProps) => {
  const {
    slides,
    isDiscount,
    discountInPercent,
    isNew,
    title,
    subTitle,
    price,
    discountPrice
  } = props;

  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black'
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides?.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`
  };

  return (
    <Box
      maxW="210px"
      w="full"
      h="300px"
      borderRadius={10}
      border="2px ridge"
      borderColor="#ffffff4d"
      boxShadow="0px 2px 7px 0px rgb(0 0 0 / 67%)"
      style={{
        background: 'transparent'
      }}
    >
      {/*   <Container
        display="flex"
        w="full"
        p={2}
        alignItems="center"
        justifyContent="center"
      >
        {isDiscount && (
          <Box
            as="span"
            fontWeight={500}
            color="white"
            fontSize={{ base: 'xx-small', sm: 'md', lg: 'lg' }}
            bg="red.500"
            px={2}
            py={1}
            rounded="md"
          >
            {discountInPercent}
          </Box>
        )}
        {isDiscount && (
          <Box
            as="span"
            fontWeight={500}
            color="white"
            fontSize={{ base: 'xx-small', sm: 'md', lg: 'lg' }}
            bg="red.500"
            mx={2}
            px={2}
            py={1}
            rounded="md"
          >
            {isDiscount && 'OFERTA!'}
          </Box>
        )}
        {isNew && (
          <Box
            as="span"
            fontWeight={500}
            color="white"
            fontSize={{ base: 'xx-small', sm: 'md', lg: 'lg' }}
            bg="green.500"
            px={2}
            py={1}
            rounded="md"
          >
            {isNew && 'NUEVO!'}
          </Box>
        )}
      </Container> */}
      <Box w="full" h="40%" mt={5} px={2}>
        <Flex w="full" h="100%" overflow="hidden" pos="relative">
          <Flex h="100%" w="full" {...carouselStyle}>
            {slides?.map((slide, sid) => (
              <Box
                key={slide.img}
                boxSize="100%"
                h="100%"
                w="full"
                shadow="md"
                flex="none"
                overflow="hidden"
              >
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {`${sid + 1}/${slidesCount}`}
                </Text>
                <Image
                  marginInline="auto"
                  src={slide.img}
                  alt="carousel image"
                  backgroundSize="cover"
                  h="100%"
                />
              </Box>
            ))}
          </Flex>
          <Text sx={{ ...arrowStyles }} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text sx={{ ...arrowStyles }} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
        </Flex>
        {/*  <Image
                  objectFit="cover"
                  h="100%"
                  w="100%"
                  src={cardInfo.image[0]}
                  alt="product"
                /> */}
      </Box>
      <Box px={2} paddingBottom={2} as="header">
        <Heading
          color={useColorModeValue('black', 'white')}
          fontWeight={600}
          fontSize={{ base: 'md', sm: 'md', lg: 'lg' }}
        >
          {title}
        </Heading>
        <Text
          color={useColorModeValue('black', 'white')}
          fontWeight={500}
          fontSize={{ base: 'small', sm: 'md', lg: 'lg' }}
        >
          {subTitle}
        </Text>
      </Box>
      <Stack
        isInline
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        p={2}
      >
        {isDiscount ? (
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="xl" color="red.500">
              {discountPrice}
            </Text>
            <Text textDecoration="line-through" color="gray.600">
              {price}
            </Text>
          </Stack>
        ) : (
          <Text fontWeight={800} fontSize="xl">
            {price}
          </Text>
        )}
      </Stack>
      <Stack isInline align="center" justify="center" p={2}>
        <Button
          bg={useColorModeValue('gray.800', 'green.500')}
          variant="solid"
          size="sm"
          px={6}
          color="white"
          _hover={{
            bg: 'green.600'
          }}
        >
          Comprar
        </Button>
      </Stack>
    </Box>
  );
};

export default ShopCard;
