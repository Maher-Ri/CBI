// 'use strict';

/**
 * home controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::home.home');


'use strict';
const cleanMedia = require('../../../utils/cleanMedia');
module.exports = {
  async find(ctx) {
    try {
      const home = await strapi.db.query('api::home.home').findOne({
        populate: {
          sections: {
            populate: {
              // HERO SECTION
              image: true,
              images: true,
              
              // SHARED.CLIENTS SECTION
              clients: {
                populate: {
                  image: true,
                },
              },

              // SHARED.SERVICES SECTION
              services: {
                populate: {
                  image: true,
                  icon: true,
                },
              },
            },
          },
        },
      });

            // Clean all media objects
      const sanitizedHome = cleanMedia(home);

      return sanitizedHome;

    } catch (error) {
      console.log("HOME API ERROR:", error);
      return ctx.internalServerError("Internal error in Home API");
    }
  },
};

