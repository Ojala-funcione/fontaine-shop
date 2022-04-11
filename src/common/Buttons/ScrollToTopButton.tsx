import { IconButton } from '@chakra-ui/react';
import React, { useEffect, useState, FC } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      return window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return isVisible ? (
    <IconButton
      aria-label=""
      onClick={scrollToTop}
      icon={<RiArrowUpSLine />}
      position="fixed"
      right="20px"
      bottom="20px"
      bg="#fff"
      zIndex={10}
      boxShadow="0px 0px 30px rgba(0, 0, 0, 0.35)"
      fontSize="32px"
      transition="all 1s cubic-bezier(0, 0, 0.1, 1)"
      _hover={{
        transform: 'translateY(-5px)'
      }}
      _focus={{
        outline: 'none'
      }}
    />
  ) : (
    <div />
  );
};

export default ScrollToTopButton;
