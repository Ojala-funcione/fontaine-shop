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

const ChakraMouse = chakra(motion.div);
const Chakraclient = chakra(motion.div);

const Home: NextPage = () => {
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
    if (inview1) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: 'easeInOut'
        }
      });
    }
    if (!inview1) {
      animation.start({
        y: 100,
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: 'easeInOut'
        }
      });
    }
  }, [animation, inview1]);

  useEffect(() => {
    if (inview2) {
      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: 'easeInOut'
        }
      });
    }
    if (!inview2) {
      animation2.start({
        y: 100,
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: 'easeInOut'
        }
      });
    }
  }, [animation, animation2, inview2]);

  useEffect(() => {
    if (inview3) {
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeInOut'
        }
      });
    }
    if (!inview3) {
      animation3.start({
        y: 100,
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: 'easeInOut'
        }
      });
    }
  }, [animation, animation3, inview3]);

  return (
    <>
      <ScrollToTopButton />
      <ChakraMouse
        initial={{
          opacity: 0,
          x: -100
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: 'easeInOut'
          }
        }}
      >
        <BannerSlider />
      </ChakraMouse>
      <ChakraMouse
        initial={{
          opacity: 0,
          x: 100
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: 'easeInOut'
          }
        }}
      >
        <CategoryCarrusel />
      </ChakraMouse>
      <ChakraMouse
        initial={{
          opacity: 0,
          y: 100
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: 'easeInOut'
          }
        }}
      >
        <HomeTabs />
      </ChakraMouse>
      <ChakraMouse animate={animation} ref={ref1}>
        <BannerCard />
      </ChakraMouse>
      <ChakraMouse animate={animation3} ref={ref3}>
        <WhoWeAre />
      </ChakraMouse>
      <Chakraclient animate={animation2} ref={ref2}>
        <ClientFeedBack />
      </Chakraclient>
    </>
  );
};
export default Home;
