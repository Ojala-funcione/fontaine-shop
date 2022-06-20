/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { FC, ReactElement, useEffect } from 'react';
import DashboardLayout from '@components/Layout/DashboardLayout';
// import CustomTable from '@common/Tables/CustomTable';
// import { CellActions, CellImage } from '@common/Tables/CustomTable/TableCell';
import EditCategoryForm from '@components/forms/EditCategoryForm';
import { useAppDispatch, useAppSelector } from '@Redux/hooks';
import getAllCategories from '@Redux/categories/asyncActions';
// eslint-disable-next-line prettier/prettier
import SectionDashboard, { SectionDashboardHeader } from '@common/sections/SectionDashboard';
import InLineLoader from '@common/InlineLoader/InlineLoader';
import { NextPageWithLayout } from 'pages/_app';

const Categories: NextPageWithLayout = () => {
  const handleDelete = async (id: string, onClose: () => void) => {
    try {
      // console.log('borrado');
      onClose();
    } catch (error) {
      // console.error(error);
    }
  };
  const columns = [
    {
      Header: 'Imagen',
      accessor: 'image',
      // Cell: ({ value }: { value: any }) => <CellImage data={value} />,
      minWidth: 80,
      maxWidth: 100
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      minWidth: 200,
      sort: true
    },
    // {
    //   Header: 'Slug',
    //   accessor: 'slug',
    //   minWidth: 100,
    //   maxWidth: 250,
    // },
    {
      Header: 'Acciones',
      accessor: 'id',
      // Cell: ({ value }: { value: any }) => (
      //   <CellActions
      //     edit={{
      //       Component: EditCategoryForm,
      //       size: 'lg'
      //     }}
      //     onClickDelete={handleDelete}
      //     //   view={{
      //     //     Component: CategoryDetail,
      //     //     size: '2xl'
      //     //   }}
      //     data={value}
      //   />
      // ),
      minWidth: 100,
      maxWidth: 150
    }
  ];
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoryList);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <SectionDashboard>
      <SectionDashboardHeader title="Categorias">
        {/* <Stack direction={['column', 'row']} spacing="24px" p={'.5rem'}>
          <ButtonAdd onClick={onOpen}>Añadir Categoria</ButtonAdd>
          <CustomDrawer Component={AddCategoryForm} onClose={onClose} isOpen={isOpen} />
        </Stack> */}
      </SectionDashboardHeader>
      {categories.length ? (
        // <CustomTable data={categories} columnsConfig={columns} />
        <InLineLoader />
      ) : (
        <InLineLoader />
      )}
    </SectionDashboard>
  );
};
Categories.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Categories;
