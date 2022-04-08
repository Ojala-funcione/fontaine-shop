import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';
import Logo from '@common/logo/logo';
import LoginForm from '@components/forms/LoginFom';
import { FC } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../auth/AuthProvider';
// import Logo from '../../components/Header/Logo';

// type Props = {
//   children: React.ReactNode;
// };

const Login: FC = () => {
  //   const navigate = useNavigate();
  //   const auth = useAuth();
  //   useEffect(() => {
  //     if (auth.user) {
  //       navigate('/');
  //     }
  //   }, [auth.user]);
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
        <Box d="flex" alignItems="center" flexDirection="column" w="100%">
          <Box m={6}>
            <Logo height="28px" color={useColorModeValue('#222220', '#fafafa')} />
          </Box>

          <Text fontSize="2xl" fontFamily="Work sans" display="block">
            Login
            {/* {subtitle} */}
          </Text>
        </Box>
        <Box w="100%" p={8}>
          {/* {children} */}
          <LoginForm />
        </Box>
      </Container>
    </Container>
  );
};

export default Login;
