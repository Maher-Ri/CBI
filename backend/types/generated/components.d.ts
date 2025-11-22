import type { Schema, Struct } from '@strapi/strapi';

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

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String & Schema.Attribute.Unique;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CBI'>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    keywords: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'CBI'>;
    robots: Schema.Attribute.Enumeration<
      ['index, follow', 'noindex, nofollow']
    > &
      Schema.Attribute.DefaultTo<'index, follow'>;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
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
      'shared.clients': SharedClients;
      'shared.hero': SharedHero;
      'shared.seo': SharedSeo;
      'shared.services': SharedServices;
      'shared.slider': SharedSlider;
    }
  }
}
