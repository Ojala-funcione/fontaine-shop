/* eslint-disable no-unused-vars */
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@components/Layout/DashboardLayout';
import DashboardSection from '@common/DashboardSection/DashboardSection';

const AdminDashboard = () => {
  //   const { getAllProducts, getAllCustomers } = useDb();

  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  //   useEffect(() => {
  //     async function getData() {
  //       const customers = await getAllCustomers();
  //       const products = await getAllProducts();
  //       setCustomers(customers);
  //       setProducts(products);
  //     }
  //     getData();
  //   }, []);

  return (
    <Container maxW="8xl" centerContent>
      <DashboardSection>
        <SimpleGrid columns={[2, 2, 2, 4]} spacing={5} p={5}>
          <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius={5}
            boxShadow="dark-md"
            p={5}
            width="100%"
            height="150px"
            bg={useColorModeValue('green.500', 'green.500')}
          >
            <Text
              fontSize={['md', 'lg', 'xl']}
              fontWeight={500}
              textAlign="center"
            >
              TOTAL DE CLIENTES
            </Text>
            <Text fontSize="5xl" fontWeight={500} textAlign="center">
              {customers?.length}
            </Text>
          </Box>
          <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius={5}
            boxShadow="dark-md"
            p={5}
            width="100%"
            height="150px"
            bg={useColorModeValue('red.500', 'red.500')}
          >
            <Text
              fontSize={['md', 'lg', 'xl']}
              fontWeight={500}
              textAlign="center"
            >
              VENTAS MENSUALES
            </Text>
          </Box>
          <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius={5}
            boxShadow="dark-md"
            p={5}
            width="100%"
            height="150px"
            bg={useColorModeValue('blue.500', 'blue.500')}
          >
            <Text
              fontSize={['md', 'lg', 'xl']}
              fontWeight={500}
              textAlign="center"
            >
              DEVO. MENUSAL
            </Text>
          </Box>
          <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius={5}
            boxShadow="dark-md"
            p={5}
            width="100%"
            height="150px"
            bg={useColorModeValue('yellow.500', 'yellow.500')}
          >
            <Text
              fontSize={['md', 'lg', 'xl']}
              fontWeight={500}
              textAlign="center"
            >
              CANT. PRODUCTOS
            </Text>
            <Text fontSize="5xl" fontWeight={500} textAlign="center">
              {products?.length}
            </Text>
          </Box>
        </SimpleGrid>
      </DashboardSection>
    </Container>
  );
};
AdminDashboard.Layout = DashboardLayout;
export default AdminDashboard;
