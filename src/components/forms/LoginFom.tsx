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

const loginValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required!'),
    password: Yup.string().required('Password is Required!')
  });
};
interface Values {
  email: string;
  password: string;
}
const LoginForm: FC = () => {
  const router = useRouter();
  const auth = useAuth();
  // let from = location.state?.from?.pathname || "/";
  const toast = useToast();

  const handleSubmit = async (values: Values) => {
    try {
      await auth.login(values);
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
        email: '',
        password: ''
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values: Values) => {
        return handleSubmit(values);
      }}
    >
      <Form>
        <Box display="flex" flexDirection="column" gap="1rem">
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
          <CustomButton type="submit">Iniciar Sesion</CustomButton>
        </Box>
      </Form>
    </Formik>
  );
};

export default LoginForm;
