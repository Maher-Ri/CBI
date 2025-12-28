// 'use strict';

// /**
//  *  global controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::global.global');
"use strict";
const { pop } = require("../../../../config/middlewares");
const cleanMedia = require("../../../utils/cleanMedia");

module.exports = {
  async find(ctx) {
    try {
      // Fetch the Single Type "global" with all SEO media populated
      const globalData = await strapi.db.query("api::global.global").findOne({
        populate: {
          seo: {
            populate: {
              ogImage: true,
              favicon: true,
            },
          },
          navbar: {
            populate: {
              logo: true,
              links: true,
              contact: {
                populate: {
                  icon: true,
                },
              },
            },
          },
          footer: {
            populate: {
              logo:true,
              info: true,
              primaryLinks: true,
              secondaryLinks: true,
            },
          },
        },
      });

      // Sanitize media URLs if you have a utility like cleanMedia
      const sanitizedGlobal = cleanMedia(globalData);

      return sanitizedGlobal;
    } catch (error) {
      console.error("GLOBAL API ERROR:", error);
      return ctx.internalServerError("Internal error in Global API");
    }
  },
};
