import React from 'react';
import { Box } from '@chakra-ui/react';
import DashboardLayout from '@components/Layout/DashboardLayout';
import SettingsCard from '@components/Cards/SettingsCard';

const cards = [
  {
    //   icon: Members,
    title: 'Personal',
    subtitle: 'Manejo y edicion de tu personal',
    linkTo: ''
  },
  {
    //   icon: SiteSettings,
    title: 'Configuracion Del Sitio',
    subtitle: 'Editar y Agregar funcionalidades del sitio',
    linkTo: 'site-settings'
  },
  {
    //   icon: OrderIcon,
    title: 'Añadir Personal',
    subtitle: 'Añadir un nuevo miebro al Staff'
    //   form: StaffMemberForm,
  },
  {
    //   icon: CouponIcon,
    title: 'Agregar Cupones',
    subtitle: 'Agregar cupones de descuento'
  },
  {
    //   icon: SidebarCategoryIcon,
    title: 'Agregar Categorias',
    subtitle: 'Crear una nueva categoria'
    //   form: AddCategoryForm,
  },
  {
    //   icon: ProductIcon,
    title: 'Agregar Productos',
    subtitle: 'Crear un nuevo producto'
    //   form: AddProductForm,
  }
];

const Settings = () => (
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
    {cards?.map(({ title, subtitle }) => (
      <SettingsCard
        key={`${title}_key`}
        // Icon={icon}
        title={title}
        subtitle={subtitle}
        // linkTo={linkTo}
        // form={form}
      />
    ))}
  </Box>
);
Settings.Layout = DashboardLayout;
export default Settings;
