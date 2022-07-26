/* eslint-disable no-unused-vars */
import { SliderCardProps } from '@components/_HomePageComponents/CardsSlider/SliderCard';
import {
  IHeroSection,
  SiteSettingsInterface,
  ProductTabsSectionInterface,
  AboutUsSectionInterface,
  BannerCardSectionInterface,
  FeedbackSectionInterface,
  SliderSectionInterface,
  FeaturesSectionInterface,
  IGeneralSettings
} from './siteSettingsInterfaces';

export const generalSettings: IGeneralSettings = {
  logo: 'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/logo-square.jpg?alt=media&token=f1b1b8d0-a08d-4f9c-9798-e4eb3b4a95d8'
};

export const heroSection: IHeroSection = {
  isActive: true,
  data: {
    imgUrl: [
      'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/banners%2Fbanner-home-universo_9.jpg?alt=media&token=fa51ead2-021f-42fb-851d-3a6cc5e861c5',
      'http://www.mavprofessional.com.ar/images/slide/slide3.jpg',
      'https://www.rubihair.com/wp-content/uploads/2020/04/Kerastase-Premium-Web-Banner-1024x481.jpg',
      'http://www.mavprofessional.com.ar/images/slide/linea-mav.jpg',
      'http://www.mavprofessional.com.ar/images/slide/slide4.jpg',
      'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/banners%2Fbannerhome-caviartintura.jpg?alt=media&token=e3bc3cd1-f253-4a1e-aa89-f005d79b366c',
      'https://www.brandstocker.com/wp-content/uploads/2020/03/BrandStocker-Branding-Loreal-1.jpg',
      'https://www.descabeladas.com.br/media/catalog/category/banner_loreal_magento.png'
    ]
  }
};
export const productTabsSection: ProductTabsSectionInterface = {
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
export const categorySliderSection: SliderSectionInterface = {
  isActive: false,
  data: [
    {
      id: '1',
      dataIndex: 'TINTURAS',
      image: 'https://img.lovepik.com/photo/40171/8483.jpg_wh860.jpg'
    },
    {
      id: '2',
      title: 'CREMAS',
      dataIndex: 'CREMAS',
      subTitle: 'MEJORES CREMAS 2022',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/002/102/483/small/cosmetics-ad-with-beautiful-pink-upholstery-background-free-vector.jpg'
    },
    {
      id: '3',
      title: 'SHAMPOO',
      dataIndex: 'SHAMPOO',
      subTitle: 'KIT ANTI STRESS',
      fontColor: '#fff',
      image:
        'https://media.gettyimages.com/photos/set-of-different-makeup-accessories-on-trendy-summer-yellow-cosmetic-picture-id1322172177?s=2048x2048'
    },
    {
      id: '4',
      title: 'TINTURAS',
      dataIndex: 'TINTURAS',
      subTitle: 'SUPER PROMO EN TINTURAS',
      image: 'https://c.neh.tw/thumb/f/720/378f60a8e60a41d09bd3.jpg'
    },
    {
      id: '5',
      title: 'CREMAS',
      dataIndex: 'CREMAS',
      subTitle: 'MEJORES CREMAS 2022',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/002/563/540/small_2x/3d-realistic-natural-beauty-cosmetic-product-for-face-or-body-care-on-glossy-bokeh-background-design-template-of-fashion-cosmetics-product-for-ads-flyer-or-magazine-background-free-vector.jpg'
    },
    {
      id: '6',
      title: 'SHAMPOO',
      dataIndex: 'SHAMPOO',
      subTitle: 'KIT ANTI STRESS',
      image:
        'https://c8.alamy.com/comp/JTN4WG/makeup-cosmetics-on-wooden-background-top-view-with-copy-space-JTN4WG.jpg'
    },
    {
      id: '7',
      title: 'TINTURAS',
      dataIndex: 'TINTURAS',
      subTitle: 'SUPER PROMO EN TINTURAS',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/000/670/332/small/Cosmetic_Banner_1.jpg'
    },
    {
      id: '8',
      title: 'CREMAS',
      dataIndex: 'CREMAS',
      subTitle: 'MEJORES CREMAS 2022',
      image:
        'https://media.istockphoto.com/vectors/skin-care-cosmetic-vector-id641299334'
    },
    {
      id: '9',
      title: 'SHAMPOO',
      dataIndex: 'SHAMPOO',
      subTitle: 'KIT ANTI STRESS',
      image:
        'https://image.shutterstock.com/shutterstock/photos/1322497571/display_1500/stock-vector-cosmetic-package-template-mockup-template-design-with-green-container-green-spray-bottles-with-1322497571.jpg'
    }
  ]
};
export const brandSliderSection: SliderSectionInterface = {
  isActive: true,
  data: [
    {
      id: '1',
      dataIndex: 'kerastase',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/brands%2Fkerastase.png?alt=media&token=9ecedcd7-e43f-47b2-9918-f27c1d222690'
    },
    {
      id: '2',
      dataIndex: 'gama',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/brands%2Fgama.png?alt=media&token=8a1e9efa-c59b-47b6-9372-736f09bcc8df'
    },
    {
      id: '3',
      dataIndex: 'olaplex',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/brands%2Folaplex.png?alt=media&token=b6fa2ae6-bd50-4983-a97b-690fdcf327c2'
    },
    {
      id: '4',
      dataIndex: 'loreal',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/brands%2Floreal.png?alt=media&token=000d5934-8470-4226-842d-195148a1e10d'
    },
    {
      id: '5',
      dataIndex: 'aveda',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/brands%2Faveda.png?alt=media&token=0e201c6c-a406-43d8-a395-b8a1a93b396c'
    },
    {
      id: '6',
      dataIndex: 'revlon',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/brands%2Frevlon.png?alt=media&token=5af7eca9-eb76-449b-8294-457e124ba638'
    },
    {
      id: '7',
      dataIndex: 'nioxin',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/brands%2Fnioxin.png?alt=media&token=3dc99339-24e3-4b0c-8b8e-f8dd83f941ab'
    },
    {
      id: '8',
      dataIndex: 'Gamila',
      image:
        'https://firebasestorage.googleapis.com/v0/b/fontaine-dev.appspot.com/o/brands%2Fgamila.png?alt=media&token=31b652b0-828b-475c-a7bf-7c23a2224888'
    }
  ]
};
export const bannerCardSection: BannerCardSectionInterface = {
  isActive: false,
  data: undefined
};
export const aboutUsSection: AboutUsSectionInterface = {
  isActive: true,
  data: {
    title: '¿Quienes Somos?',
    imgUrl:
      'https://comfortel.com.au/wp-content/uploads/2018/09/hair-salon-design-laboutique-comfortel_5.jpg',
    textCallToAction: 'Saber Mas',
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec
  tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
  erat consequat auctor eu in elit.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec
  tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
  erat consequat auctor eu in elit.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec
  tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
  erat consequat auctor eu in elit.`
  }
};

export const featuresSection: FeaturesSectionInterface = {
  isActive: true,
  data: {
    title: '¿Por Qué Elegirnos?',
    items: [
      {
        title: 'Pagos rapidos y seguros',
        subtitle: 'Con todos los medios de pago'
      },
      {
        title: 'Soporte 24x7',
        subtitle: 'Con todos los medios de pago'
      },
      {
        title: 'Precios Increibles',
        subtitle: 'Los mejores descuentos en productos destacados'
      },
      {
        title: 'Envios Gratis',
        subtitle: 'En compras mayores a $6000'
      }
    ]
  }
};
export const feedbackSection: FeedbackSectionInterface = {
  isActive: true,
  data: {
    title: 'Clientes Satisfechos',
    subtitle:
      ' En Fontaine nos esforzamos para que tengas la mejor experiencia en tus compras',
    testimonials: [
      {
        name: 'Brandon P.',
        role: 'Cliente',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum fugit, qui optio doloremque nobis tempore velit perferendis illum tempora quam? ',
        avatar:
          'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      },
      {
        name: 'Krysta B.',
        role: 'Cliente',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum fugit, qui optio doloremque nobis tempore velit perferendis illum tempora quam? ',
        avatar:
          'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      }
    ]
  }
};

const homeSectionsData: SiteSettingsInterface = {
  heroSection,
  productTabsSection,
  categorySliderSection,
  brandSliderSection,
  bannerCardSection,
  aboutUsSection,
  feedbackSection,
  featuresSection
};

export default homeSectionsData;
