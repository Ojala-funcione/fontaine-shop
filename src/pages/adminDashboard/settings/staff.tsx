import React from 'react';
import { Box } from '@chakra-ui/react';
import DashboardLayout from '@components/Layout/DashboardLayout';

const Staff = () => {
  const handleDelete = async (id: string, onClose: () => void) => {
    try {
      console.log('borrado');
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoryList);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <SectionDashboard>
      <SectionDashboardHeader title="Categorias" />
      {categories.length ? (
        <CustomTable data={categories} columnsConfig={columns} />
      ) : (
        <InLineLoader />
      )}
    </SectionDashboard>
  );
};
Staff.Layout = DashboardLayout;
export default Staff;
