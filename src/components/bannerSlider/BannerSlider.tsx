import React, { useEffect, useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { Text, Box, Flex, Image, Container } from '@chakra-ui/react';
import { useGlobalContext } from '@context/globalContext/globalContext';

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
  const {
    homeActiveSections: { heroSection }
  } = useGlobalContext();
  const slides: string[] = heroSection.data!.imgUrl;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;
  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  useEffect(() => {
    setInterval(
      () => setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1)),
      4000
    );
  }, [slidesCount]);

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`
  };
  return (
    <Container py={5} maxW="1440px" mb="40px" px="0">
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="60vh" w="full" {...carouselStyle}>
          {slides.map((slide) => (
            <Box
              key={slide}
              boxSize="full"
              shadow="md"
              flex="none"
              p="0px"
              m="0px"
            >
              <Image
                objectFit="cover"
                src={slide}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
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
    </Container>
  );
};
export default BannerSlider;
