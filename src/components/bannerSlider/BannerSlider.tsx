import React, { useState } from 'react';
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  Container
} from '@chakra-ui/react';

const slides = [
  {
    img: 'https://vannesamakeup.com/wp-content/uploads/2017/03/brand-slider_01.jpg'
  },
  {
    img: 'https://cdn.joburg.co.za/wp-content/uploads/2017/11/11165603/NYX-Corporate-Image-Header-Graffit-featured-image.jpg'
  },
  {
    img: 'https://www.loreal.com/-/media/project/loreal/brand-sites/corp/master/lcorp/4-brands/consumer-products-division/nyx/nyx_blocimage.jpg?rev=89b3daa0ee6c4e70bf300c69b8af18b6&h=670&w=1170&la=en&hash=8EBD38C4E38147E2A835481525CCC458'
  },
  {
    img: 'https://kingsavenuemall.com/wp-content/uploads/2020/12/NYX_2019_LIPLIPLS_Campaign_Layouts2-2.jpg'
  },
  {
    img: 'https://amymhuber.com/wp-content/uploads/2020/06/NYX_ANI_2020_Epic-Wear_Print_FLTC_Table_Wrap_V2-1920x845.jpg'
  }
];

const BannerSlider = () => {
  const arrowStyles = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    pos: 'absolute',
    py: '15%',
    px: '10px',
    w: 'auto',
    h: 'full',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black'
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

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
    <Container py={10} maxW="6xl">
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide) => {
            return (
              <Box key={slide.img} boxSize="full" shadow="md" flex="none">
                <Image
                  objectFit="cover"
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
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
    </Container>
  );
};
export default BannerSlider;
