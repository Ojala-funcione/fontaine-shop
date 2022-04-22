/* eslint-disable no-unused-vars */
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
import { HiBackspace } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const handleChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
    // searchFunction(e.target.value);
  };
  const handleReset = () => {
    setSearch('');
    // resetFunction();
  };

  return (
    <InputGroup size="md">
      <Input
        borderRadius="50px"
        border="none"
        bg={useColorModeValue('#fafafa77', '#1a1a1a77')}
        _placeholder={{
          color: useColorModeValue('#666666', '#aaaaaa'),
          fontWeight: 600
        }}
        _focus={{ border: '2px solid #51a6f5' }}
        // _focus={{ border: 'none' }}
        placeholder="Buscar..."
        type="text"
        pr="4.5rem"
        value={search}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <InputRightElement width="4.5rem" zIndex={0}>
        <IconButton
          aria-label="search"
          onClick={handleReset}
          variant="ghost"
          outline="none"
          fontSize="1.3rem"
          color={useColorModeValue('#666', '#aaaaaa')}
          _hover={{
            background: 'transparent',
            color: '#51a6f5'
          }}
          _active={{}}
          _focus={{
            background: 'transparent',
            outline: 'none'
          }}
          icon={<HiBackspace />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
