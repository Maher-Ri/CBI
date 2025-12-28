"use strict";
const cleanMedia = require("../../../utils/cleanMedia");
module.exports = {
  async find(ctx) {
    try {
      const contactUs = await strapi.db
        .query("api::contact-us.contact-us")
        .findOne({
          populate: {
            bodyImage: true,
            sections: {
              populate: {
                // direct SECTION images
                image: true,
                images: true,

                // SHARED.Cover SECTION
                coverImage: {
                  populate: {
                    image: true,
                  },
                },
              },
            },
          },
        });

      // Clean all media objects
      const sanitizedContact = cleanMedia(contactUs);

      return sanitizedContact;
    } catch (error) {
      console.log("Contact Us API ERROR:", error);
      return ctx.internalServerError("Internal error in Contact Us API");
    }
  },
};
