/* eslint-disable prettier/prettier */
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { IoCardOutline, IoFilter, IoSearchSharp } from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  // eslint-disable-next-line react/require-default-props
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => (
  <Stack direction="row" align="center">
    <Flex
      w={8}
      h={8}
      align="center"
      justify="center"
      rounded="full"
      bg={iconBg}
    >
      {icon}
    </Flex>
    <Text fontWeight={600}>{text}</Text>
  </Stack>
);

const WhoWeAre = () => (
  <Container maxW="1400px" py={20}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack spacing={4}>
        <Heading
          fontSize={48}
          fontFamily="Work Sans"
          fontWeight="bold"
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          Mas sobre Fontaine
        </Heading>
        <Text
          fontSize={25}
          margin="auto"
          width="100%"
          fontFamily="Inter"
          fontWeight="medium"
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          Somos un e-commerce que trabaja para brindarte la mayor cantidad de
          productos al mejor precio de una manera facil y segura.
        </Text>
        <Stack
          spacing={4}
          divider={(
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          )}
        >
          <Feature
            icon={<Icon as={IoCardOutline} color="yellow.500" w={5} h={5} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text="Pagos rapidos y seguros"
          />
          <Feature
            icon={<Icon as={IoFilter} color="green.500" w={5} h={5} />}
            iconBg={useColorModeValue('green.100', 'green.900')}
            text="Multiples filtros"
          />
          <Feature
            icon={<Icon as={IoSearchSharp} color="purple.500" w={5} h={5} />}
            iconBg={useColorModeValue('purple.100', 'purple.900')}
            text="Buscador de productos"
          />
          <Button
            w="full"
            size="lg"
            bg={useColorModeValue('gray.700', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform="uppercase"
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg'
            }}
            fontFamily="Inter"
            fontWeight={500}
          >
            No te quedes con dudas, queres saber mas?
          </Button>
        </Stack>
      </Stack>
      <Flex>
        <Image
          rounded="md"
          alt="feature image"
          src="https://www.entrepreneurshipinabox.com/wp-content/uploads/Tips-When-Buying-Retail-Return-Stock-For-Your-eCommerce-Business-From-Auction.jpg"
          objectFit="cover"
        />
      </Flex>
    </SimpleGrid>
  </Container>
);

export default WhoWeAre;
