import { Button, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import CustomDrawer from '@common/CustomDrawer/CustomDrawer';
import CustomModal from '@common/CustomModal/CustomModal';
import DeleleItemMessage from '@components/DeleleItemMessage';
import { HiOutlineTrash, HiEye } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';

export const IconButtonBase = ({ icon, ...props }) => (
  <Button
    _focus={{
      outline: 'none',
      bg: 'transparent'
    }}
    _hover={{
      bg: 'transparent',
      color: '#333'
    }}
    _active={{
      bg: 'transpatent'
    }}
    minW="fit-content"
    h="fit-content"
    color="#666"
    p={0}
    m={0}
    bg="transparent"
    {...props}
  >
    {icon}
  </Button>
);

export const TableButtonDelete = ({ onClick, itemId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButtonBase
        onClick={onOpen}
        _hover={{ color: '#ff3636' }}
        color={useColorModeValue('#ed143daa', '#ed143ddd')}
        icon={<HiOutlineTrash height="1.3rem" />}
      />
      <CustomModal
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeButton={false}
      >
        <DeleleItemMessage
          onClickDelete={() => onClick(itemId, onClose)}
          onClose={onClose}
        />
      </CustomModal>
    </>
  );
};
export const TableButtonEdit = ({ Component, itemId, size }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButtonBase
        onClick={onOpen}
        _hover={{ color: '#168af7' }}
        // _hover={{ color: "#2495ff" }}
        color="#51a6f5"
        icon={<FiEdit height="1.3rem" />}
      />
      <CustomDrawer isOpen={isOpen} onClose={onClose} size={size || 'xl'}>
        <Component
          // onClickDelete={() => onClick(itemId, onClose)}
          itemId={itemId}
          onClose={onClose}
        />
      </CustomDrawer>
    </>
  );
};
export const TableButtonView = ({ onClick, itemId, Component, size }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButtonBase
        onClick={onOpen}
        _hover={{ color: '#168af7' }}
        color="#51a6f5"
        height="1.3rem"
        icon={<HiEye height="1.3rem" />}
      />
      <CustomModal
        size={size || '2xl'}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="outside"
        // closeButton={false}
      >
        <Component
          // onClickDelete={() => onClick(itemId, onClose)}
          itemId={itemId}
          onClose={onClose}
        />
      </CustomModal>
    </>
  );
};
