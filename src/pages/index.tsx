import { Box } from '@chakra-ui/react';
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <ScrollToTopButton />
    <Box minH="300vh">Todo el contenido de Home aca</Box>
  </>
);
export default Home;
