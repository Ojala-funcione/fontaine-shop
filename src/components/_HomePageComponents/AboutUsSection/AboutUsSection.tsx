import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Divider,
  useBreakpointValue
} from '@chakra-ui/react';
import React, { FC } from 'react';
import Link from 'next/link';

interface AboutUsSectionInterface {
  title: string;
  description: string;
  imgUrl: string;
  textCallToAction?: string;
  showCallToAction?: boolean;
}

const AboutUsSection: FC<AboutUsSectionInterface> = ({
  title,
  description,
  textCallToAction,
  imgUrl,
  showCallToAction
}) => {
  const borderButtonColor = useColorModeValue('gray.900', 'gray.100');
  const titleSize = useBreakpointValue({
    base: '4xl',
    lg: '5xl'
  });
  return (
    <Container maxW="1440px" py={20} minHeight="600px">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex
          bg=""
          direction="column"
          justify="center"
          p="1rem"
          alignItems="start"
          position="relative"
        >
          <Divider
            my="2rem"
            w="100px"
            borderBottomWidth="5px"
            borderColor={useColorModeValue('blue.500', 'blue.400')}
            opacity={1}
            borderRadius={5}
          />

          <Heading
            fontSize={titleSize}
            fontFamily="Roboto"
            color={useColorModeValue('gray.700', 'gray.50')}
            pb="2rem"
          >
            {title}
          </Heading>
          <Text
            fontSize="1rem"
            width="100%"
            fontFamily="Lato"
            fontWeight={500}
            color={useColorModeValue('gray.500', 'gray.400')}
            pb="1rem"
          >
            {description}
          </Text>
          {showCallToAction && (
            <Link href="/about#about" passHref>
              <Button
                alignSelf="flex-end"
                mt="auto"
                fontSize="1rem"
                fontFamily="Lato"
                fontWeight={700}
                bg="transparent"
                border="1px solid"
                borderColor={borderButtonColor}
                borderRadius="sm"
                _active={{ outline: 'none', bg: 'gray.900', color: '#fff' }}
                _hover={{ bg: 'gray.700', color: '#fff' }}
                _focus={{ outline: 'none' }}
              >
                {textCallToAction}
              </Button>
            </Link>
          )}
        </Flex>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src={imgUrl}
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
AboutUsSection.defaultProps = {
  textCallToAction: '',
  showCallToAction: false
};
export default AboutUsSection;
