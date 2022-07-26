/* eslint-disable react/no-array-index-key */
import React, { ReactElement, FC } from 'react';
import {
  Text,
  Flex,
  Container,
  Stack,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Divider
} from '@chakra-ui/react';
import { FaShippingFast } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md';
import { TbDiscount2 } from 'react-icons/tb';
import { useGlobalContext } from '@context/globalContext/globalContext';

interface FeatureProps {
  title: string;
  subtitle?: string;
  subtitleColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  titleColor?: string;
  icon: ReactElement;
}
const Feature: FC<FeatureProps> = ({
  title,
  subtitle,
  icon,
  iconColor,
  titleColor,
  subtitleColor,
  backgroundColor
}) => (
  <Stack
    direction="column"
    align="center"
    bg={backgroundColor}
    w={{ base: '350px', md: '350px', lg: '240px', xl: '300px' }}
    minH="200px"
    p="1.5rem"
    borderRadius="10px"
  >
    <Flex fontSize="4rem" align="center" justify="center" color={iconColor}>
      {icon}
    </Flex>
    <Heading
      fontSize="22px"
      textAlign="center"
      fontFamily="Roboto"
      color={titleColor}
    >
      {title}
    </Heading>
    <Text
      fontWeight={500}
      align="center"
      fontFamily="Roboto"
      color={subtitleColor}
    >
      {subtitle}
    </Text>
  </Stack>
);
Feature.defaultProps = {
  subtitle: '',
  iconColor: '',
  subtitleColor: '#666',
  titleColor: '#444',
  backgroundColor: '#00000011'
};
const FeaturesSection: FC = () => {
  const subtitleColor = useColorModeValue('#666', '#bbb');
  const titleColor = useColorModeValue('#444', '#eee');
  const backgroundColor = useColorModeValue('#00000011', '#00000033');
  const {
    homeActiveSections: { featuresSection }
  } = useGlobalContext();
  const { data } = featuresSection;
  const dataItems = data?.items.map(({ title, subtitle }, index: number) => {
    switch (index) {
      case 0:
        return {
          title,
          subtitle,
          icon: <RiSecurePaymentFill />,
          iconColor: 'blue.400'
        };
      case 1:
        return {
          title,
          subtitle,
          icon: <MdSupportAgent />,
          iconColor: 'green.400'
        };
      case 2:
        return {
          title,
          subtitle,
          icon: <TbDiscount2 />,
          iconColor: 'purple.400'
        };
      case 3:
        return {
          title,
          subtitle,
          icon: <FaShippingFast />,
          iconColor: 'yellow.400'
        };
      default:
        return {};
    }
  });

  return (
    <Container maxW="1440px" px="0" py="4rem">
      <Heading
        size="2xl"
        fontFamily="Roboto"
        color={useColorModeValue('gray.700', 'gray.50')}
        textAlign="center"
        pb="2rem"
      >
        {data!.title}
      </Heading>
      <Divider
        mx="auto"
        w="100px"
        mb="3rem"
        borderColor={useColorModeValue('blue.500', 'blue.400')}
        opacity={1}
        borderBottomWidth="5px"
        borderRadius={5}
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacingY="2rem"
        alignContent="center"
      >
        {dataItems?.map((item, index) => (
          <Flex w="full" justify="center" key={index}>
            <Feature
              icon={item.icon!}
              iconColor={item.iconColor}
              title={item.title!}
              subtitle={item.subtitle}
              subtitleColor={subtitleColor}
              titleColor={titleColor}
              backgroundColor={backgroundColor}
            />
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default FeaturesSection;
