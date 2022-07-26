import {
  Container,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Heading,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';
import ProductCard from '@components/shopCard/ProductCard';
import React, { FC } from 'react';
import { tabsData } from 'services/products/data';

interface CustomTabProps {
  title: string;
}

const CustomTab: FC<CustomTabProps> = ({ title }) => {
  const titleSize = useBreakpointValue({
    base: 'md',
    sm: 'lg'
  });
  return (
    <Tab _focus={{ outline: 'none' }}>
      <Heading
        size={titleSize}
        fontFamily="Roboto"
        color={useColorModeValue('gray.700', 'gray.50')}
      >
        {title}
      </Heading>
    </Tab>
  );
};

const HomeTabs = () => {
  const size = useBreakpointValue({
    base: 4,
    sm: 6,
    md: 6,
    lg: 8,
    xl: 10
  });
  return (
    <Container maxW="1440px" pb="2rem">
      <Tabs size="md" p={0} variant="enclosed" isFitted>
        <TabList mb="1rem" borderColor="gray.400">
          {tabsData.map((tab) => (
            <CustomTab title={tab.title} key={tab.title} />
          ))}
        </TabList>
        <TabPanels>
          {tabsData.map((tab) => {
            const productToShow = tab.products.slice(0, size);
            return (
              <TabPanel m={0} p={0} py={4} key={tab.title}>
                <SimpleGrid
                  columns={[1, 2, 3, 4, 5]}
                  justifyItems="center"
                  spacing={8}
                >
                  {productToShow.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </SimpleGrid>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default HomeTabs;
