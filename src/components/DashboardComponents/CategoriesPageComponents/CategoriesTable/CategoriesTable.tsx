/* eslint-disable react/no-unstable-nested-components */
import { Column } from 'react-table';
import { FC } from 'react';
import { CellActions, CellImage } from '@common/Tables/CustomTable/TableCell';
import CustomTable from '@common/Tables/CustomTable';
import EditCategoryForm from '@components/forms/EditCategoryForm';
import categoriesData from 'services/categories/data';
import { ICategory } from 'services/interfaces';

const CategoriesTable: FC = () => {
  const handleDelete = async (id: string, onClose: () => void) => {
    try {
      // console.log('borrado');
      onClose();
    } catch (error) {
      // console.error(error);
    }
  };
  const data: ICategory[] = categoriesData;

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
    // {
    //   Header: 'Slug',
    //   accessor: 'slug',
    //   minWidth: 100,
    //   maxWidth: 250,
    // },
    {
      Header: 'Acciones',
      accessor: 'id',
      Cell: ({ value }: { value: any }) => (
        <CellActions
          edit={{
            Component: EditCategoryForm,
            size: 'lg'
          }}
          onClickDelete={handleDelete}
          //   view={{
          //     Component: CategoryDetail,
          //     size: '2xl'
          //   }}
          data={value}
        />
      ),
      minWidth: 100,
      maxWidth: 150
    }
  ];

  return <CustomTable data={data} columns={columns} />;
};
export default CategoriesTable;
