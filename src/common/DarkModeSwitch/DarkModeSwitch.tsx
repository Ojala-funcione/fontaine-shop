import { useColorMode, Box, IconButton } from '@chakra-ui/react';
import React from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

const DarkModeSwitch = ({ display }: { display?: string }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display={display}>
      <IconButton
        aria-label="darkmode"
        minW={{ base: '30px', md: '40px' }}
        bg="transparent"
        fontSize="1.2rem"
        _active={{ bg: 'transparent' }}
        _hover={{ color: '#3182ce' }}
        _focus={{
          outline: 'none'
        }}
        onClick={toggleColorMode}
        icon={
          colorMode === 'light' ? (
            <BsMoonStarsFill color="#292E1E" />
          ) : (
            <FaSun color="#e9c46a" />
          )
        }
      />
    </Box>
  );
};
DarkModeSwitch.defaultProps = {
  display: 'block'
};
export default DarkModeSwitch;
