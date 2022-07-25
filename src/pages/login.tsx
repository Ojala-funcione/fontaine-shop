import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';
import Logo from '@common/logo/logo';
import LoginForm from '@components/forms/LoginFom';
import React, { FC, useEffect } from 'react';
import { useAuth } from '@context/useAuth';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login: FC = () => {
  const router = useRouter();
  const auth = useAuth();
  useEffect(() => {
    if (auth.user) {
      router.push('/');
    }
  }, [router, auth]);
  return (
    <Container
      maxW="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue('#efefef', 'transparent')}
      h="100%"
      minH="calc(100vh - 80px)"
    >
      <Container
        maxW="lg"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="lg"
        borderRadius="3px"
        p={6}
      >
        <Box
          d="flex"
          mt={6}
          mb={4}
          alignItems="center"
          flexDirection="column"
          w="100%"
        >
          <Logo width="250" color={useColorModeValue('#222220', '#fafafa')} />
        </Box>
        <Box w="100%" p={8}>
          <LoginForm />
        </Box>
        <Text textAlign="center" fontSize="0.875rem">
          ¿No tienes cuenta?
          <Link href="/register" passHref>
            <Text
              as="span"
              pl="0.5rem"
              fontWeight={500}
              textDecoration="underline"
              cursor="pointer"
              _hover={{ color: '#168af7' }}
            >
              Registrarse
            </Text>
          </Link>
        </Text>
      </Container>
    </Container>
  );
};

export default Login;
