import { Box, Container, IconButton } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import Slider from 'react-slick';
import SliderCard, { SliderCardProps } from './SliderCard';

const settings = {
  dots: false,
  infinite: true,
  speed: 1200,
  slidesToScroll: 3,
  slidesToShow: 4,
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
  swipeToSlide: true,
  variableWidth: true,
  adaptiveHeight: true
};

interface CardSliderProps {
  data: SliderCardProps[];
}

const CardsSlider: FC<CardSliderProps> = ({ data }) => {
  const [slider, setSlider] = useState<Slider | null>(null);
  return (
    <Container maxW="1440px" px={0} py="3vh">
      <Box position="relative" width="100%" display="flex" overflow="hidden">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          w="2px"
          h="calc(100% - 10px)"
          borderRadius="10px 0px 0px 10px"
          aria-label="left-arrow"
          position="absolute"
          // backgroundColor="transparent"
          left="5px"
          top="calc(50% - 5px)"
          transform="translate(0%, -50%)"
          bg="#00000008"
          zIndex={2}
          fontSize="2rem"
          onClick={() => slider?.slickPrev()}
          _hover={{
            bg: '#0004'
          }}
          _active={{
            bg: '#0009'
          }}
          _focus={{
            outline: 'none'
          }}
        >
          <MdArrowLeft />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          h="calc(100% - 10px)"
          borderRadius="0px 10px 10px 0px"
          aria-label="right-arrow"
          position="absolute"
          right="0px"
          top="calc(50% - 5px)"
          transform="translate(0%, -50%)"
          // backgroundColor="transparent"
          bg="#00000008"
          zIndex={2}
          fontSize="2rem"
          onClick={() => slider?.slickNext()}
          _hover={{
            bg: '#0004'
          }}
          _active={{
            bg: '#0009'
          }}
          _focus={{
            outline: 'none'
          }}
        >
          <MdArrowRight />
        </IconButton>

        <Slider
          className="cards-slider"
          {...settings}
          ref={(slide) => setSlider(slide)}
        >
          {data.map((item) => (
            <SliderCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              subTitle={item?.subTitle}
              dataIndex={item.dataIndex}
              fontColor={item.fontColor}
            />
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default CardsSlider;
