/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import ClientFeedBack from '@components/client feedback/ClientFeedBack';
import WhoWeAre from '@components/whoWeAre/WhoWeAre';
import type { NextPage } from 'next';
import HomeTabs from '@components/homeTabs/HomeTabs';
import BannerCard from '@components/bannerCard/BannerCard';
import CategoryCarrusel from '@components/categoryCarrusel/CategoryCarrusel';
import BannerSlider from '@components/bannerSlider/BannerSlider';
import { motion, useAnimation } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useGlobalContext } from '@context/globalContext/globalContext';
// import BaseProvider from '@context/baseContext/baseContextProvider';
// import { useBaseContext } from '@context/baseContext/baseContext';

const ChakraMouse = chakra(motion.div);
const Chakraclient = chakra(motion.div);

const Home: NextPage = () => {
  const { homeActiveSections } = useGlobalContext();
  const {
    heroSection,
    productTabsSection,
    categorySliderSection,
    bannerCardSection,
    aboutUsSection,
    feedbackSection
  } = homeActiveSections;

  const { ref: ref1, inView: inview1 } = useInView({
    triggerOnce: true
  });
  const { ref: ref2, inView: inview2 } = useInView({
    triggerOnce: true
  });
  const { ref: ref3, inView: inview3 } = useInView({
    triggerOnce: true
  });

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    animation.start({
      y: inview1 ? 0 : 100,
      opacity: inview1 ? 1 : 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    });
  }, [animation, inview1]);

  useEffect(() => {
    animation.start({
      y: inview2 ? 0 : 100,
      opacity: inview2 ? 1 : 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    });
  }, [animation, animation2, inview2]);

  useEffect(() => {
    animation.start({
      y: inview3 ? 0 : 100,
      opacity: inview3 ? 1 : 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    });
  }, [animation, animation3, inview3]);

  return (
    <>
      <ScrollToTopButton />
      {heroSection.isActive && (
        <ChakraMouse
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeInOut' }
          }}
        >
          <BannerSlider />
        </ChakraMouse>
      )}
      {categorySliderSection.isActive && (
        <ChakraMouse
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeInOut' }
          }}
        >
          <CategoryCarrusel />
        </ChakraMouse>
      )}
      {productTabsSection.isActive && (
        <ChakraMouse
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeInOut' }
          }}
        >
          <HomeTabs />
        </ChakraMouse>
      )}
      {bannerCardSection.isActive && (
        <ChakraMouse animate={animation} ref={ref1}>
          <BannerCard />
        </ChakraMouse>
      )}
      {aboutUsSection.isActive && (
        <ChakraMouse animate={animation3} ref={ref3}>
          <WhoWeAre />
        </ChakraMouse>
      )}
      {feedbackSection.isActive && (
        <Chakraclient animate={animation2} ref={ref2}>
          <ClientFeedBack />
        </Chakraclient>
      )}
    </>
  );
};
export default Home;
