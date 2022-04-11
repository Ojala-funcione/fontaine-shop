import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import {
  CustomButton,
  CustomInput,
  CustomInputPassword
} from '@common/CustomInputs/CustomInputs';
import * as Yup from 'yup';
import { Box, useToast } from '@chakra-ui/react';
import { useAuth } from '@context/useAuth';

import { useRouter } from 'next/router';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Nombre es Requerido')
    .max(100, 'Max 100 Caracteres'),
  lastName: Yup.string()
    .required('Apellido es Requerido')
    .max(100, 'Max 100 Caracteres'),
  email: Yup.string()
    .required('Email es Requerido')
    .email('Invalid Email')
    .max(255, 'Max 255 Caracteres'),
  password: Yup.string()
    .required('Password es Requerida')
    .min(8, 'Min 8 Caracteres')
    .max(32, 'Max 32 Caracteres')
});
interface IValues {
  email: string;
  password: string;
}
const RegisterForm: FC = () => {
  const router = useRouter();
  const auth = useAuth();
  // let from = location.state?.from?.pathname || "/";
  const toast = useToast();

  const handleSubmit = async (values: IValues) => {
    try {
      await auth.signup(values);
      router.push('/');
    } catch (e: any) {
      toast({
        description: e.message,
        status: 'error',
        duration: 9000,
        isClosable: true
      });
      throw new Error(e.message);
    }
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values: IValues) => {
        return handleSubmit(values);
      }}
    >
      <Form>
        <Box display="flex" flexDirection="column" gap="1rem">
          <CustomInput
            id="firstName"
            label="Nombre"
            type="text"
            name="firstName"
            placeholder="Ex: example@fontaine.com"
            autoComplete="username"
          />
          <CustomInput
            id="lastName"
            label="Apellido"
            type="text"
            name="lastName"
            placeholder="Ex: example@fontaine.com"
            autoComplete="username"
          />
          <CustomInput
            id="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Ex: example@fontaine.com"
            autoComplete="username"
          />

          <CustomInputPassword
            id="password"
            label="Password"
            type="password"
            name="password"
            placeholder="********"
            autoComplete="current-password"
          />
          <CustomButton type="submit">Registrarse</CustomButton>
        </Box>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
