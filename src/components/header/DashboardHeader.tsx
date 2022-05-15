import {
  Box,
  IconButton,
  useBreakpointValue,
  Link as ChakraLink,
  useColorModeValue
} from '@chakra-ui/react';
import Logo from '@common/logo/logo';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@context/useAuth';
import MenuProfile from '@common/MenuProfile/MenuProfile';
// import { useRouter } from 'next/router';
import { MdMenu, MdOutlineLogin } from 'react-icons/md';
import DarkModeSwitch from '@components/DarkModeSwitch/DarkModeSwitch';

interface IHeaderProps {
  onOpenSidebar: () => void;
}
const DashboardHeader: React.FC<IHeaderProps> = ({ onOpenSidebar }) => {
  const logoWidth = useBreakpointValue({ base: '150px', sm: '200px' });
  const logoColor = useColorModeValue('#222220', '#ffffff');
  const auth = useAuth();
  // const router = useRouter();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={{ base: '1rem', sm: '1rem 2rem' }}
      w="100%"
      bg={useColorModeValue('gray.50', 'gray.900')}
      boxShadow={useColorModeValue(
        '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)',
        '0 1px 3px 0 rgba(250,250,250,0.1),0 1px 2px 0 rgba(250,250,250,0.06)'
      )}
      zIndex={3}
      transition="all 0.3s ease"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        transition="all 0.3s ease"
      >
        <Box
          w={{ base: 'fit-content', sm: '25%', md: '33.3%' }}
          display={{ base: 'flex', lg: 'none' }}
          alignItems="center"
          justifyContent="start"
        >
          <IconButton
            fontSize="1.5rem"
            p="0"
            m="0"
            bg="transparent"
            minH="fit-content"
            minW="fit-content"
            _focus={{ outline: 'none' }}
            _hover={{ color: '#3182ce', bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            // icon={isOpen ? <MdClose /> : <MdMenu />}
            icon={<MdMenu />}
            aria-label="Open Menu"
            display={{ lg: 'none' }}
            onClick={onOpenSidebar}
          />
        </Box>
        <Box
          w={{ base: '50%', md: '33.3%' }}
          display="flex"
          alignItems="center"
          justifyContent={{ base: 'center', lg: 'start' }}
        >
          <Link href="/" passHref>
            <ChakraLink _focus={{ outline: 'none' }}>
              <Logo width={logoWidth} color={logoColor} />
            </ChakraLink>
          </Link>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="end"
          w={{ base: 'fit-content', sm: '25%', md: '33%' }}
        >
          <DarkModeSwitch />
          {auth.user ? (
            <MenuProfile />
          ) : (
            <Link href="/login" passHref>
              <IconButton
                minW={{ base: '30px', md: '40px' }}
                aria-label="login"
                bg="transparent"
                fontSize="1.2rem"
                _active={{ bg: 'transparent' }}
                _hover={{ color: '#3182ce' }}
                _focus={{
                  outline: 'none'
                }}
              >
                <MdOutlineLogin />
              </IconButton>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
