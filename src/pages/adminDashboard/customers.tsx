/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, { ReactElement, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import DashboardLayout from '@components/Layout/DashboardLayout';
// import { CellActions, CellAvatar } from '@common/Tables/CustomTable/TableCell';
// eslint-disable-next-line prettier/prettier
import SectionDashboard, { SectionDashboardHeader } from '@common/sections/SectionDashboard';
import { useAppDispatch, useAppSelector } from '@Redux/hooks';
// import CustomTable from '@common/Tables/CustomTable';
import InLineLoader from '@common/InlineLoader/InlineLoader';
import { NextPageWithLayout } from '../_app';

const Customers: NextPageWithLayout = () => {
  const columns = [
    {
      Header: 'Avatar',
      // Cell: ({ row }: { row: any }) => <CellAvatar data={row.original.email} />,
      minWidth: 80,
      maxWidth: 100
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      sort: true,
      minWidth: 200
    },
    {
      Header: 'Email',
      accessor: 'email',
      sort: true,
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
      accessor: 'id',
      // Cell: ({ value }: { value: any }) => (
      //   <CellActions
      //     //   view={{
      //     //     Component: CustomerDetail,
      //     //     size: '2xl',
      //     //   }}
      //     data={value}
      //   />
      // ),
      minWidth: 80,
      maxWidth: 120
    }
  ];

  const dispatch = useAppDispatch();
  const customers = useAppSelector((state) => state.categories.categoryList);
  useEffect(() => {
    // dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <SectionDashboard>
      <SectionDashboardHeader title="Categorias" />
      {customers.length ? (
        // <CustomTable data={customers} columnsConfig={columns} />
        <InLineLoader />
      ) : (
        <InLineLoader />
      )}
    </SectionDashboard>
  );
};
Customers.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Customers;
