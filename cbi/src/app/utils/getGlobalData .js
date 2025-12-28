// lib/get-global-data.js

export async function getGlobalData() {
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  try {
    const res = await fetch(`${BASE_URL}/api/global`, {
      // Still use caching to prevent hitting Strapi on every single request
      // ✅ ADD: Revalidate every 60 seconds
      next: { revalidate: 60 },
      // ✅ KEEP: The timeout protection we added earlier
      signal: AbortSignal.timeout(3000),
    });

    if (!res.ok) throw new Error("Failed to fetch global data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Global Data Fetch Error:", error);
    return null;
  }
}
