/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
import React, { FC } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { IoOptionsOutline } from 'react-icons/io5';
import CustomDrawer from '@common/CustomDrawer/CustomDrawer';
import Logo from '@common/logo/logo';
import { useAppSelector } from '@Redux/hooks';

const CategoryFilter = () => {
  const categories = useAppSelector((state) => state.categories.categoryList);
  // console.log(categories);

  return (
    <Box display="flex" flexDirection="column" gap="0.5rem">
      <Heading fontSize="1.5rem" pb="1rem">
        Categorias
      </Heading>
      <Box pl="1rem" display="flex" flexDirection="column" gap="0.5rem">
        {categories.map((cat) => (
          <Checkbox
            // type="checkbox"
            key={cat.id}
            _focus={{ outline: 'none', border: 'none', boxShadow: 'none' }}
            _active={{ outline: 'none' }}
          >
            {cat.name}
          </Checkbox>
        ))}
      </Box>
    </Box>
  );
};

const FilterSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoColor = useColorModeValue('#222220', '#ffffff');
  // const categories = useAppSelector((state) => state.categories.categoryList);
  return (
    <Box
      // bg="#aaa"
      minW="250px"
      w={{ base: '100%', xl: '250px' }}
      minH={{ base: 'fit-content', xl: '100vh' }}
      p={{ base: '0.875rem 2rem', xl: '1.25rem 1rem' }}
      boxShadow={{
        base: '0px 1px 3px 0px #aaa6',
        xl: '1px 0px 1px 0px #aaa6'
      }}
    >
      {/* Mobile & desktop < xl */}
      <Button
        display={{ base: 'flex', xl: 'none' }}
        alignItems="center"
        justifyContent="center"
        bg="#f3f4f6f6"
        border="1px solid"
        color="#1f2937"
        borderColor="#e5e7eb"
        borderRadius="5px"
        py="6px"
        px="16px"
        fontWeight={600}
        leftIcon={<IoOptionsOutline fontSize="1.125rem" />}
        onClick={onOpen}
        _focus={{ outline: 'none' }}
      >
        Filtros
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent pt="1rem">
          <DrawerCloseButton
            top="1.6rem"
            _hover={{
              transform: 'rotate(180deg)',
              transitionDuration: '0.6s',
              outline: 'none',
              fontSize: '1rem'
            }}
            _focus={{
              bg: 'transparent',
              outline: 'none'
            }}
          />
          <DrawerHeader>
            <Logo width="170px" color={logoColor} />
          </DrawerHeader>

          <DrawerBody>
            <CategoryFilter />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* desktop xl */}
      <Box
        display={{ base: 'none', xl: 'block' }}
        // bg="#eaa"
        w="100%"
        h="650px"
        position="sticky"
        top="0"
      >
        <CategoryFilter />
      </Box>
    </Box>
  );
};

export default FilterSidebar;
