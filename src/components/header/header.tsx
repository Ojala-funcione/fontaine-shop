import {
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import Logo from '@common/logo/logo';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';
import { useAuth } from '@context/useAuth';
import MenuProfile from '@common/MenuProfile/MenuProfile';
import NavLink from '@common/NavLink/NavLink';
import { useRouter } from 'next/router';
import DarkModeSwitch from '@components/DarkModeSwitch/DarkModeSwitch';

const Header: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();
  console.log('router', router);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      h="80px"
      px="2rem"
      py="1.25rem"
      bg="#fff"
      zIndex={3}
      boxShadow="0 1px 2px rgba(0, 0, 0, 0.06)"
      transition="all 0.3s ease"
    >
      <Box>
        <Logo />
      </Box>
      {/* Searchbar */}
      <Box
        w="60%"
        px="40px"
        display={router.pathname !== '/store' ? 'none' : 'block'}
      >
        <InputGroup>
          <Input
            type="text"
            placeholder="Buscar Productos"
            h="45px"
            bg="#f3f4f6"
            border="none"
            fontSize="0.875rem"
            transition="all 0.3s ease"
            _placeholder={{
              color: '#6b7280'
            }}
            _focus={{
              bg: '#fff',
              outline: '1px solid #51a6f5'
            }}
          />
          <InputLeftElement h="100%">
            <IconButton
              _active={{
                bg: 'transparent'
              }}
              _focus={{
                outline: 'none'
              }}
              _hover={{
                bg: 'transparent',
                color: '#51a6f5'
              }}
              fontSize="1.25rem"
              aria-label="Search Products"
              bg="transparent"
              color="#6b7280"
              onClick={() => {}}
              icon={<IoSearch />}
            />
          </InputLeftElement>
        </InputGroup>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="0.875rem"
      >
        <NavLink exact href="/">
          Home
        </NavLink>
        <NavLink exact href="/store">
          Tienda
        </NavLink>
        <NavLink exact href="/contact">
          Contacto
        </NavLink>
        <DarkModeSwitch display={undefined} />
        {auth.user ? (
          <MenuProfile />
        ) : (
          <Link href="/login" passHref>
            <Button
              ml="1rem"
              bg="#168af7"
              color="#fff"
              fontSize="0.875rem"
              _hover={{ bg: '#51a6f5' }}
              _focus={{
                outline: 'none'
              }}
            >
              Join
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Header;
