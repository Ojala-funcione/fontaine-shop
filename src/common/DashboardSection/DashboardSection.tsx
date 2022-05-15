import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

const DashboardSection: FC = ({ children, ...props }) => (
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

export default DashboardSection;
