/* eslint-disable no-unused-vars */
import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import DashboardLayout from '@components/Layout/DashboardLayout';
import SettingsCard, { ICardData } from '@components/Cards/SettingsCard';
import OrderIcon from '@assets/icons/OrderIcon';
import CouponIcon from '@assets/icons/CouponIcon';
import SidebarCategoryIcon from '@assets/icons/SidebarCategoryIcon';
import SiteSettings from '@assets/icons/SiteSettings';
import ProductIcon from '@assets/icons/ProductIcon';
import Members from '@assets/icons/Members';
import AddCategoryForm from '@components/forms/AddCategoryForm';
import StaffMemberForm from '@components/forms/StaffMemberForm';
import AddProductForm from '@components/forms/AddProductForm';
import { NextPageWithLayout } from '../../_app';

const cards: ICardData[] = [
  {
    Icon: <Members width="3.5rem" height="3.5rem" />,
    title: 'Personal',
    subtitle: 'Manejo y edicion de tu personal',
    linkTo: '/staff'
  },
  {
    Icon: <SiteSettings width="3.5rem" height="3.5rem" />,
    title: 'Configuracion Del Sitio',
    subtitle: 'Editar y Agregar funcionalidades del sitio',
    linkTo: '/siteSettings'
  },
  {
    Icon: <OrderIcon width="3.5rem" height="3.5rem" />,
    title: 'Añadir Personal',
    subtitle: 'Añadir un nuevo miebro al Staff',
    form: StaffMemberForm
  },
  {
    Icon: <CouponIcon width="3.5rem" height="3.5rem" />,
    title: 'Agregar Cupones',
    subtitle: 'Agregar cupones de descuento'
  },
  {
    Icon: <SidebarCategoryIcon width="3.5rem" height="3.5rem" />,
    title: 'Agregar Categorias',
    subtitle: 'Crear una nueva categoria',
    form: AddCategoryForm
  },
  {
    Icon: <ProductIcon width="3.5rem" height="3.5rem" />,
    title: 'Agregar Productos',
    subtitle: 'Crear un nuevo producto',
    form: AddProductForm
  }
];

const Settings: NextPageWithLayout = () => (
  <Box
    display="grid"
    gridTemplateColumns={{ base: 'auto', md: '1fr 1fr' }}
    alignContent="start"
    gap={{ base: '1rem', md: '2rem 1rem' }}
    width="100%"
    height="100%"
    padding="3px"
    // bg="green"
  >
    {cards?.map((cardData: ICardData) => (
      <SettingsCard
        data={cardData}
        key={`${cardData.title}_key`}
        // linkTo={linkTo}
        // form={form}
      />
    ))}
  </Box>
);
Settings.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Settings;
