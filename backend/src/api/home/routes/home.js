// 'use strict';

/**
 * home router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::home.home');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/home',
      handler: 'home.find',
      config: { auth: false }
    }
  ]
};
