import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import ModalForm from '@common/modal/ModalForm';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

interface FormModalProps {
  onClose: () => void;
}
export interface ICardData {
  Icon: ReactJSXElement;
  title: string;
  subtitle: string;
  linkTo?: string;
  form?: FC<FormModalProps>;
}

const SettingsCard = ({ data }: { data: ICardData }) => {
  const { Icon, title, subtitle, linkTo, form } = data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <Box
      display="flex"
      bg={useColorModeValue('#fff', '#171923')}
      boxShadow={useColorModeValue(
        '1px 1px 3px 2px #0003',
        '0px 0px 2px 1px #fff1'
      )}
      cursor="pointer"
      padding="35px 20px"
      height="100%"
      width="100%"
      onClick={
        form ? () => onOpen() : () => router.push(`settings${linkTo || ''}`)
      }
    >
      <Box
        display="flex"
        width="100px"
        justifyContent="center"
        alignItems="center"
        color={useColorModeValue('#4a8cca', '#4a8cca')}
        // m="10px"
      >
        {Icon}
      </Box>
      <Box display="flex" flexDirection="column" lineHeight="1.5">
        <Heading
          m="0 0 5px"
          fontSize="1.5rem"
          color={useColorModeValue('#4a8cca', '#4a8cca')}
          fontWeight="600"
        >
          {title}
        </Heading>
        <Text
          fontSize="0.875rem"
          color={useColorModeValue('#666d92', '#bebebe')}
        >
          {subtitle}
        </Text>
      </Box>
      {form && <ModalForm Form={form} isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
};
export default SettingsCard;

// return (
//   <>
//     {linkTo ? (
//       <Link to={linkTo}>
//         <div className="settings-card">
//           <div className="settings-card__icon">
//             <Icon />
//           </div>
//           <div className="settings-card__content">
//             <h2>{title}</h2>
//             <h4>{subtitle}</h4>
//           </div>
//         </div>
//       </Link>
//     ) : (
//       <div className="settings-card" onClick={click}>
//         <div className="settings-card__icon">
//           <Icon />
//         </div>
//         <div className="settings-card__content">
//           <h2>{title}</h2>
//           <h4>{subtitle}</h4>
//         </div>
//       </div>
//     )}
//   </>
// );
