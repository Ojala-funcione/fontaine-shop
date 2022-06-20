/* eslint-disable no-unused-vars */
import {
  Box,
  FormControl,
  Heading,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FC, useEffect } from 'react';
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextarea
} from '@common/CustomInputs/CustomInputs';
import Uploader from './Uploader/Uploader';
import AddVariant from './AddVariant/AddVariant';
// import { useNavigate } from 'react-router-dom';
// import {
//   CustomButton,
//   CustomInput,
//   CustomSelect,
//   CustomTextarea
// } from './CustomInputs/CustomInputs';
// import { useDb } from '../../db/DbProvider';
// import { Uploader } from './Uploader/Uploader';
// import { AddVariant } from './AddVariant/AddVariant';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is Required')
    .max(255, 'Max 255 Characters'),
  brand: Yup.string().max(255, 'Max 255 Characters'),
  description: Yup.string().max(2000, 'Max 2000 Characters'),
  price: Yup.number().required().min(0, 'the price should be higher zero'),
  stock: Yup.number().required().min(0, 'the stock should be higher zero'),
  minStock: Yup.number()
    .required()
    .min(0, 'the min stock should be higher zero'),
  category: Yup.string().required().min(0, 'Select a category'),
  gallery: Yup.array().min(1).max(5).required(),
  discountInPercent: Yup.number()
    .min(0, 'The discount should be higher zero')
    .max(100, 'The discount should be lower one hundred'),

  sku: Yup.string()
});

const AddProductForm = ({ onClose }: { onClose: () => void }) => {
  // const {
  //   GenericToastSuccess,
  //   GenericToastError,
  //   onUpload,
  //   addProduct,
  //   getAllCategories,
  //   categories
  // } = useDb();
  // const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    const gallery: any[] = [];
    try {
      // for (const item of values.gallery) {
      //   const url = await onUpload('products/', item);
      //   gallery.push(url);
      // }
      // const discountInPercent
      //   = values.discountInPercent === '' ? 0 : values.discountInPercent;
      // const salePrice
      //   = values.price - (values.price * values.discountInPercent) / 100;
      // const res = await addProduct({
      //   ...values,
      //   gallery,
      //   image: gallery[0],
      //   salePrice,
      //   discountInPercent
      // });
      // res
      //   ? GenericToastSuccess(res)
      //   : GenericToastError('Error Al Crear.', 'Intenta nuevamente mas tarde');
      // onClose && onClose();
      // navigate('/products');
      // console.log(values);
    } catch (error) {
      // console.error(error);
      // GenericToastError('Error Al Crear.', 'Intenta nuevamente mas tarde');
    }
  };
  // useEffect(() => {
  //   getAllCategories();
  // }, []);

  return (
    <Box bg="trasnparent" p="20px" overflow="hidden">
      <Heading as="h2" my="20px" textAlign="center" size="xl">
        Crear Nuevo Producto
      </Heading>
      <Formik
        initialValues={{
          name: '',
          brand: '',
          description: '',
          price: '',
          category: '',
          gallery: [],
          discountInPercent: '',
          stock: '',
          minStock: '',
          sku: '',
          variants: ''
        }}
        onSubmit={(values) => handleSubmit(values)}
        // onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Form>
          <Stack mt={4} spacing={6} direction="column">
            <CustomInput isRequired id="name" label="Nombre" name="name" />
            <CustomInput id="brand" label="Marca" name="brand" />
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
                {/* {categories.length &&
                categories.map((category) => (
                  <option key={category.id}>{category.name}</option>
                ))} */}
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

            <FormControl>
              <AddVariant name="variants" />
              <ErrorMessage name="variants" component="div" className="error" />
            </FormControl>
            {/* _____________________ */}
            {/* <FormControl isRequired> */}
            <Uploader name="gallery" maxFiles={5} />
            <ErrorMessage name="gallery" component="div" className="error" />
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
export default AddProductForm;
