import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { FC } from 'react';

interface ModalProps {
  Component: ReactJSXElement;
  isOpen: boolean;
  onClose: () => void;
  closeButton: boolean;
}

const CustomModal: FC<ModalProps> = ({
  children,
  Component,
  isOpen,
  onClose,
  closeButton = true,
  ...props
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    size="2xl"
    scrollBehavior="inside"
    {...props}
  >
    <ModalOverlay />
    <ModalContent>
      {closeButton && (
        <ModalCloseButton
          _hover={{
            transform: 'rotate(180deg)',
            transitionDuration: '0.6s',
            outline: 'none',
            fontSize: '1rem'
          }}
          _focus={{
            bg: 'transparent',
            outline: 'none'
          }}
        />
      )}
      <ModalBody>
        {Component && <Component onClose={onClose} />}
        {children}
      </ModalBody>
    </ModalContent>
  </Modal>
);
export default CustomModal;
