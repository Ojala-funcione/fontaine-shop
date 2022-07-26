/* eslint-disable no-useless-catch */
// import axios from 'axios';
import {
  aboutUsSection,
  bannerCardSection,
  brandSliderSection,
  categorySliderSection,
  featuresSection,
  feedbackSection,
  generalSettings,
  heroSection,
  productTabsSection
} from './data';
import {
  AboutUsSectionInterface,
  BannerCardSectionInterface,
  FeaturesSectionInterface,
  FeedbackSectionInterface,
  IGeneralSettings,
  IHeroSection,
  ProductTabsSectionInterface,
  SiteSettingsApi,
  SliderSectionInterface
} from './siteSettingsInterfaces';

const useAPISiteSettings = (): SiteSettingsApi => {
  const getGeneralSettings = async (): Promise<IGeneralSettings> => {
    const response = generalSettings;
    // try {
    //   const response = await axios.get('https://url_base.com/algo');
    //   return response as unknown as IGeneralSettings;
    // } catch (error) {
    //   throw error;
    // }
    return response;
  };
  const setGeneralSettings = async (): Promise<IGeneralSettings> => {
    const response = generalSettings;
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as IGeneralSettings;
    // } catch (error) {
    //   throw error;
    // }
    return response;
  };
  const getHeroSectionSettings = async (): Promise<IHeroSection> => {
    const response = heroSection;
    // try {
    //   const isActive = await axios.get(
    //     'https://url_base.com/sitesettings/heroSection'
    //   );
    //   if (isActive) {
    //     const response = await axios.get('https://url_base.com/data');
    //     data = response.data;
    //   }
    //   return { isActive, data } as HeroSectionInterface;
    // } catch (error) {
    //   throw error;
    // }
    return response;
  };
  const setHeroSectionSettings = async (): Promise<IHeroSection> => {
    const response = heroSection;
    // try {
    //   const response = await axios.get(
    //     'https://url_base.com/sitesettings/heroSection'
    //   );
    //   return response as unknown as HeroSectionInterface;
    // } catch (error) {
    //   throw error;
    // }
    return response;
  };

  const getProductTabsSectionSettings =
    async (): Promise<ProductTabsSectionInterface> => {
      const response = productTabsSection;
      // try {
      //   const isActive = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   if (isActive) {
      //     const response = await axios.get('https://url_base.com/data');
      //     data = response.data;
      //   }
      //   return { isActive, data } as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const setProductTabsSectionSettings =
    async (): Promise<ProductTabsSectionInterface> => {
      const response = productTabsSection;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const getBrandSliderSectionSettings =
    async (): Promise<SliderSectionInterface> => {
      const response = brandSliderSection;
      // try {
      //   const isActive = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   if (isActive) {
      //     const response = await axios.get('https://url_base.com/data');
      //     data = response.data;
      //   }
      //   return { isActive, data } as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const setBrandSliderSectionSettings =
    async (): Promise<SliderSectionInterface> => {
      const response = brandSliderSection;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const getCategorySliderSectionSettings =
    async (): Promise<SliderSectionInterface> => {
      const response = categorySliderSection;
      // try {
      //   const isActive = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   if (isActive) {
      //     const response = await axios.get('https://url_base.com/data');
      //     data = response.data;
      //   }
      //   return { isActive, data } as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const setCategorySliderSectionSettings =
    async (): Promise<SliderSectionInterface> => {
      const response = categorySliderSection;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const getFeedbackSectionSettings =
    async (): Promise<FeedbackSectionInterface> => {
      const response = feedbackSection;
      // try {
      //   const isActive = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   if (isActive) {
      //     const response = await axios.get('https://url_base.com/data');
      //     data = response.data;
      //   }
      //   return { isActive, data } as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const setFeedbackSectionSettings =
    async (): Promise<FeedbackSectionInterface> => {
      const response = feedbackSection;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const getBannerCardSectionSettings =
    async (): Promise<BannerCardSectionInterface> => {
      const response = bannerCardSection;
      // try {
      //   const isActive = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   if (isActive) {
      //     const response = await axios.get('https://url_base.com/data');
      //     data = response.data;
      //   }
      //   return { isActive, data } as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const setBannerCardSectionSettings =
    async (): Promise<BannerCardSectionInterface> => {
      const response = bannerCardSection;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const getAboutUsSectionSettings =
    async (): Promise<AboutUsSectionInterface> => {
      const response = aboutUsSection;
      // try {
      //   const isActive = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   if (isActive) {
      //     const response = await axios.get('https://url_base.com/data');
      //     data = response.data;
      //   }
      //   return { isActive, data } as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const setAboutUsSectionSettings =
    async (): Promise<AboutUsSectionInterface> => {
      const response = aboutUsSection;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };

  const getFeaturesSectionSettings =
    async (): Promise<FeaturesSectionInterface> => {
      const response = featuresSection;
      // try {
      //   const isActive = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   if (isActive) {
      //     const response = await axios.get('https://url_base.com/data');
      //     data = response.data;
      //   }
      //   return { isActive, data } as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };
  const setFeaturesSectionSettings =
    async (): Promise<FeaturesSectionInterface> => {
      const response = featuresSection;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return response;
    };

  return {
    getGeneralSettings,
    setGeneralSettings,
    getHeroSectionSettings,
    setHeroSectionSettings,
    getProductTabsSectionSettings,
    setProductTabsSectionSettings,
    getBrandSliderSectionSettings,
    setBrandSliderSectionSettings,
    getCategorySliderSectionSettings,
    setCategorySliderSectionSettings,
    getFeedbackSectionSettings,
    setFeedbackSectionSettings,
    getBannerCardSectionSettings,
    setBannerCardSectionSettings,
    getAboutUsSectionSettings,
    setAboutUsSectionSettings,
    getFeaturesSectionSettings,
    setFeaturesSectionSettings
  };
};
export default useAPISiteSettings;
