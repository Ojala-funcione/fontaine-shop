import React, { useState, FC } from 'react';
import useEditCategoryFormController from './EditCategory.controller';
import { IEditCategoryFormProps } from './interfaces';

const EditCategoryForm: FC<IEditCategoryFormProps> = (props) => {
  const {
    itemId,
    onClose,
    useController = useEditCategoryFormController
  } = props;
  const controller = useController(itemId, onClose);
  console.log(controller.category);

  return <div>EditCategoryForm</div>;
};
export default EditCategoryForm;
