/* eslint-disable react/no-unstable-nested-components */
import { Column } from 'react-table';
import React, { FC } from 'react';
import { CellActions, CellImage } from '@common/Tables/CustomTable/TableCell';
import CustomTable from '@common/Tables/CustomTable';
import EditCategoryForm from '@components/forms/EditCategory/EditCategoryForm';
import { ICategory } from 'services/categories/categoriesInterfaces';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { ICategoriesTableProps } from './interfaces';
import useCategoriesTableController from './CategoriesTable.controller';

const CategoriesTable: FC<ICategoriesTableProps> = (props) => {
  const { useController = useCategoriesTableController, component } = props;
  const controller = useController();

  const columns: Column<ICategory>[] = [
    {
      Header: 'Imagen',
      accessor: 'image',
      Cell: ({ value }: { value: string }) => <CellImage data={value} />,
      minWidth: 80,
      maxWidth: 100,
      disableSortBy: true
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      minWidth: 200
    },
    {
      Header: 'Slug',
      accessor: 'slug',
      minWidth: 100,
      maxWidth: 250
    },
    {
      Header: 'Acciones',
      accessor: 'id',
      Cell: ({ value }: { value: any }) => (
        <CellActions
          edit={{
            Component: EditCategoryForm,
            size: 'lg'
          }}
          onClickDelete={controller.onDeleteButtonPressed}
          view={{
            Component: CategoryDetail,
            size: '2xl'
          }}
          data={value}
        />
      ),
      minWidth: 100,
      maxWidth: 150
    }
  ];

  return (
    <CustomTable
      data={controller.categories}
      columns={columns}
      isLoading={controller.isLoading}
      component={component}
    />
  );
};
export default CategoriesTable;
