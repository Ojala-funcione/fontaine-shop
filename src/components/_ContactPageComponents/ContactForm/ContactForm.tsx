import { Box } from '@chakra-ui/react';
import React from 'react';
import useContactFormController from './ContactForm.controller';
import { IContactFormProps } from './interfaces';

const ContactForm: React.FC<IContactFormProps> = (props) => {
  const { useController = useContactFormController, onClose } = props;
  const controller = useController(onClose);

  return <Box>{/* ContactForm */}</Box>;
};

export default ContactForm;
