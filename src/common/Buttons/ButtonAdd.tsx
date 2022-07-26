import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BsPlusLg } from 'react-icons/bs';

const ButtonAdd: FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    leftIcon={<BsPlusLg fontSize="20px" />}
    minW="fit-content"
    color={useColorModeValue('#fff', '#1a202c')}
    bg={useColorModeValue('#4a8cca', '#51a6f5')}
    borderRadius={0}
    fontWeight={700}
    _focus={{ outline: 'none' }}
    _hover={{ bg: useColorModeValue('#71b9fc', '#4a8cca') }}
    {...props}
  >
    {children}
  </Button>
);
export default ButtonAdd;
