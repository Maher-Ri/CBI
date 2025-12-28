import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalContact extends Struct.ComponentSchema {
  collectionName: 'components_global_contacts';
  info: {
    displayName: 'contact';
    icon: 'envelop';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
    icon: 'bulletList';
  };
  attributes: {
    copyright: Schema.Attribute.Text & Schema.Attribute.Required;
    info: Schema.Attribute.Component<'global.info', false> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    primaryLinks: Schema.Attribute.Component<'global.link', true> &
      Schema.Attribute.Required;
    secondaryLinks: Schema.Attribute.Component<'global.link', true> &
      Schema.Attribute.Required;
  };
}

export interface GlobalInfo extends Struct.ComponentSchema {
  collectionName: 'components_global_infos';
  info: {
    displayName: 'info';
    icon: 'globe';
  };
  attributes: {
    address: Schema.Attribute.RichText & Schema.Attribute.Required;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalLink extends Struct.ComponentSchema {
  collectionName: 'components_global_links';
  info: {
    displayName: 'link';
    icon: 'exit';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'navbar';
    icon: 'bulletList';
  };
  attributes: {
    contact: Schema.Attribute.Component<'global.contact', false> &
      Schema.Attribute.Required;
    links: Schema.Attribute.Component<'global.link', true> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface GlobalSeo extends Struct.ComponentSchema {
  collectionName: 'components_global_seos';
  info: {
    displayName: 'seo';
    icon: 'chartCircle';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CBI'>;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    keywords: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'CBI'>;
    ogDescription: Schema.Attribute.String & Schema.Attribute.DefaultTo<'CBI'>;
    ogImage: Schema.Attribute.Media<'images' | 'files'>;
    ogLocale: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 6;
      }> &
      Schema.Attribute.DefaultTo<'en_US'>;
    ogTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'CBI'>;
    robots: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    siteName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CBI'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CBI'>;
  };
}

export interface SharedClients extends Struct.ComponentSchema {
  collectionName: 'components_shared_clients';
  info: {
    displayName: 'clients';
    icon: 'bold';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    clients: Schema.Attribute.Relation<'oneToMany', 'api::client.client'>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedCoverImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_cover_images';
  info: {
    displayName: 'coverImage';
    icon: 'expand';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    boldTitle: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    lightTitle: Schema.Attribute.String & Schema.Attribute.Unique;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SharedJobs extends Struct.ComponentSchema {
  collectionName: 'components_shared_jobs';
  info: {
    displayName: 'jobs';
    icon: 'cursor';
  };
  attributes: {
    jobs: Schema.Attribute.Relation<'oneToMany', 'api::job.job'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CBI'>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    keywords: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CBI'>;
    ogDescription: Schema.Attribute.Text;
    ogTitle: Schema.Attribute.String;
    robots: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'CBI'>;
  };
}

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'slider';
    icon: 'slideshow';
  };
  attributes: {
    slides: Schema.Attribute.Relation<'oneToMany', 'api::slide.slide'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.contact': GlobalContact;
      'global.footer': GlobalFooter;
      'global.info': GlobalInfo;
      'global.link': GlobalLink;
      'global.navbar': GlobalNavbar;
      'global.seo': GlobalSeo;
      'shared.clients': SharedClients;
      'shared.cover-image': SharedCoverImage;
      'shared.hero': SharedHero;
      'shared.jobs': SharedJobs;
      'shared.seo': SharedSeo;
      'shared.services': SharedServices;
      'shared.slider': SharedSlider;
    }
  }
}
