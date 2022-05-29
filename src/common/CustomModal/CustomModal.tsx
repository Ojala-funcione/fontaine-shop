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
  Component?: ReactJSXElement | undefined;
  isOpen: boolean;
  isCentered?: boolean;
  onClose: () => void;
  closeButton?: boolean;
  size?: string;
}

const CustomModal: FC<ModalProps> = ({
  children,
  Component,
  isOpen,
  onClose,
  isCentered,
  closeButton = true,
  size,
  ...props
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    size={size}
    isCentered={isCentered}
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
        {Component && Component}
        {children}
      </ModalBody>
    </ModalContent>
  </Modal>
);
CustomModal.defaultProps = {
  size: '2xl',
  isCentered: false,
  closeButton: true,
  Component: undefined
};
export default CustomModal;
