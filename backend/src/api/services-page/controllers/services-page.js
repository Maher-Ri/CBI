"use strict";
const cleanMedia = require("../../../utils/cleanMedia");
module.exports = {
  async find(ctx) {
    try {
      const ServicesPage = await strapi.db
        .query("api::services-page.services-page")
        .findOne({
          populate: {
            bodyImage: true,
            sections: {
              populate: {
                // direct SECTION images
                image: true,
                images: true,

                // SHARED.services SECTION
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
      const sanitizedServicesPage = cleanMedia(ServicesPage);

      return sanitizedServicesPage;
    } catch (error) {
      console.log("Services Page API ERROR:", error);
      return ctx.internalServerError("Internal error in Services Page API");
    }
  },
};
