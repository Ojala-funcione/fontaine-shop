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
  Button,
  Tag,
  HStack,
  IconButton
} from '@chakra-ui/react';
import { IProduct } from '@Redux/Interfaces';
import { FC, useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';

interface ITagProps {
  color?: string;
  bg: string;
  top?: string | undefined;
  left?: string | undefined;
  right?: string | undefined;
  bottom?: string | undefined;
  position?: 'absolute' | 'relative' | undefined;
}
const TagCard: FC<ITagProps> = ({
  children,
  color,
  bg,
  right,
  left,
  top,
  bottom,
  position
}) => (
  <Tag
    color={color}
    bg={bg}
    position={position}
    top={top}
    left={left}
    bottom={bottom}
    right={right}
    // size="xs"
    borderRadius="5px"
    w="fit-content"
    textTransform="uppercase"
    // bg="#EAB308"
    // position="absolute"
    // top="5px"
    // right="5px"
    zIndex="2"
    fontSize={{ base: '0.6rem', sm: '0.875rem' }}
    fontWeight={600}
    minHeight="1rem"
    p={{ base: '3px 4px', sm: '4px 10px' }}
  >
    {children}
  </Tag>
);
TagCard.defaultProps = {
  color: '#fafafa',
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined,
  position: 'relative'
};
const ProductCard = (props: IProduct) => {
  const {
    gallery,
    isOffer,
    isCombo,
    isFeatured,
    isNew,
    discountInPercent,
    name,
    image,
    price,
    salePrice,
    category
  } = props;
  return (
    <Box
      w="100%"
      h={{ base: '160px', sm: '100%' }}
      minW={{ base: '100%', sm: '240px' }}
      maxW={{ base: '100%', sm: '280px' }}
      minH={{ base: '160px', sm: '400px' }}
      borderRadius={{ base: 0, sm: 10 }}
      border={{
        base: 'none',
        sm: useColorModeValue('2px solid #e1e1e1', '1px solid #b1b1b1')
      }}
      borderBottom={{
        base: useColorModeValue('1px solid #e6e6e6', '1px solid #b1b1b1'),
        sm: useColorModeValue('2px solid #e1e1e1', '1px solid #b1b1b1')
      }}
      p={{ base: '10px', sm: '5px' }}
      display="flex"
      flexDirection={{ base: 'row', sm: 'column' }}
      justifyContent="start"
      position="relative"
    >
      {isOffer && (
        <TagCard
          // bg="#EAB308"
          bg="#009f7f"
          // bg="#266bf9"
          right="10px"
          top="10px"
          position="absolute"
        >
          {`- ${discountInPercent} %`}
        </TagCard>
      )}
      <Box
        width={{ base: '140px', sm: '100%' }}
        maxH="242px"
        minW="140px"
        height="100%"
        position="relative"
      >
        <Box
          position="absolute"
          top="5px"
          left="5px"
          display="flex"
          flexDirection="column"
          gap="5px"
          zIndex={1}
        >
          {/* {isFeatured && <TagCard bg="#000">Destacado</TagCard>} */}
          {isNew && <TagCard bg="#266bf9">Nuevo</TagCard>}
          {/* {isCombo && <TagCard bg="#000">Combo</TagCard>} */}
        </Box>
        <Image
          marginInline="auto"
          src={image}
          alt="carousel image"
          backgroundSize="cover"
          // h="100%"
          objectFit="cover"
          h="100%"
          w="100%"
        />
      </Box>
      {/* content */}
      <Box
        p={2}
        paddingBottom={2}
        display="flex"
        flexDirection="column"
        alignItems={{ base: 'start', sm: 'center' }}
        flex="1"
      >
        <Heading
          color={useColorModeValue('#666', '#bbb')}
          fontWeight={500}
          // textTransform="uppercase"
          textTransform="capitalize"
          textAlign={{ base: 'start', sm: 'center' }}
          fontSize={{ base: '14px', sm: '14px' }}
        >
          {category}
        </Heading>
        <Heading
          color={useColorModeValue('#1F2937', 'white')}
          pt={{ base: '0.5rem', sm: '0.75rem' }}
          pb={{ base: '0.75rem', sm: '1rem' }}
          fontWeight={600}
          textTransform="capitalize"
          textAlign={{ base: 'start', sm: 'center' }}
          fontSize={{ base: '1rem', sm: '1rem' }}
        >
          {name}
        </Heading>
        <Box alignItems="end" display="flex" w="100%" flex="1">
          <HStack display="flex" justifyContent="space-between" w="100%">
            <HStack>
              <Text
                color={useColorModeValue('#1F2937', 'white')}
                fontWeight={500}
                fontSize="1rem"
              >
                {`$ ${Math.ceil(salePrice * 100) / 100}`}
              </Text>
              {isOffer && (
                <Text
                  as="del"
                  color="#9ca3af"
                  // color={useColorModeValue('black', 'white')}
                  fontWeight={500}
                  fontSize="0.75rem"
                >
                  {`$ ${Math.ceil(price * 100) / 100}`}
                </Text>
              )}
            </HStack>
            {/* <IconButton
              h="36px"
              w="36px"
              minW="36px"
              bg="transparent"
              border="solid 1px #e1e1e1"
              aria-label="add-product"
              icon={<HiPlus />}
            /> */}
            <Box display="flex" bg="#266bf9" borderRadius="5px">
              <IconButton
                h="36px"
                w="30px"
                minW="30px"
                bg="transparent"
                aria-label="quit-product"
                icon={<HiMinus fontSize="1.15rem" />}
                color="#fff"
                fontWeight={600}
              />
              <Button
                h="36px"
                w="36px"
                minW="36px"
                bg="transparent"
                fontSize="1rem"
                color="#fff"
                fontWeight={600}
              >
                5
              </Button>
              <IconButton
                aria-label="add-product"
                h="36px"
                w="30px"
                minW="30px"
                bg="transparent"
                color="#fff"
                fontWeight={600}
                icon={<HiPlus fontSize="1.15rem" />}
              />
            </Box>
          </HStack>
        </Box>
      </Box>
      {/* <Box w="100%" h="40%" px={2}>
        <Flex w="100%" h="100%" overflow="hidden" pos="relative">
          <Flex h="100%" w="100%" {...carouselStyle}>
            {slides?.map((slide, sid) => (
              <Box
                key={slide.img}
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
          <Box sx={{ ...arrowStyles }} left="0" onClick={prevSlide}>
            &#10094;
          </Box>
          <Box sx={{ ...arrowStyles }} right="0" onClick={nextSlide}>
            &#10095;
          </Box>
        </Flex>
         */}
    </Box>
  );
};

export default ProductCard;

// const arrowStyles = {
//   cursor: 'pointer',
//   position: 'absolute',
//   top: '50%',
//   w: 'auto',
//   mt: '-22px',
//   p: '16px',
//   color: 'white',
//   fontWeight: 'bold',
//   fontSize: '18px',
//   transition: '0.6s ease',
//   borderRadius: '0 3px 3px 0',
//   userSelect: 'none',
//   _hover: {
//     opacity: 0.8,
//     bg: 'black'
//   }
// };

// const [currentSlide, setCurrentSlide] = useState(0);

// const slidesCount = slides?.length;

// const prevSlide = () => {
//   setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
// };
// const nextSlide = () => {
//   setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
// };

// const carouselStyle = {
//   transition: 'all .5s',
//   ml: `-${currentSlide * 100}%`
// };
