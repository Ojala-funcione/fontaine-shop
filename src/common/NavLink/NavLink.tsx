import React from 'react';
import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  exact?: boolean;
};
const NavLink: React.FC<NavLinkProps> = ({
  href,
  exact,
  children,
  ...props
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} passHref>
      <ChakraLink
        color={isActive ? '#168af7' : '#1f2937'}
        fontSize="1rem"
        px="0.25rem"
        fontWeight={500}
        _hover={{ color: '#168af7' }}
        _focus={{
          outline: 'none'
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

NavLink.defaultProps = {
  exact: false
};
export const NavLink2: React.FC<NavLinkProps> = ({
  href,
  exact,
  children,
  ...props
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const normalColor = useColorModeValue('#979a9b', '#979a9b');
  const activeColor = useColorModeValue('#2a2b2c', '#ffffff');

  return (
    <Link href={href} passHref>
      <ChakraLink
        color={isActive ? activeColor : normalColor}
        fontSize="0.875rem"
        px={{ base: '0.5rem', md: '1.5rem' }}
        textTransform="uppercase"
        fontWeight={600}
        _hover={{ color: activeColor }}
        _focus={{
          outline: 'none'
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

NavLink2.defaultProps = {
  exact: false
};

export default NavLink;
