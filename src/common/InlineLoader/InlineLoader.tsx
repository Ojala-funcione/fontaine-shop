import { Box, ChakraProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const Dot = ({ style }: { style: any }) => (
  <Box
    display="inline-block"
    background="#41a1fc"
    height="5px"
    width="5px"
    opacity="0"
    borderRadius="50%"
    margin="0 2px 0 2px"
    animation="animation 1.5s linear infinite"
    style={style}
  />
);
const InLineLoader: FC<ChakraProps> = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100%"
    width="100%"
    padding="5%"
    position="relative"
  >
    <Dot style={{ animationDelay: '.1s' }} />
    <Dot style={{ animationDelay: '.2s' }} />
    <Dot style={{ animationDelay: '.3s' }} />
    <Dot style={{ animationDelay: '.4s' }} />
    <Dot style={{ animationDelay: '.5s' }} />
    <Dot style={{ animationDelay: '.6s' }} />
    <Dot style={{ animationDelay: '.7s' }} />
    <Dot style={{ animationDelay: '.8s' }} />
  </Box>
);
export default InLineLoader;
