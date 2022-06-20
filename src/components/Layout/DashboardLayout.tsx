/* eslint-disable no-unused-vars */
import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import DashboardHeader from '@components/header/DashboardHeader';
import DashboardSidebar from '@components/sidebar/DashboardSidebar';
import getAllCategories from '@Redux/categories/asyncActions';
import { useAppDispatch } from '@Redux/hooks';
import { getAllProducts } from '@Redux/products/asyncActions';
import React, { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

const DashboardLayout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
    <Box
      // bg={useColorModeValue('gray.100', 'gray.800')}
      bg={useColorModeValue('white', 'gray.800')}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <DashboardHeader onOpenSidebar={onOpen} />
      <Box w="100%" h="100%" display="flex" flex="1">
        <Box minH="100%" display={{ base: 'none', lg: 'block' }}>
          <DashboardSidebar />
        </Box>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent overflowY="auto" maxW="fit-content">
            <DrawerCloseButton _focus={{ outline: 'none' }}>
              <IoArrowBack fontSize="1.5rem" />
            </DrawerCloseButton>
            <DashboardSidebar />
          </DrawerContent>
        </Drawer>
        <Box
          w="100%"
          display="flex"
          p={{ base: '20px 10px', md: '20px' }}
          overflow="hidden"
          overflowY="auto"
          // bg="crimson"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
