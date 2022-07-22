/* eslint-disable no-unused-vars */
import {
  Box,
  // FormControl,
  Heading,
  Stack
  // useColorModeValue
} from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextarea
} from '@common/CustomInputs/CustomInputs';
// import Uploader from '../Uploader/Uploader';
// import AddVariant from '../AddVariant/AddVariant';
import { ICreateProductFormProps } from './interfaces';
import useCreateProductFormController from './CreateProduct.controller';

/* TODO: dividir el form en steps
 * calculo del precio final de vta cuando hay dto
 * arreglar msjs de error
 * refresh table cuando crea uno nuevo
 */

const CreateProductForm: FC<ICreateProductFormProps> = (props) => {
  const { useController = useCreateProductFormController, onClose } = props;
  const controller = useController(onClose);

  return (
    <Box bg="trasnparent" p="20px" overflow="hidden">
      <Heading as="h2" my="20px" textAlign="center" size="xl">
        Crear Nuevo Producto
      </Heading>
      <Formik
        initialValues={controller.initialValues}
        onSubmit={(values) => controller.onSubmitButtonPressed(values)}
        validationSchema={controller.validationSchema}
      >
        <Form>
          <Stack mt={4} spacing={6} direction="column">
            <CustomInput isRequired id="name" label="Nombre" name="name" />
            <CustomInput isRequired id="brand" label="Marca" name="brand" />
            <CustomTextarea
              id="description"
              label="Descripción"
              name="description"
            />
            <Stack mt={4} spacing={2} direction="row" align="space-between">
              <CustomInput
                isRequired
                id="price"
                type="number"
                label="Precio"
                name="price"
              />
              <CustomInput
                id="discountInPercent"
                type="number"
                label="Descuento %"
                name="discountInPercent"
              />
            </Stack>
            <Stack mt={4} spacing={2} direction="row" align="space-between">
              <CustomSelect
                isRequired
                id="category"
                label="Categoria"
                name="category"
                placeholder="Categorias..."
              >
                {controller.categories.length &&
                  controller.categories.map((category) => (
                    <option key={category.id}>{category.name}</option>
                  ))}
              </CustomSelect>
              <CustomInput isRequired id="sku" label="SKU" name="sku" />
            </Stack>
            <Stack mt={4} spacing={2} direction="row" align="space-between">
              <CustomInput
                isRequired
                type="number"
                id="stock"
                label="Stock"
                name="stock"
              />
              <CustomInput
                isRequired
                type="number"
                id="minStock"
                label="Stock Minimo"
                name="minStock"
              />
            </Stack>

            {/* <FormControl>
              <AddVariant name="variants" /> */}
            {/* <ErrorMessage name="variants" component="div" className="error" /> */}
            {/* </FormControl> */}
            {/* _____________________ */}
            {/* <FormControl isRequired> */}
            {/* <Uploader name="gallery" maxFiles={5} /> */}
            {/* <ErrorMessage name="gallery" component="div" className="error" /> */}
            {/* </FormControl> */}
            {/* _____________________ */}
            <Stack mt={4} spacing={2} direction="row" align="space-between">
              <CustomButton
                type="reset"
                variant="outline"
                colorScheme="red"
                onClick={() => onClose && onClose()}
              >
                Cancelar
              </CustomButton>
              <CustomButton type="submit">Añadir Producto</CustomButton>
            </Stack>
          </Stack>
        </Form>
        {/* )} */}
      </Formik>
    </Box>
  );
};
export default CreateProductForm;
