/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Link as ChakraLink,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardIcon from '@assets/icons/DashboardIcon';
import ProductIcon from '@assets/icons/ProductIcon';
import SidebarCategoryIcon from '@assets/icons/SidebarCategoryIcon';
import OrderIcon from '@assets/icons/OrderIcon';
import CustomerIcon from '@assets/icons/CustomerIcon';
import CouponIcon from '@assets/icons/CouponIcon';
import SettingIcon from '@assets/icons/SettingIcon';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const sidebarMenus = [
  {
    name: 'Metricas',
    path: '',
    icon: <DashboardIcon />
  },
  {
    name: 'Productos',
    path: '/products',
    icon: <ProductIcon />
  },
  {
    name: 'Categorias',
    path: '/categories',
    icon: <SidebarCategoryIcon />
  },
  {
    name: 'Pedidos',
    path: '/orders',
    icon: <OrderIcon />
  },
  {
    name: 'Clientes',
    path: '/customers',
    icon: <CustomerIcon />
  },
  {
    name: 'Cupones',
    path: '/siteSettings',
    icon: <CouponIcon />
  },
  {
    name: 'Configuracion',
    path: '/settings',
    icon: <SettingIcon />
  }
];

type NavLinkProps = {
  path: string;
  name: string;
  exact?: boolean;
  icon: ReactJSXElement;
};

const NavLink: React.FC<NavLinkProps> = ({ path, name, exact, icon }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === path : pathname.startsWith(path);

  return (
    <Link href={path} passHref>
      <ChakraLink
        className={useColorModeValue(
          `nav-link-light ${isActive ? 'navlink-active-light' : ''} `,
          `nav-link-dark ${isActive ? 'navlink-active-dark' : ''} `
        )}
        _hover={{ textDecoration: 'none' }}
        textDecoration="none"
        _focus={{
          outline: 'none'
        }}
      >
        <Text
          as="span"
          width="1.3rem"
          height="1.3rem"
          marginRight="1rem"
          display="flex"
          alignItems="center"
          className="icon_navlink"
        >
          {icon}
        </Text>
        <Text
          color={useColorModeValue('#161f6a', 'gray.100')}
          as="span"
          fontSize="lg"
          fontWeight={500}
        >
          {name}
        </Text>
      </ChakraLink>
    </Link>
  );
};
NavLink.defaultProps = {
  exact: false
};
const DashboardSidebar: React.FC = () => (
  <Box
    as="aside"
    width={{ base: '230px', md: '270px' }}
    pl="10px"
    minH="100%"
    display="flex"
    bg={useColorModeValue('white', 'gray.900')}
    flexDirection="column"
    // boxShadow={useColorModeValue('1px 0 3px #0003', '1px 0 2px #fff1')}
  >
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      padding={{ base: '35px 0', lg: '50px 0' }}
      overflowY="auto"
      color={useColorModeValue('gray.800', 'gray.100')}
      className={useColorModeValue('sidebar_light', 'sidebar_dark')}
    >
      {sidebarMenus.map((menu) => (
        <NavLink
          path={`/adminDashboard${menu.path}`}
          icon={menu.icon}
          name={menu.name}
          exact
          key={menu.path + menu.name}
        />
      ))}
    </Box>
  </Box>
);

export default DashboardSidebar;
