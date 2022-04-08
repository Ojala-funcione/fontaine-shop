import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import { CustomButton, CustomInput, CustomInputPassword } from '@common/CustomInputs/CustomInputs';
import * as Yup from 'yup';

// import { FormControl, FormLabel } from "@chakra-ui/form-control";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../auth/AuthProvider";
// import { useToast } from "@chakra-ui/react";

const loginValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required!'),
    password: Yup.string().required('Password is Required!'),
  });
};
interface Values {
  email: string;
  password: string;
}
const LoginForm: FC = () => {
  // let navigate = useNavigate();
  // let location = useLocation();
  // let auth = useAuth();
  // let from = location.state?.from?.pathname || "/";
  // const toast = useToast();

  const handleSubmit = async (values: Values) => {
    console.log(values);
    //   try {
    //     await auth.login(values);
    //     navigate(from, { replace: true });
    //   } catch (e) {
    //     toast({
    //       // title: 'Login Error.',
    //       description: e.message,
    //       status: "error",
    //       duration: 9000,
    //       isClosable: true,
    //     });
    //     console.error(e.message);
    //   }
  };
  // return <div>hola</div>;
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values: Values) => {
        return handleSubmit(values);
      }}
    >
      <Form>
        <CustomInput
          id="email"
          label="Email"
          type="email"
          name="email"
          placeholder="Ex: example@fontaine.com"
          autoComplete="username"
        />
        {/* <FormControl isRequired marginBottom={6}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Field
          id="email"
          type="email"
          name="email"
          placeholder="Ex: example@fontaine.com"
          component={CustomInput}
          autoComplete="username"
          />
        </FormControl> */}
        <CustomInputPassword
          id="password"
          label="Password"
          type="password"
          name="password"
          placeholder="********"
          autoComplete="current-password"
        />
        {/* <FormControl isRequired marginBottom={6}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Field
            id="password"
            type="password"
            name="password"
            component={CustomInputPassword}
            placeholder="********"
            autoComplete="current-password"
          />
        </FormControl> */}

        <CustomButton type="submit">Login</CustomButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
