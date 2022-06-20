/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line object-curly-newline
import { Box, Button, FormControl, Heading, Stack } from '@chakra-ui/react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  CustomButton,
  CustomInput,
  CustomSelect
} from '@common/CustomInputs/CustomInputs';
import Uploader from './Uploader/Uploader';

/* TODO:
* => comprobar que no haya categorias repetidas para listarlas en el select
* => construir slug si no es especificado a partir del name reemplazando
* los espacios con guiones
* => validar con yup que el string del slug no contenga caracteres invalidos
* => verificar que el nombre de la categoria nueva no exista

*/

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Catetegory Name is Required')
    .max(100, 'Max 100 Characters'),
  slug: Yup.string().required('slug').max(100, 'Max 100 Characters'),
  parent_category: Yup.string().max(100, 'Max 100 Characters'),
  image: Yup.array().min(1).max(5).required()
});
const AddCategoryForm = ({ onClose }: { onClose: () => void }) => {
  // const { GenericToastSuccess, GenericToastError } = Toast();
  const categories = [
    { name: 'cat1', id: 's1' },
    { name: 'cat2', id: 's2' },
    { name: 'cat3', id: 's3' }
  ];
  const handleSubmit = async (values: any) => {
    // console.log('Submit', values);
  };
  return (
    <Box bg="transparent" p="20px">
      <Heading as="h2" my="20px" textAlign="center" size="xl">
        Crear Nueva Categoría
      </Heading>
      <Formik
        initialValues={{
          name: '',
          slug: '',
          parent_category: '',
          image: []
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <Stack mt={4} spacing={6} direction="column">
            <CustomInput id="name" label="Nombre" type="text" name="name" />
            <CustomInput id="slug" label="Slug" type="text" name="slug" />
            <CustomSelect
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
            </CustomSelect>
          </Stack>
          {/* ____________ */}
          <Stack mt={6}>
            <FormControl isRequired>
              <Uploader name="image" maxFiles={1} />
              {/* <ErrorMessage name="image" component="div" className="error" /> */}
            </FormControl>
          </Stack>
          {/* _____________________ */}
          <Stack mt={4} spacing={2} direction="row" align="space-between">
            <Button> a </Button>
            <CustomButton
              type="reset"
              variant="outline"
              colorScheme="red"
              onClick={() => onClose()}
            >
              Cancelar
            </CustomButton>
            <CustomButton type="submit">Añadir</CustomButton>
          </Stack>
          {/* _____________________ */}
        </Form>
      </Formik>
    </Box>
  );
};
export default AddCategoryForm;
