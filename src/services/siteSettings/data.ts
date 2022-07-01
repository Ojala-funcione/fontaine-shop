/* eslint-disable no-unused-vars */
import {
  HeroSectionsInterface,
  SiteSettingsInterface,
  ProductTabsSectionInterface,
  AboutUsSectionInterface,
  BannerCardSectionInterface,
  CategorySliderSectionInterface,
  FeedbackSectionInterface
} from './siteSettingsInterfaces';

const heroSection: HeroSectionsInterface = {
  isActive: true,
  data: {
    imgUrl: [
      'http://www.fidelite.com.ar/img/img-bnn/banner-home-universo_9.jpg',
      'http://www.mavprofessional.com.ar/images/slide/slide3.jpg',
      'https://www.rubihair.com/wp-content/uploads/2020/04/Kerastase-Premium-Web-Banner-1024x481.jpg',
      'http://www.mavprofessional.com.ar/images/slide/linea-mav.jpg',
      'https://www.brandstocker.com/wp-content/uploads/2020/03/BrandStocker-Branding-Loreal-1.jpg',
      'http://www.mavprofessional.com.ar/images/slide/slide4.jpg',
      'http://www.fidelite.com.ar/img/img-bnn/bannerhome-caviartintura.jpg',
      'https://www.descabeladas.com.br/media/catalog/category/banner_loreal_magento.png'
    ]
  }
};
const productTabsSection: ProductTabsSectionInterface = {
  isActive: true,
  data: {
    news: {
      isActive: true,
      data: {
        title: 'Nuevos Productos',
        products: [],
        total: 0
      }
    },
    offer: {
      isActive: true,
      data: {
        title: 'Oferta',
        products: [],
        total: 0
      }
    },
    featured: {
      isActive: false,
      data: {
        title: 'Productos Destacados',
        products: [],
        total: 0
      }
    }
  }
};
const categorySliderSection: CategorySliderSectionInterface = {
  isActive: false,
  data: {
    imgUrl: ''
  }
};
const bannerCardSection: BannerCardSectionInterface = {
  isActive: false,
  data: {
    imgUrl: ''
  }
};
const aboutUsSection: AboutUsSectionInterface = {
  isActive: false,
  data: {
    imgUrl: ''
  }
};
const feedbackSection: FeedbackSectionInterface = {
  isActive: false,
  data: {
    imgUrl: ''
  }
};

const homeSectionsData: SiteSettingsInterface = {
  heroSection,
  productTabsSection,
  categorySliderSection,
  bannerCardSection,
  aboutUsSection,
  feedbackSection
};

export default homeSectionsData;
