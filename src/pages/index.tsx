/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import ScrollToTopButton from '@common/Buttons/ScrollToTopButton';
import ClientFeedBack from '@components/client feedback/ClientFeedBack';
import type { NextPage } from 'next';
import HomeTabs from '@components/HomePageComponents/homeTabs/HomeTabs';
import BannerCard from '@components/bannerCard/BannerCard';
import BannerSlider from '@components/HomePageComponents/BannerSlider/BannerSlider';
import { motion, useAnimation } from 'framer-motion';
import { Box, chakra } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useGlobalContext } from '@context/globalContext/globalContext';
import CardsSlider from '@components/HomePageComponents/CardsSlider/CardsSlider';
import AboutUsSection from '@components/HomePageComponents/AboutUsSection/AboutUsSection';
import FeaturesSection from '@components/HomePageComponents/FeaturesSection/FeaturesSection';

const ChakraMouse = chakra(motion.div);
const Chakraclient = chakra(motion.div);

const Home: NextPage = () => {
  const { homeActiveSections } = useGlobalContext();
  const {
    heroSection,
    productTabsSection,
    categorySliderSection,
    brandSliderSection,
    bannerCardSection,
    aboutUsSection,
    feedbackSection,
    featuresSection
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
      <Box minHeight="calc(100vh - 90px)">
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
        {brandSliderSection.isActive && (
          <ChakraMouse
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: 'easeInOut' }
            }}
          >
            {brandSliderSection.data && (
              <CardsSlider data={brandSliderSection.data} />
            )}
          </ChakraMouse>
        )}
      </Box>
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
      {featuresSection.isActive && (
        <ChakraMouse animate={animation} ref={ref1}>
          <FeaturesSection />
        </ChakraMouse>
      )}
      {aboutUsSection.isActive && (
        <ChakraMouse animate={animation3} ref={ref3}>
          <AboutUsSection
            title={aboutUsSection.data?.title!}
            description={aboutUsSection.data?.shortDescription!}
            imgUrl={aboutUsSection.data?.imgUrl!}
            textCallToAction={aboutUsSection.data?.textCallToAction!}
            showCallToAction
          />
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
          {categorySliderSection.data && (
            <CardsSlider data={categorySliderSection.data} />
          )}
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
