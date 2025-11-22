// Recursive function to clean all media objects
const cleanMedia = (data) => {
  if (!data) return data;

  if (Array.isArray(data)) return data.map(cleanMedia);

  if (typeof data === 'object') {
    Object.keys(data).forEach((key) => {
      const value = data[key];

      // Detect Strapi media object
      if (value && value.url && value.mime) {
        data[key] = {
          url: value.url,
          alternativeText: value.alternativeText || '',
        };
      } else {
        data[key] = cleanMedia(value);
      }
    });
  }

  return data;
};

module.exports = cleanMedia;
