import { SliderCardProps } from '@components/HomePageComponents/CardsSlider/SliderCard';

export interface SiteSettingsResponse {
  logo: string;
}
export interface SiteSettingsApi {
  getSiteSettings(): Promise<SiteSettingsResponse>;
  setSiteSettings(): Promise<SiteSettingsResponse>;
}

export interface HeroSectionsInterface {
  isActive: Boolean;
  data?: {
    imgUrl: string[];
  };
}
export interface ProductTabInterface {
  isActive: Boolean;
  data?: {
    title: string;
    products: string[];
    total: number;
  };
}
export interface ProductTabsSectionInterface {
  isActive: Boolean;
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
  isActive: Boolean;
  data?: {
    title: string;
    subtitle: string;
    testimonials: TestimonialInterface[];
  };
}
export interface FeaturesSectionInterface {
  isActive: Boolean;
  data?: {
    title: string;
    items: { title: string; subtitle: string }[];
  };
}
export interface BannerCardSectionInterface {
  isActive: Boolean;
  data?: {
    imgUrl: string;
  };
}
export interface SliderSectionInterface {
  isActive: Boolean;
  data?: SliderCardProps[];
}
export interface AboutUsSectionInterface {
  isActive: Boolean;
  data?: {
    title: string;
    description: string;
    shortDescription: string;
    imgUrl: string;
    textCallToAction?: string;
  };
}

export interface SiteSettingsInterface {
  heroSection: HeroSectionsInterface;
  productTabsSection: ProductTabsSectionInterface;
  categorySliderSection: SliderSectionInterface;
  brandSliderSection: SliderSectionInterface;
  bannerCardSection: BannerCardSectionInterface;
  aboutUsSection: AboutUsSectionInterface;
  feedbackSection: FeedbackSectionInterface;
  featuresSection: FeaturesSectionInterface;
}
export interface HomeActiveSectionsInterface {
  heroSection: boolean;
  productTabsSection: null | {
    news: boolean;
    offer: boolean;
    featured: boolean;
  };
  categorySliderSection: boolean;
  bannerCardSection: boolean;
  aboutUsSection: boolean;
  feedbackSection: boolean;
}
