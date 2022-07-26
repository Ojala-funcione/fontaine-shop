/* eslint-disable no-unused-vars */
export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export interface IContactFormController {
  initialValues: IContactForm;
  isLoading: boolean;
  validationSchema: any;
  onSubmitButtonPressed: (values: IContactForm) => void;
  onCancelButtonPressed: () => void;
}
export interface IContactFormProps {
  onClose?: () => void;
  useController?: (onClose?: () => void) => IContactFormController;
}
