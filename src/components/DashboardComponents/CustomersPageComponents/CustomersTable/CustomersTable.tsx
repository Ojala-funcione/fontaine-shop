/* eslint-disable react/no-unstable-nested-components */
import { Column } from 'react-table';
import React, { FC } from 'react';
import { CellActions, CellAvatar } from '@common/Tables/CustomTable/TableCell';
import CustomTable from '@common/Tables/CustomTable';
import { usersData } from 'services/users/data';
import { IUser } from 'services/users/usersInterfaces';

const CustomersTable: FC = () => {
  const data: IUser[] = usersData;

  const columns: Column<IUser>[] = [
    {
      Header: 'Avatar',
      Cell: ({ row }: { row: any }) => <CellAvatar data={row.original.email} />,
      minWidth: 80,
      maxWidth: 100
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      minWidth: 200
    },
    {
      Header: 'Email',
      accessor: 'email',
      minWidth: 250
    },
    {
      Header: 'Rol',
      accessor: 'role',
      minWidth: 100,
      maxWidth: 150
    },
    {
      Header: 'Acciones',
      accessor: 'uid',
      Cell: ({ value }: { value: any }) => (
        <CellActions
          //   view={{
          //     Component: CustomerDetail,
          //     size: '2xl',
          //   }}
          data={value}
        />
      ),
      minWidth: 80,
      maxWidth: 120
    }
  ];

  return <CustomTable data={data} columns={columns} />;
};
export default CustomersTable;
