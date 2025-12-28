// 'use strict';

/**
 * contact-us router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::contact-us.contact-us');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/contact-us',
      handler: 'contact-us.find',
      config: { auth: false }
    }
  ]
};