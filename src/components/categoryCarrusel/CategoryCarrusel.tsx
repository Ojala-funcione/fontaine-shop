/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Stack,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import Slider from 'react-slick';

const categories = [
  {
    category: 'TINTURAS',
    subcategory: 'SUPER PROMO EN TINTURAS',
    bg: 'https://img.lovepik.com/photo/40171/8483.jpg_wh860.jpg'
  },
  {
    category: 'CREMAS',
    subcategory: 'MEJORES CREMAS 2022',
    bg: 'https://static.vecteezy.com/system/resources/thumbnails/002/102/483/small/cosmetics-ad-with-beautiful-pink-upholstery-background-free-vector.jpg'
  },
  {
    category: 'SHAMPOO',
    subcategory: 'KIT ANTI STRESS',
    bg: 'https://media.gettyimages.com/photos/set-of-different-makeup-accessories-on-trendy-summer-yellow-cosmetic-picture-id1322172177?s=2048x2048'
  },
  {
    category: 'TINTURAS',
    subcategory: 'SUPER PROMO EN TINTURAS',
    bg: 'https://c.neh.tw/thumb/f/720/378f60a8e60a41d09bd3.jpg'
  },
  {
    category: 'CREMAS',
    subcategory: 'MEJORES CREMAS 2022',
    bg: 'https://static.vecteezy.com/system/resources/thumbnails/002/563/540/small_2x/3d-realistic-natural-beauty-cosmetic-product-for-face-or-body-care-on-glossy-bokeh-background-design-template-of-fashion-cosmetics-product-for-ads-flyer-or-magazine-background-free-vector.jpg'
  },
  {
    category: 'SHAMPOO',
    subcategory: 'KIT ANTI STRESS',
    bg: 'https://c8.alamy.com/comp/JTN4WG/makeup-cosmetics-on-wooden-background-top-view-with-copy-space-JTN4WG.jpg'
  },
  {
    category: 'TINTURAS',
    subcategory: 'SUPER PROMO EN TINTURAS',
    bg: 'https://static.vecteezy.com/system/resources/thumbnails/000/670/332/small/Cosmetic_Banner_1.jpg'
  },
  {
    category: 'CREMAS',
    subcategory: 'MEJORES CREMAS 2022',
    bg: 'https://media.istockphoto.com/vectors/skin-care-cosmetic-vector-id641299334'
  },
  {
    category: 'SHAMPOO',
    subcategory: 'KIT ANTI STRESS',
    bg: 'https://image.shutterstock.com/shutterstock/photos/1322497571/display_1500/stock-vector-cosmetic-package-template-mockup-template-design-with-green-container-green-spray-bottles-with-1322497571.jpg'
  }
];

interface CategoryCardProps {
  category: string;
  image: string;
  subcategory: string;
  key: string;
}

const CategoryCard = (props: CategoryCardProps) => {
  const { category, image, subcategory, key } = props;
  return (
    <Box
      mx={5}
      key={key}
      w="260px"
      h="150px"
      bgSize="cover"
      borderRadius={10}
      border="2px ridge"
      borderColor="#ffffff4d"
      boxShadow="0px 2px 7px 0px rgb(0 0 0 / 67%)"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <Box p={5} as="header">
        <Heading
          color="transparent"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: 'large', sm: '2xl', lg: '3xl' }}
        >
          {category}
        </Heading>
        <Text color="transparent" fontWeight={500} fontSize="large">
          {subcategory}
        </Text>
      </Box>
      <Stack
        width="100%"
        direction="row-reverse"
        padding={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          bg="tranparent"
          color="transparent"
          _hover={{
            transform: 'translateY(-2px)'
          }}
        >
          VER OFERTAS!
        </Button>
      </Stack>
    </Box>
  );
};

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
const CategoryCarrusel = () => {
  const [slider, setSlider] = useState<Slider | null>(null);
  return (
    <Container maxW="1800px" pl={0} py={10} pr={4}>
      <Box position="relative" width="100%">
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
          h="100%"
          borderRadius="10px 0px 0px 10px"
          aria-label="left-arrow"
          position="absolute"
          backgroundColor="transparent"
          left="21px"
          top="50%"
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          _hover={{
            bg: 'transparent'
          }}
        >
          <MdArrowLeft />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          h="100%"
          borderRadius={0}
          aria-label="right-arrow"
          position="absolute"
          right="0px"
          top="50%"
          transform="translate(0%, -50%)"
          backgroundColor="transparent"
          zIndex={2}
          _hover={{
            opacity: '0.8',
            bg: 'black'
          }}
          onClick={() => slider?.slickNext()}
        >
          <MdArrowRight />
        </IconButton>
        {/* <Slider {...settings} ref={(slide) => setSlider(slide)}>
          {categories.map((category) => (
            <CategoryCard
              key={category.category}
              category={category?.category}
              image={category?.bg}
              subcategory={category?.subcategory}
            />
          ))}
        </Slider> */}
      </Box>
    </Container>
  );
};

export default CategoryCarrusel;
