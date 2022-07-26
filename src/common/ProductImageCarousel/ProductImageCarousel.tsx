/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import {
  Box,
  IconButton,
  IconButtonProps,
  Image,
  Link,
  useBreakpointValue
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Slider, { Settings } from 'react-slick';

const ArrowLeft: FC<IconButtonProps> = ({ onClick }) => {
  const top = useBreakpointValue({ base: '50%' });
  const side = useBreakpointValue({ base: '0' });
  return (
    <IconButton
      aria-label="left-arrow"
      colorScheme="ghost"
      color="#f1f1f1"
      borderRadius="full"
      position="absolute"
      left={side}
      top={top}
      transform="translate(0%, -50%)"
      zIndex={2}
      onClick={onClick}
      _focus={{
        outline: 'none'
      }}
      _hover={{
        color: '#d1d1d1'
      }}
    >
      <AiOutlineLeft fontSize="32px" />
    </IconButton>
  );
};
const ArrowRight: FC<IconButtonProps> = ({ onClick }) => {
  const top = useBreakpointValue({ base: '50%' });
  const side = useBreakpointValue({ base: '0%' });
  return (
    <IconButton
      aria-label="right-arrow"
      colorScheme="ghost"
      color="#f1f1f1"
      borderRadius="full"
      position="absolute"
      right={side}
      top={top}
      transform="translate(0%, -50%)"
      zIndex={2}
      onClick={onClick}
      _focus={{
        outline: 'none'
      }}
      _hover={{
        color: '#d1d1d1'
      }}
    >
      <AiOutlineRight fontSize="32px" />
    </IconButton>
  );
};
interface IProductImageCarousel {
  images: string[];
}
const ProductImageCarousel: FC<IProductImageCarousel> = ({ images }) => {
  const settings: Settings = {
    customPaging: (i) => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link>
        <Image
          // key={images[i] + i}
          alt=" "
          w="100%"
          maxWidth="100%"
          height="100%"
          maxHeight={{ base: '55px', sm: '75px' }}
          src={images[i]}
        />
      </Link>
    ),
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight aria-label="" />,
    prevArrow: <ArrowLeft aria-label="" />
  };

  return (
    <Box
      m="0 auto"
      pb={{ base: '60px', sm: '75px' }}
      w="100%"
      maxH={{ base: '400px', sm: '500px', md: '500px', lg: '600px' }}
      maxW={{ base: '300px', sm: '400px', md: '400px', lg: '500px' }}
      className="product-image-carousel"
    >
      <Slider {...settings}>
        {images &&
          images.map((image, i) => (
            <Box
              maxH={{ base: '300px', sm: '400px', md: '400px', lg: '500px' }}
              maxW={{ base: '300px', sm: '400px', md: '400px', lg: '500px' }}
              key={image + i}
              // justifyContent="center"
              // alignItems="center"
              // pb="0.5rem"
            >
              <Image
                alt=""
                maxH={{ base: '300px', sm: '400px', md: '400px', lg: '500px' }}
                m="auto"
                maxW={{ base: '300px', sm: '400px', md: '400px', lg: '500px' }}
                objectFit="cover"
                src={image}
              />
            </Box>
          ))}
      </Slider>
    </Box>
  );
};
export default ProductImageCarousel;
