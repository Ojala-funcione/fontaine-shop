import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';
import { ErrorMessage, FieldHookConfig, useField } from 'formik';
import { useState, FC } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface ICustomFieldProps {
  label: string;
  name: string;
  isRequired?: boolean;
  // type: string;
  // id: string;
  // autoComplete: string;
}
export const CustomInput: FC<FieldHookConfig<string> & ICustomFieldProps> = ({
  label,
  isRequired,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={meta.touched && !!meta.error}
    >
      <FormLabel
        id={`${props.id}-${props.name}-label`}
        htmlFor={`${props.id}-${props.name}-input`}
      >
        {label}
      </FormLabel>
      <Input
        {...field}
        placeholder={props.placeholder}
        id={`${props.id}-${props.name}-input`}
        bg={useColorModeValue('#EEEEEE', '#2d3748')}
        borderRadius={0}
        border={useColorModeValue('none', '1px solid #eeeeee')}
        _placeholder={{
          color: useColorModeValue('#777777', '#aaaaaa'),
          fontWeight: 600
        }}
        _focus={{
          border: '2px solid #51a6f5'
        }}
      />
      <ErrorMessage name={props.name} component="div" className="error" />
    </FormControl>
  );
};

export const CustomInputPassword: FC<
  FieldHookConfig<string> & ICustomFieldProps
> = ({ label, isRequired, ...props }) => {
  const [show, setShow] = useState(false);
  const [field, meta] = useField(props);
  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={meta.touched && !!meta.error}
    >
      <FormLabel
        id={`${props.id}-${props.name}-label`}
        htmlFor={`${props.id}-${props.name}-input`}
      >
        {label}
      </FormLabel>
      <InputGroup size="md">
        <Input
          {...field}
          placeholder={props.placeholder}
          id={`${props.id}-${props.name}-input`}
          border={useColorModeValue('none', '1px solid #eeeeee')}
          bg={useColorModeValue('#EEEEEE', '#2d3748')}
          color={useColorModeValue('#161f6a', '#bababa')}
          borderRadius={0}
          _placeholder={{ color: '#777', fontWeight: 600 }}
          _focus={{ border: '2px solid #51a6f5' }}
          type={show ? 'text' : 'password'}
        />
        <InputRightElement width="4.5rem">
          <Button
            p={2}
            fontSize="20px"
            color={useColorModeValue('#161f6a', '#bababa')}
            bg="transparent"
            onClick={() => setShow(!show)}
            _focus={{ outline: 'none' }}
            _hover={{ bg: 'transparent', color: '#777' }}
            _active={{ bg: 'transparent', color: '#777' }}
          >
            {show ? <AiFillEyeInvisible /> : <AiFillEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <ErrorMessage name={props.name} component="div" className="error" />
    </FormControl>
  );
};
export const CustomTextarea: FC<
  FieldHookConfig<string> & ICustomFieldProps
> = ({ label, isRequired, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={meta.touched && !!meta.error}
    >
      <FormLabel
        id={`${props.id}-${props.name}-label`}
        htmlFor={`${props.id}-${props.name}-input`}
      >
        {label}
      </FormLabel>
      <Textarea
        {...field}
        placeholder={props.placeholder}
        id={`${props.id}-${props.name}-input`}
        bg={useColorModeValue('#EEEEEE', '#2d3748')}
        borderRadius={0}
        border={useColorModeValue('none', '1px solid #eeeeee')}
        _placeholder={{
          color: useColorModeValue('#777777', '#aaaaaa'),
          fontWeight: 600
        }}
        _focus={{
          border: '2px solid #51a6f5'
        }}
      />
      <ErrorMessage name={props.name} component="div" className="error" />
    </FormControl>
  );
};
export const CustomSelect: FC<FieldHookConfig<string> & ICustomFieldProps> = ({
  label,
  children,
  isRequired,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={meta.touched && !!meta.error}
    >
      <FormLabel
        id={`${props.id}-${props.name}-label`}
        htmlFor={`${props.id}-${props.name}-input`}
      >
        {label}
      </FormLabel>
      <Select
        {...field}
        placeholder={props.placeholder}
        id={`${props.id}-${props.name}-input`}
        bg={useColorModeValue('#EEEEEE', '#2d3748')}
        borderRadius={0}
        border={useColorModeValue('none', '1px solid #eeeeee')}
        color={useColorModeValue('#161f6a', '#bababa')}
        fontWeight={700}
        _focus={{
          border: '2px solid #51a6f5'
        }}
      >
        {children}
      </Select>
      <ErrorMessage name={props.name} component="div" className="error" />
    </FormControl>
  );
};

interface ICustomButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
}
export const CustomButton: FC<ICustomButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    colorScheme="blue"
    borderRadius={3}
    width="100%"
    style={{ marginTop: 15 }}
    _focus={{ outline: 'none' }}
    {...props}
  >
    {children}
  </Button>
);
