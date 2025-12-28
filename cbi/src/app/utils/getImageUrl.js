// ✅ HELPER FUNCTION: Smart Image URL
export function getImageUrl(url) {
  // 1. Safety Check: If URL is missing, return null
  if (!url) return null;

  // 2. Data URIs (Base64) - Return as is
  if (url.startsWith("data:")) return url;

  // 3. External URLs (Cloudinary, S3, or absolute links) - Return as is
  if (url.startsWith("http") || url.startsWith("//")) return url;

  // 4. Local Fallback Assets (Your public/assets folder) - Return as is
  if (url.startsWith("/assets")) return url;

  // 5. Default Strapi Uploads - Prepend the Backend URL
  // This handles the "/uploads/image.png" case
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}