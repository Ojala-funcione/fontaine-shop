/* eslint-disable no-unused-vars */
import { SliderCardProps } from '@components/_HomePageComponents/CardsSlider/SliderCard';

export interface IHeroSection {
  isActive: boolean;
  data?: {
    imgUrl: string[];
  };
}
export interface ProductTabInterface {
  isActive: boolean;
  data?: {
    title: string;
    products: string[];
    total: number;
  };
}
export interface ProductTabsSectionInterface {
  isActive: boolean;
  data?: {
    news: ProductTabInterface;
    offer: ProductTabInterface;
    featured: ProductTabInterface;
  };
}
interface TestimonialInterface {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
export interface FeedbackSectionInterface {
  isActive: boolean;
  data?: {
    title: string;
    subtitle: string;
    testimonials: TestimonialInterface[];
  };
}
export interface FeaturesSectionInterface {
  isActive: boolean;
  data?: {
    title: string;
    items: { title: string; subtitle: string }[];
  };
}
export interface BannerCardSectionInterface {
  isActive: boolean;
  data?: {
    imgUrl: string;
  };
}
export interface SliderSectionInterface {
  isActive: boolean;
  data?: SliderCardProps[];
}
export interface AboutUsSectionInterface {
  isActive: boolean;
  data?: {
    title: string;
    description: string;
    shortDescription: string;
    imgUrl: string;
    textCallToAction?: string;
  };
}

export interface SiteSettingsInterface {
  heroSection: IHeroSection;
  productTabsSection: ProductTabsSectionInterface;
  categorySliderSection: SliderSectionInterface;
  brandSliderSection: SliderSectionInterface;
  bannerCardSection: BannerCardSectionInterface;
  aboutUsSection: AboutUsSectionInterface;
  feedbackSection: FeedbackSectionInterface;
  featuresSection: FeaturesSectionInterface;
}
// export interface HomeActiveSectionsInterface {
//   heroSection: boolean;
//   productTabsSection: null | {
//     news: boolean;
//     offer: boolean;
//     featured: boolean;
//   };
//   categorySliderSection: boolean;
//   bannerCardSection: boolean;
//   aboutUsSection: boolean;
//   feedbackSection: boolean;
// }
export interface IGeneralSettings {
  logo: string;
  footer?: string;
}
export interface SiteSettingsApi {
  getGeneralSettings(): Promise<IGeneralSettings>;
  setGeneralSettings(): Promise<IGeneralSettings>;
  getHeroSectionSettings(): Promise<IHeroSection>;
  setHeroSectionSettings(): Promise<IHeroSection>;
  getProductTabsSectionSettings(): Promise<ProductTabsSectionInterface>;
  setProductTabsSectionSettings(): Promise<ProductTabsSectionInterface>;
  getBrandSliderSectionSettings(): Promise<SliderSectionInterface>;
  setBrandSliderSectionSettings(): Promise<SliderSectionInterface>;
  getCategorySliderSectionSettings(): Promise<SliderSectionInterface>;
  setCategorySliderSectionSettings(): Promise<SliderSectionInterface>;
  getFeedbackSectionSettings(): Promise<FeedbackSectionInterface>;
  setFeedbackSectionSettings(): Promise<FeedbackSectionInterface>;
  getBannerCardSectionSettings(): Promise<BannerCardSectionInterface>;
  setBannerCardSectionSettings(): Promise<BannerCardSectionInterface>;
  getAboutUsSectionSettings(): Promise<AboutUsSectionInterface>;
  setAboutUsSectionSettings(): Promise<AboutUsSectionInterface>;
  getFeaturesSectionSettings(): Promise<FeaturesSectionInterface>;
  setFeaturesSectionSettings(): Promise<FeaturesSectionInterface>;
}
