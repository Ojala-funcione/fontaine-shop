import {
  Container,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Grid,
  SimpleGrid
} from '@chakra-ui/react';
import ShopCard from '@components/shopCard/ShopCard';
import React from 'react';

const shopCardInfo = [
  {
    id: 1,
    title: 'Café',
    subtitle: 'Café de todos los días',
    bg: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/78997061151791-a34400b2afe1e0b5f415884730389855-1024-1024.jpg',
    price: '$10.00',
    slides: [
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706126892-11-12b30293ea91f71ba915884839746501-640-0.jpg'
      },
      {
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/133/products/kit-nantyr1-1760e8738014a7e68916031381745392-640-0.jpg'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06dbkEwY2RpEDGabYNAr6vkDJtBwSVa_wOg&usqp=CAU'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127219-01-d6b4a50ec2e7aaad6f15884834217736-640-0.jpg'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127226-11-87827174d63e8af71915884846271588-640-0.jpg'
      }
    ],
    discountInPercent: '10%',
    discountPrice: '$9.00',
    isDiscount: true,
    category: 'Café',
    isNew: true,
    isSale: true,
    isFeatured: true,
    isBestSeller: true,
    isOnSale: true
  },
  {
    id: 1,
    title: 'Café',
    subtitle: 'Café de todos los días',
    bg: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/78997061151791-a34400b2afe1e0b5f415884730389855-1024-1024.jpg',
    price: '$10.00',
    slides: [
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706126892-11-12b30293ea91f71ba915884839746501-640-0.jpg'
      },
      {
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/133/products/kit-nantyr1-1760e8738014a7e68916031381745392-640-0.jpg'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06dbkEwY2RpEDGabYNAr6vkDJtBwSVa_wOg&usqp=CAU'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127219-01-d6b4a50ec2e7aaad6f15884834217736-640-0.jpg'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127226-11-87827174d63e8af71915884846271588-640-0.jpg'
      }
    ],
    discountInPercent: '10%',
    discountPrice: '$9.00',
    isDiscount: true,
    category: 'Café',
    isNew: true,
    isSale: true,
    isFeatured: true,
    isBestSeller: true,
    isOnSale: true
  },
  {
    id: 1,
    title: 'Café',
    subtitle: 'Café de todos los días',
    bg: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/78997061151791-a34400b2afe1e0b5f415884730389855-1024-1024.jpg',
    price: '$10.00',
    slides: [
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706126892-11-12b30293ea91f71ba915884839746501-640-0.jpg'
      },
      {
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/133/products/kit-nantyr1-1760e8738014a7e68916031381745392-640-0.jpg'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06dbkEwY2RpEDGabYNAr6vkDJtBwSVa_wOg&usqp=CAU'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127219-01-d6b4a50ec2e7aaad6f15884834217736-640-0.jpg'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127226-11-87827174d63e8af71915884846271588-640-0.jpg'
      }
    ],
    discountInPercent: '10%',
    discountPrice: '$9.00',
    isDiscount: true,
    category: 'Café',
    isNew: true,
    isSale: true,
    isFeatured: true,
    isBestSeller: true,
    isOnSale: true
  },
  {
    id: 1,
    title: 'Café',
    subtitle: 'Café de todos los días',
    bg: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/78997061151791-a34400b2afe1e0b5f415884730389855-1024-1024.jpg',
    price: '$10.00',
    slides: [
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706126892-11-12b30293ea91f71ba915884839746501-640-0.jpg'
      },
      {
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/133/products/kit-nantyr1-1760e8738014a7e68916031381745392-640-0.jpg'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06dbkEwY2RpEDGabYNAr6vkDJtBwSVa_wOg&usqp=CAU'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127219-01-d6b4a50ec2e7aaad6f15884834217736-640-0.jpg'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127226-11-87827174d63e8af71915884846271588-640-0.jpg'
      }
    ],
    discountInPercent: '10%',
    discountPrice: '$9.00',
    isDiscount: true,
    category: 'Café',
    isNew: true,
    isSale: true,
    isFeatured: true,
    isBestSeller: true,
    isOnSale: true
  },
  {
    id: 1,
    title: 'Café',
    subtitle: 'Café de todos los días',
    bg: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/78997061151791-a34400b2afe1e0b5f415884730389855-1024-1024.jpg',
    price: '$10.00',
    slides: [
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706126892-11-12b30293ea91f71ba915884839746501-640-0.jpg'
      },
      {
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/133/products/kit-nantyr1-1760e8738014a7e68916031381745392-640-0.jpg'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06dbkEwY2RpEDGabYNAr6vkDJtBwSVa_wOg&usqp=CAU'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127219-01-d6b4a50ec2e7aaad6f15884834217736-640-0.jpg'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127226-11-87827174d63e8af71915884846271588-640-0.jpg'
      }
    ],
    discountInPercent: '10%',
    discountPrice: '$9.00',
    isDiscount: true,
    category: 'Café',
    isNew: true,
    isSale: true,
    isFeatured: true,
    isBestSeller: true,
    isOnSale: true
  },
  {
    id: 1,
    title: 'Café',
    subtitle: 'Café de todos los días',
    bg: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/78997061151791-a34400b2afe1e0b5f415884730389855-1024-1024.jpg',
    price: '$10.00',
    slides: [
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706126892-11-12b30293ea91f71ba915884839746501-640-0.jpg'
      },
      {
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/133/products/kit-nantyr1-1760e8738014a7e68916031381745392-640-0.jpg'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06dbkEwY2RpEDGabYNAr6vkDJtBwSVa_wOg&usqp=CAU'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127219-01-d6b4a50ec2e7aaad6f15884834217736-640-0.jpg'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127226-11-87827174d63e8af71915884846271588-640-0.jpg'
      }
    ],
    discountInPercent: '10%',
    discountPrice: '$9.00',
    isDiscount: true,
    category: 'Café',
    isNew: true,
    isSale: true,
    isFeatured: true,
    isBestSeller: true,
    isOnSale: true
  },
  {
    id: 1,
    title: 'Café',
    subtitle: 'Café de todos los días',
    bg: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/78997061151791-a34400b2afe1e0b5f415884730389855-1024-1024.jpg',
    price: '$10.00',
    slides: [
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706126892-11-12b30293ea91f71ba915884839746501-640-0.jpg'
      },
      {
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/133/products/kit-nantyr1-1760e8738014a7e68916031381745392-640-0.jpg'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06dbkEwY2RpEDGabYNAr6vkDJtBwSVa_wOg&usqp=CAU'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127219-01-d6b4a50ec2e7aaad6f15884834217736-640-0.jpg'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127226-11-87827174d63e8af71915884846271588-640-0.jpg'
      }
    ],
    discountInPercent: '10%',
    discountPrice: '$9.00',
    isDiscount: true,
    category: 'Café',
    isNew: true,
    isSale: true,
    isFeatured: true,
    isBestSeller: true,
    isOnSale: true
  },
  {
    id: 1,
    title: 'Café',
    subtitle: 'Café de todos los días',
    slides: [
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IzEzicE5Bl9ldos_5zlIwVWJ6UAckY6vVA&usqp=CAU'
      },
      {
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/308/133/products/kit-nantyr1-1760e8738014a7e68916031381745392-640-0.jpg'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06dbkEwY2RpEDGabYNAr6vkDJtBwSVa_wOg&usqp=CAU'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdQMyiugGrjR7qkht5XDvXooZRjnfQvNQVA&usqp=CAU'
      },
      {
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/154/451/products/7899706127226-11-87827174d63e8af71915884846271588-640-0.jpg'
      }
    ],
    price: '$10.00',
    discountInPercent: '10%',
    discountPrice: '$9.00',
    isDiscount: false,
    category: 'Café',
    isNew: true,
    isOnSale: true
  }
];

const HomeTabs = () => {
  return (
    <Container maxW="6xl" py={20}>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Nuevos Productos</Tab>
          <Tab>Ofertas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel m={0} p={0} py={4}>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
              {shopCardInfo.map((product) => {
                return (
                  <ShopCard
                    key={product.id}
                    title={product.title}
                    subtitle={product.subtitle}
                    bg={product.bg}
                    price={product.price}
                    slides={product.slides}
                    discountInPercent={product.discountInPercent}
                    discountPrice={product.discountPrice}
                    isDiscount={product.isDiscount}
                    category={product.category}
                    isNew={product.isNew}
                    isSale={product.isSale}
                    isFeatured={product.isFeatured}
                    isBestSeller={product.isBestSeller}
                    isOnSale={product.isOnSale}
                  />
                );
              })}
            </SimpleGrid>
          </TabPanel>
          <TabPanel m={0} p={0} py={4}>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
              {shopCardInfo.map((product) => {
                return (
                  <ShopCard
                    key={product.id}
                    title={product.title}
                    subtitle={product.subtitle}
                    bg={product.bg}
                    price={product.price}
                    slides={product.slides}
                    discountInPercent={product.discountInPercent}
                    discountPrice={product.discountPrice}
                    isDiscount={product.isDiscount}
                    category={product.category}
                    isNew={product.isNew}
                    isSale={product.isSale}
                    isFeatured={product.isFeatured}
                    isBestSeller={product.isBestSeller}
                    isOnSale={product.isOnSale}
                  />
                );
              })}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default HomeTabs;
