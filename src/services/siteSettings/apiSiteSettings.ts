/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-catch */
import axios from 'axios';
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
    const data = true;
    // try {
    //   const response = await axios.get('https://url_base.com/algo');
    //   return response as unknown as IGeneralSettings;
    // } catch (error) {
    //   throw error;
    // }
    return generalSettings;
  };
  const setGeneralSettings = async (): Promise<IGeneralSettings> => {
    const data = true;
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as IGeneralSettings;
    // } catch (error) {
    //   throw error;
    // }
    return generalSettings;
  };
  const getHeroSectionSettings = async (): Promise<IHeroSection> => {
    const data = true;
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
    return heroSection;
  };
  const setHeroSectionSettings = async (): Promise<IHeroSection> => {
    const data = true;
    // try {
    //   const response = await axios.get(
    //     'https://url_base.com/sitesettings/heroSection'
    //   );
    //   return response as unknown as HeroSectionInterface;
    // } catch (error) {
    //   throw error;
    // }
    return heroSection;
  };

  const getProductTabsSectionSettings =
    async (): Promise<ProductTabsSectionInterface> => {
      const data = true;
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
      return productTabsSection;
    };
  const setProductTabsSectionSettings =
    async (): Promise<ProductTabsSectionInterface> => {
      const data = true;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return productTabsSection;
    };
  const getBrandSliderSectionSettings =
    async (): Promise<SliderSectionInterface> => {
      const data = true;
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
      return brandSliderSection;
    };
  const setBrandSliderSectionSettings =
    async (): Promise<SliderSectionInterface> => {
      const data = true;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return brandSliderSection;
    };
  const getCategorySliderSectionSettings =
    async (): Promise<SliderSectionInterface> => {
      const data = true;
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
      return categorySliderSection;
    };
  const setCategorySliderSectionSettings =
    async (): Promise<SliderSectionInterface> => {
      const data = true;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return categorySliderSection;
    };
  const getFeedbackSectionSettings =
    async (): Promise<FeedbackSectionInterface> => {
      const data = true;
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
      return feedbackSection;
    };
  const setFeedbackSectionSettings =
    async (): Promise<FeedbackSectionInterface> => {
      const data = true;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return feedbackSection;
    };
  const getBannerCardSectionSettings =
    async (): Promise<BannerCardSectionInterface> => {
      const data = true;
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
      return bannerCardSection;
    };
  const setBannerCardSectionSettings =
    async (): Promise<BannerCardSectionInterface> => {
      const data = true;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return bannerCardSection;
    };
  const getAboutUsSectionSettings =
    async (): Promise<AboutUsSectionInterface> => {
      const data = true;
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
      return aboutUsSection;
    };
  const setAboutUsSectionSettings =
    async (): Promise<AboutUsSectionInterface> => {
      const data = true;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return aboutUsSection;
    };

  const getFeaturesSectionSettings =
    async (): Promise<FeaturesSectionInterface> => {
      const data = true;
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
      return featuresSection;
    };
  const setFeaturesSectionSettings =
    async (): Promise<FeaturesSectionInterface> => {
      const data = true;
      // try {
      //   const response = await axios.get(
      //     'https://url_base.com/sitesettings/heroSection'
      //   );
      //   return response as unknown as HeroSectionInterface;
      // } catch (error) {
      //   throw error;
      // }
      return featuresSection;
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
