/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line object-curly-newline
import { Box, Button, FormControl, Heading, Stack } from '@chakra-ui/react';
import { Formik, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import {
  CustomButton,
  CustomInput,
  CustomSelect
} from '@common/CustomInputs/CustomInputs';
import { FC } from 'react';
import Uploader from '../Uploader/Uploader';
import { ICreateCategoryFormProps } from './interfaces';
import useCreateCategoryFormController from './CreateCategory.controller';

/* TODO:
* => comprobar que no haya categorias repetidas para listarlas en el select
* => construir slug si no es especificado a partir del name reemplazando
* los espacios con guiones
* => validar con yup que el string del slug no contenga caracteres invalidos
* => verificar que el nombre de la categoria nueva no exista
* => mejorar la validacion de errores y mostrar los msjs

*/

const CreateCategoryForm: FC<ICreateCategoryFormProps> = (props) => {
  // const { GenericToastSuccess, GenericToastError } = Toast();
  const { useController = useCreateCategoryFormController, onClose } = props;
  const controller = useController(onClose);

  return (
    <Box bg="transparent" p="20px">
      <Heading as="h2" my="20px" textAlign="center" size="xl">
        Crear Nueva Categoría
      </Heading>
      <Formik
        initialValues={controller.initialValues}
        validationSchema={controller.validationSchema}
        onSubmit={(values) => controller.onSubmitButtonPressed(values)}
      >
        <Form>
          <Stack mt={4} spacing={6} direction="column">
            <CustomInput id="name" label="Nombre" type="text" name="name" />
            <CustomInput id="slug" label="Slug" type="text" name="slug" />
            {/* <CustomSelect
              id="parent_category"
              label="Categoría Padre"
              type="text"
              name="parent_category"
              placeholder="Seleccionar"
            >
              {categories.length &&
                categories?.map((cat) => (
                  <option id={cat.id} value={cat.name} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
            </CustomSelect> */}
          </Stack>
          {/* ____________ */}
          {/* <Stack mt={6}>
            <FormControl isRequired>
              <Uploader name="image" maxFiles={1} /> */}
          {/* <ErrorMessage name="image" component="div" className="error" /> */}
          {/* </FormControl>
          </Stack> */}
          {/* _____________________ */}
          <Stack mt={4} spacing={2} direction="row" align="space-between">
            <CustomButton
              type="reset"
              variant="outline"
              colorScheme="red"
              onClick={controller.onCancelButtonPressed}
            >
              Cancelar
            </CustomButton>
            <CustomButton isLoading={controller.isLoading} type="submit">
              Añadir
            </CustomButton>
          </Stack>
          {/* _____________________ */}
        </Form>
      </Formik>
    </Box>
  );
};
export default CreateCategoryForm;
