import { ReactNode } from 'react';

import {
  Box,
  Container,
  Divider,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react';
import LogoRedondo from '@common/logo/FontaineRedondo';
import { NavLink2 } from '@common/NavLink/NavLink';

const ListHeader = ({ children }: { children: ReactNode }) => (
  <Text
    fontWeight="500"
    fontSize="lg"
    color={useColorModeValue('black', 'white')}
    mb={2}
  >
    {children}
  </Text>
);

const Footer = () => (
  <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}
  >
    <Container as={Stack} maxW="1500px" paddingTop={10} paddingBottom={5}>
      <SimpleGrid
        templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
        spacing={8}
      >
        <Stack spacing={10} align="center">
          <Box>
            <LogoRedondo
              height="150"
              color={useColorModeValue('black', 'white')}
            />
          </Box>
          <SimpleGrid columns={3} spacing="1.25rem">
            <Stack>
              <InstagramLogo size={50} weight="fill" />
            </Stack>
            <Stack>
              <FacebookLogo size={50} weight="fill" />
            </Stack>
            <Stack>
              <WhatsappLogo size={50} weight="fill" />
            </Stack>
          </SimpleGrid>
        </Stack>
        <Stack align="flex-start">
          <ListHeader>Acceso Rapido</ListHeader>
          <NavLink2 exact href="/">
            Home
          </NavLink2>
          <NavLink2 exact href="/login">
            Login / Register
          </NavLink2>
          <NavLink2 exact href="/store">
            Tienda
          </NavLink2>
          <NavLink2 exact href="/contact">
            Contacto
          </NavLink2>
        </Stack>
        <Stack align="flex-start">
          <ListHeader>Links Importantes</ListHeader>
          <Link href="/">Politica de Privacidad</Link>
          <Link href="/">Terminos y Condiciones</Link>
          <Link href="/">Detalle de Envios</Link>
        </Stack>
        <Stack align="flex-start">
          <ListHeader>Descripción</ListHeader>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            eveniet perferendis magni! Nesciunt porro numquam veniam minima sunt
            cumque.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
    <Divider />
    <Container as={Stack} maxW="1300px" py={5}>
      <SimpleGrid columns={[2, null, 2]}>
        <Stack>
          <Text>Copyright 2022 Making It Happen</Text>
        </Stack>

        <Stack>
          <Text alignSelf="end">Powered by Making It Happen</Text>
        </Stack>
      </SimpleGrid>
    </Container>
  </Box>
);
export default Footer;
