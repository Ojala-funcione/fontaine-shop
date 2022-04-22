/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
import React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import SearchBar from '@common/SearchBar/SearchBar';
// import bgImgSearch from '@assets/img/spa-dark-background.jpg';
// import bgImgSearch from '@assets/img/spa-dark-background.jpg';
// import Image from 'next/image';

const Store = () => (
  <>
    <ScrollToTopButton />
    <Box minH="300vh">
      <Box
        h="370px"
        bgImage="https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/spa-dark-background.jpg?alt=media&token=c31b242e-57e4-42ad-aadc-9897c6170265"
        bgSize="cover"
        bgPosition="center"
      >
        <Box
          bg={useColorModeValue('#FFFFFF55', '#00000055')}
          h="100%"
          w="100%"
          // bg={useColorModeValue('#eaeaea', '#0f0f0f')}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Image src={bgImgSearch} alt="a" /> */}
          <Heading pb="3rem" textTransform="capitalize" textAlign="center">
            Encuentra aquí lo que estas buscando!
          </Heading>
          <Box w={{ base: '95%', sm: '80%', lg: '60%' }}>
            <SearchBar />
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default Store;
