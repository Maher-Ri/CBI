"use strict";
const cleanMedia = require("../../../utils/cleanMedia");
module.exports = {
  async find(ctx) {
    try {
      const carriere = await strapi.db
        .query("api::carriere.carriere")
        .findOne({
          populate: {
            bodyImage: true,
            sections: {
              populate: {
                // direct SECTION images
                image: true,
                images: true,

                // SHARED.Jobs SECTION
                jobs: true,
              },
            },
          },
        });

      // Clean all media objects
      const sanitizedCarriere = cleanMedia(carriere);

      return sanitizedCarriere;
    } catch (error) {
      console.log("Carriere API ERROR:", error);
      return ctx.internalServerError("Internal error in Carriere API");
    }
  },
};
