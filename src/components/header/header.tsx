// /* eslint-disable no-unused-vars */
import {
  Box,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  Link as ChakraLink,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import Logo from '@common/logo/logo';
import React from 'react';
// import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';
import { useAuth } from '@context/useAuth';
import MenuProfile from '@common/MenuProfile/MenuProfile';
import { NavLink2 } from '@common/NavLink/NavLink';
// import { useRouter } from 'next/router';
import { MdClose, MdMenu, MdOutlineLogin } from 'react-icons/md';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import DarkModeSwitch from '@components/DarkModeSwitch/DarkModeSwitch';

const Links = [
  { href: '/', name: 'Home' },
  { href: '/store', name: 'Tienda' },
  { href: '/contact', name: 'Contacto' }
];

const Header: React.FC = () => {
  const logoWidth = useBreakpointValue({ base: '150px', sm: '170px' });
  const logoColor = useColorModeValue('#222220', '#ffffff');
  const auth = useAuth();
  // const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      px={{ base: '0.5rem', sm: '1rem', md: '2rem' }}
      zIndex={3}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={useColorModeValue(
        '0 1px 2px rgba(0, 0, 0, 0.06)',
        '0 1px 2px rgba(0, 0, 0, 0.46)'
      )}
      transition="all 0.3s ease"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        h={{ base: '80px', sm: '90px' }}
        py={{ base: '0', sm: '1.25rem' }}
        w="100%"
        transition="all 0.3s ease"
      >
        <Box
          w={{ base: 'fit-content', sm: '25%', md: '33.3%' }}
          display={{ base: 'flex', lg: 'none' }}
          alignItems="center"
          justifyContent="start"
          // bg="#110000"
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
            icon={isOpen ? <MdClose /> : <MdMenu />}
            aria-label="Open Menu"
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
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
          h="100%"
          w="33.3%"
          display={{ base: 'none', lg: 'flex' }}
          alignItems="center"
          justifyContent="center"
        >
          {Links?.map((link) => (
            <NavLink2 key={link.href + link.name} exact href={link.href}>
              {link.name}
            </NavLink2>
          ))}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="end"
          w={{ base: 'fit-content', sm: '25%', md: '33%' }}
        >
          {/* {router.pathname.includes('/store') ? (
            <IconButton
              aria-label="searchbar"
              minW={{ base: '30px', md: '40px' }}
              bg="transparent"
              fontSize="1.2rem"
              _active={{ bg: 'transparent' }}
              _hover={{ color: '#3182ce' }}
              _focus={{
                outline: 'none'
              }}
            >
              <IoSearch />
            </IconButton>
          ) : (
            <> </>
          )} */}
          <DarkModeSwitch />
          <IconButton
            minW={{ base: '30px', md: '40px' }}
            aria-label="cart"
            bg="transparent"
            fontSize="1.2rem"
            // _hover={{ color: '#51a6f5' }}
            _active={{ bg: 'transparent' }}
            _hover={{ color: '#3182ce' }}
            _focus={{
              outline: 'none'
            }}
          >
            <HiOutlineShoppingBag />
          </IconButton>
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
      {isOpen ? (
        <Box pb={4} display={{ lg: 'none' }} transition="all 3s ease">
          <Stack
            as="nav"
            spacing={4}
            textAlign="center"
            transition="all 3s ease"
          >
            {Links?.map((link) => (
              <Text
                key={link.href + link.name}
                as="span"
                w="100%"
                lineHeight="2"
                _hover={{
                  bg: '#f2f2f2'
                }}
                cursor="pointer"
                onClick={onClose}
              >
                <NavLink2 exact href={link.href}>
                  {link.name}
                </NavLink2>
              </Text>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
