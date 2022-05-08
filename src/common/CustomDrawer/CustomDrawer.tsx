import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import { FC } from 'react';

interface DrawerProps {
  Component?: any;
  isOpen: boolean;
  onClose: () => any;
  closeButton?: boolean;
  size?: string;
}

const CustomDrawer: FC<DrawerProps> = ({
  children,
  Component,
  isOpen,
  onClose,
  closeButton = true,
  size,
  ...props
}) => (
  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    // scrollBehavior="inside"
    size={size}
    {...props}
  >
    <DrawerOverlay />
    <DrawerContent>
      {closeButton && (
        <DrawerCloseButton
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
      <DrawerBody>
        {/* {Component && <Component onClose={onClose} />} */}
        {Component && <Component />}
        {children}
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
CustomDrawer.defaultProps = {
  size: 'lg',
  Component: false,
  closeButton: true
};
export default CustomDrawer;
