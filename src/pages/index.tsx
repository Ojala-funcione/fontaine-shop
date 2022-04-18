import { Box } from '@chakra-ui/react';
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import ClientFeedBack from '@components/client feedback/ClientFeedBack';
import WhoWeAre from '@components/whoWeAre/WhoWeAre';
import type { NextPage } from 'next';
import HomeTabs from '@components/homeTabs/HomeTabs';
import BannerCard from '@components/bannerCard/BannerCard';
import CategoryCarrusel from '@components/categoryCarrusel/CategoryCarrusel';
import BannerSlider from '@components/bannerSlider/BannerSlider';

const Home: NextPage = () => {
  return (
    <>
      <ScrollToTopButton />
      <BannerSlider />
      <CategoryCarrusel />
      <HomeTabs />
      <BannerCard />
      <WhoWeAre />
      <ClientFeedBack />
    </>
  );
};
export default Home;
