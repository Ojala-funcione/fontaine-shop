/* eslint-disable no-unused-vars */
import React, { ReactElement } from "react";
import DashboardLayout from "@components/Layout/DashboardLayout";
import SectionDashboard, {
  SectionDashboardHeader,
} from "@common/sections/SectionDashboard";
import CustomersTable from "@components/DashboardComponents/CustomersPageComponents/CustomersTable/CustomersTable";
import { NextPageWithLayout } from "../../_app";

const Staff: NextPageWithLayout = () => {
  const handleDelete = async (id: string, onClose: () => void) => {
    try {
      // console.log('borrado');
      onClose();
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <SectionDashboard>
      <SectionDashboardHeader title="Personal" />
      <CustomersTable />
    </SectionDashboard>
  );
};
Staff.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Staff;
