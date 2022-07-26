import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
// import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React, { FC } from 'react';

interface FormModalProps {
  onClose: () => void;
}
interface ModalProps {
  Form: FC<FormModalProps>;
  // Form: FC;
  // Form: ReactJSXElement;
  isOpen: boolean;
  onClose: () => void;
  closeButton?: boolean;
}

const ModalForm: FC<ModalProps> = ({
  children,
  Form,
  isOpen,
  onClose,
  closeButton,
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
        <Form onClose={onClose} />
        {/* <Form onClose={onClose} /> */}
        {/* {children} */}
      </ModalBody>
    </ModalContent>
  </Modal>
);
ModalForm.defaultProps = {
  closeButton: true
};
export default ModalForm;
