/* eslint-disable object-curly-newline */
import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

interface DeleleItemMessageProps {
  onClose: () => void;
  onClickDelete: () => void;
}

const DeleleItemMessage: React.FC<DeleleItemMessageProps> = ({
  onClose,
  onClickDelete
}) => (
  <Box
    display="flex"
    gap="0.75rem"
    justifyContent="space-between"
    alignItems="center"
    flexDir="column"
    py={2}
    w="100%"
    h="100%"
  >
    <Box color="#4a8cca" mt={2}>
      <HiOutlineTrash fontSize="2.5rem" />
    </Box>
    <Heading size="md">Delete</Heading>
    <Text fontSize="1rem">¿Está seguro que desea eliminar?</Text>
    <HStack
      mt={5}
      mb={2}
      width="100%"
      display="flex"
      justifyContent="space-between"
    >
      <Button
        bg="#4a8ccadd"
        width="50%"
        color="white"
        _focus={{
          outline: 'none'
        }}
        _hover={{
          bg: '#4a8cca'
        }}
        _active={{
          bg: '#4a8ccaAA'
        }}
        onClick={onClose}
      >
        Cancelar
      </Button>
      <Button
        bg="#dc2626"
        width="50%"
        color="white"
        _focus={{
          outline: 'none'
        }}
        _hover={{
          bg: '#b91c1c'
        }}
        _active={{
          bg: '#b91c1cDD'
        }}
        onClick={onClickDelete}
      >
        Eliminar
      </Button>
    </HStack>
  </Box>
);
export default DeleleItemMessage;
