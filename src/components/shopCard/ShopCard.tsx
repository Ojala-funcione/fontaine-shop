import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import { useState } from 'react';

const ShopCard = (props) => {
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

  const slidesCount = props?.slides?.length;

  const prevSlide = () => {
    setCurrentSlide((s) => {
      return s === 0 ? slidesCount - 1 : s - 1;
    });
  };
  const nextSlide = () => {
    setCurrentSlide((s) => {
      return s === slidesCount - 1 ? 0 : s + 1;
    });
  };

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`
  };

  return (
    <Box
      maxW="270px"
      w="270px"
      h="400px"
      borderRadius={10}
      border="2px ridge"
      borderColor="#ffffff4d"
      boxShadow="0px 2px 7px 0px rgb(0 0 0 / 67%)"
      style={{
        background: 'transparent'
      }}
    >
      {props.isDiscount && (
        <Box
          as="span"
          fontWeight={500}
          color="white"
          fontSize="sm"
          bg="red.500"
          m={2}
          px={2}
          py={1}
          position="absolute"
          rounded="md"
        >
          {props.discountInPercent}
        </Box>
      )}
      <Box p={5} as="header">
        <Heading
          mt={5}
          color={useColorModeValue('black', 'white')}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: 'large', sm: '2xl', lg: '3xl' }}
        >
          {props.title}
        </Heading>
        <Text
          color={useColorModeValue('black', 'white')}
          fontWeight={500}
          fontSize="large"
        >
          {props.subtitle}
        </Text>
      </Box>
      <Box w="100%" h="40%" px={2}>
        <Flex w="100%" h="100%" overflow="hidden" pos="relative">
          <Flex h="100%" w="100%" {...carouselStyle}>
            {props?.slides?.map((slide, sid) => {
              return (
                <Box
                  key={`slide-${sid}`}
                  boxSize="100%"
                  h="100%"
                  w="100%"
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
                    {sid + 1}/{slidesCount}
                  </Text>
                  <Image
                    marginInline="auto"
                    src={slide.img}
                    alt="carousel image"
                    backgroundSize="cover"
                    h="100%"
                  />
                </Box>
              );
            })}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
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
      <Stack
        isInline
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        p={2}
      >
        {props.isDiscount ? (
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="xl" color="red.500">
              {props.discountPrice}
            </Text>
            <Text textDecoration="line-through" color="gray.600">
              {props.price}
            </Text>
          </Stack>
        ) : (
          <Text fontWeight={800} fontSize="xl">
            {props.price}
          </Text>
        )}
      </Stack>
      <Stack
        isInline
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        p={2}
      >
        {props.isNew && (
          <Box
            as="span"
            fontWeight={500}
            color="white"
            fontSize="sm"
            bg="red.500"
            px={2}
            py={1}
            rounded="md"
          >
            Nuevo
          </Box>
        )}
        {props.isOnSale && (
          <Box
            as="span"
            fontWeight={500}
            color="white"
            fontSize="sm"
            bg="red.500"
            px={2}
            py={1}
            rounded="md"
          >
            {props.isOnSale && 'En OFERTA!'}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default ShopCard;
