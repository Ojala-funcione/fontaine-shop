import { Box } from '@chakra-ui/react';
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import ClientFeedBack from '@components/client feedback/ClientFeedBack';
import WhoWeAre from '@components/whoWeAre/WhoWeAre';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <ScrollToTopButton />
      <Box minH="50vh">Todo el contenido de Home aca</Box>
      <WhoWeAre />
      <ClientFeedBack />
    </>
  );
};
export default Home;
