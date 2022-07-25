import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';

interface ISectionHeader {
  title: string;
  size?: string;
}
export const SectionDashboardHeader: FC<ISectionHeader> = ({
  children,
  title,
  size,
  ...props
}) => (
  <Box
    bg={useColorModeValue('#fafafa', 'gray.900')}
    minHeight="fit-content"
    padding="10px"
    boxShadow={useColorModeValue(
      '1px 1px 3px 1px #0003',
      '1px 1px 3px 1px #fff1'
    )}
    paddingBottom="2rem"
    {...props}
  >
    <Heading
      p="1rem"
      textAlign="center"
      color={useColorModeValue('#343a40', '#eee')}
      size={size}
    >
      {title}
    </Heading>
    {children}
  </Box>
);
SectionDashboardHeader.defaultProps = {
  size: 'xl'
};

const SectionDashboard: FC = ({ children, ...props }) => (
  <Box
    display="flex"
    flexDirection="column"
    gap="1rem"
    w="100%"
    height="fit-content"
    {...props}
  >
    {children}
  </Box>
);
export default SectionDashboard;
