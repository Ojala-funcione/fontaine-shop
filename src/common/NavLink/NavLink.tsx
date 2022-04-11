import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
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

export default NavLink;
