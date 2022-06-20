/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import { useDb } from '../../db/DbProvider';

const EditCategoryForm = ({ itemId }: { itemId: string }) => {
  //   const {
  //     getOneCategory,
  //     updateCategory,
  //     GenericToastSuccess,
  //     GenericToastError
  //   } = useDb();
  const [category, setCategory] = useState();

  // console.log(category, 'soy category');

  //   useEffect(() => {
  //     async function getData(itemId) {
  //       const categoryDetail = await getOneCategory(itemId);
  //       setCategory(categoryDetail);
  //     }
  //     getData(itemId);
  //   }, [itemId]);
  return <div>EditCategoryForm</div>;
};
export default EditCategoryForm;
