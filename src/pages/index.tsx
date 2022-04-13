import { Box } from '@chakra-ui/react';
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import BannerCard from '@components/bannerCard/BannerCard';
import ClientFeedBack from '@components/client feedback/ClientFeedBack';
import WhoWeAre from '@components/whoWeAre/WhoWeAre';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <ScrollToTopButton />
      <Box minH="50vh">Todo el contenido de Home aca</Box>
      <BannerCard />
      <WhoWeAre />
      <ClientFeedBack />
    </>
  );
};
export default Home;
