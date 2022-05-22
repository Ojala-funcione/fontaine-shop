import { useToast } from '@chakra-ui/react';

const Toast = () => {
  const toast = useToast();
  const GenericToastError = (message?: string, description?: string) => {
    toast({
      title: message || 'Ops... Ocurrio un error, Intenta Luego',
      description,
      status: 'error',
      duration: 5000,
      isClosable: true
    });
  };
  const GenericToastSuccess = (message?: string, description?: string) => {
    toast({
      title: message || 'Exito',
      description,
      status: 'success',
      duration: 5000,
      isClosable: true
    });
  };
  return { GenericToastError, GenericToastSuccess };
};
export default Toast;
