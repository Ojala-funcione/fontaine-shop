import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import React from 'react';

const banner = [
  {
    title: 'TINTURAS',
    subtitle: 'SUPER PROMO EN TINTURAS',
    bg: 'https://images.hdqwalls.com/download/purple-abstract-4k-o5-1680x1050.jpg'
  },
  {
    title: 'CREMAS',
    subtitle: 'MEJORES CREMAS 2022',
    bg: 'https://aquileoparra.com/pacho/wp-content/uploads/2018/01/fondo-banner-azul-2.jpg'
  },
  {
    title: 'SHAMPOO',
    subtitle: 'KIT ANTI STRESS',
    bg: 'https://cap-camion-autobus.com/wp-content/uploads/fondo-banner-ecommerce.png'
  }
];

const BannerCard = () => (
  <Container maxW="1440px" my="3rem" p="0">
    <SimpleGrid columns={[1, 1, 3]} justifyItems="center" spacing={8}>
      {banner.map((cardInfo) => (
        <Box
          key={cardInfo.title}
          minW="250px"
          maxW="500px"
          w="100%"
          h="165px"
          bgSize="cover"
          borderRadius={10}
          border="2px ridge"
          borderColor="#ffffff4d"
          boxShadow="0px 2px 7px 0px rgb(0 0 0 / 67%)"
          style={{
            backgroundImage: `url(${cardInfo.bg})`
          }}
        >
          <Box p={5} as="header">
            <Heading
              color="white"
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'large', sm: '2xl', lg: '3xl' }}
            >
              {cardInfo.title}
            </Heading>
            <Text color="white" fontWeight={500} fontSize="large">
              {cardInfo.subtitle}
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
              color="white"
              _hover={{
                transform: 'translateY(-2px)'
              }}
            >
              VER OFERTAS!
            </Button>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

export default BannerCard;
