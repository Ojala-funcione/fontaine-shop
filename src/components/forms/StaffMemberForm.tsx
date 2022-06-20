/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import { Box, Heading, Stack } from '@chakra-ui/react';
import {
  CustomButton,
  CustomInput,
  CustomSelect
} from '@common/CustomInputs/CustomInputs';
// import { collection, getDocs, query, where } from 'firebase/firestore';
import { Formik, Form } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

const isValidEmail = async (value?: string) => {
  try {
    if (!value) return false;

    // const docRef = query(collection(db, 'users'), where('email', '==', value));
    // const querySnapshot = await getDocs(docRef);
    // const foundUser = querySnapshot.docs.map((doc) => ({
    //   ...doc.data(),
    //   id: doc.id
    // }));

    // if (foundUser[0]) {
    //   return true;
    // }
    return false;
  } catch (error) {
    // console.log(error);
    return false;
  }
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is Required')
    .max(255, 'Max 255 Characters')
    .test(
      'checkEmailExist',
      'El Email de este usuario no esta registrado',
      (value) => isValidEmail(value)
    ),
  role: Yup.string().required('Select Role')
});

const StaffMemberForm = ({ onClose }: { onClose: () => void }) => {
  // const { roles, getAllRoles, getOneUserByEmail, updateUserByField } = useDb();

  // const navigate = useNavigate();
  const handleSubmit = async (values: any) => {
    // console.log(values);
    // try {
    //   const user = await getOneUserByEmail(values.email);
    //   await updateUserByField(user.id, 'role', values.role);
    //   onClose && onClose();
    //   navigate('/settings/staff');
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // useEffect(() => {
  //   getAllRoles();
  // }, []);
  return (
    <Box bg="transparent" p="20px">
      <Heading as="h2" my="20px" textAlign="center" size="xl">
        Añadir Personal
      </Heading>

      <Formik
        initialValues={{
          email: '',
          role: ''
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <Form>
          <Stack mt={4} spacing={6} direction="column">
            <CustomInput
              id="email"
              label="Email"
              type="email"
              name="email"
              placeholder="Ex: example@fontaine.com"
              autoComplete="username"
            />
            <CustomSelect
              name="role"
              id="role"
              label="Rol"
              placeholder="Seleccionar Rol"
            >
              {/* {roles.length
                  && roles.map((role) => (
                    <option key={role.id}>{role.name}</option>
                  ))} */}
              <option>a</option>
            </CustomSelect>

            {/* _____________________ */}

            <Stack mt={4} spacing={2} direction="row" align="space-between">
              <CustomButton
                type="reset"
                colorScheme="red"
                variant="outline"
                onClick={onClose}
              >
                Cancelar
              </CustomButton>
              <CustomButton type="submit">Añadir</CustomButton>
            </Stack>
          </Stack>
        </Form>
        {/* )} */}
      </Formik>
    </Box>
  );
};
export default StaffMemberForm;
