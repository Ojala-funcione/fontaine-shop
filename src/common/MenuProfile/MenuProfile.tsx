import {
  Box,
  Button,
  Divider,
  Heading,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue
  // useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiUserSettingsFill } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useAuth } from '@context/useAuth';
import Gravatar from 'react-gravatar';

const MenuProfile: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout = async () => {
    try {
      await auth.logout();
      router.push('/login');
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        p={0}
        borderRadius="100"
        bg="transparent"
        _focus={{ outline: 'none' }}
        color="#b4b4b4"
      >
        <Box
          border="2px solid #aaa8"
          borderRadius="full"
          overflow="hidden"
          bg={useColorModeValue('white', 'gray.800')}
        >
          <Gravatar email={auth.user?.email} size={40} />
        </Box>
      </MenuButton>
      <MenuList
        bg={useColorModeValue('#fafafa', '#2d3748')}
        boxShadow={useColorModeValue(
          '1px 1px 3px 1px #0003',
          '0px 0px 2px 0px #e9e9e933'
        )}
      >
        <Box py={6} display="flex" flexDirection="column" w="100%" rounded="md">
          <Box
            alignSelf="center"
            border="2px solid #aaa8"
            borderRadius="full"
            overflow="hidden"
            bg={useColorModeValue('white', 'gray.800')}
          >
            <Gravatar email={auth.user?.email} size={100} />
          </Box>

          <Stack spacing={0} align="center" p={6} pb={2}>
            <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
              {auth.user.email}
            </Heading>
            <Text color="gray.500">{auth.user.role}</Text>
          </Stack>
        </Box>
        <Divider mb={5} />
        <MenuGroup>
          <MenuItem
            _hover={useColorModeValue({ bg: '#fafafa' }, { bg: '#292e37' })}
            _focus={{ bg: 'transparent' }}
            icon={<RiUserSettingsFill fontSize="1.2rem" />}
            // onClick={onOpen}
          >
            Editar Perfil
          </MenuItem>
          <MenuItem
            icon={<MdOutlineLogout fontSize="1.2rem" />}
            onClick={handleLogout}
            _hover={useColorModeValue({ bg: '#fafafa' }, { bg: '#292e37' })}
            _focus={{ bg: 'transparent' }}
          >
            Cerrar Sesión
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default MenuProfile;
