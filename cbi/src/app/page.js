import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import SwiperSection from "@/components/home/Swiper";
import Clients from "@/components/home/Clients";
import { SeoHelper } from "./utils/SeoHelper";
import FallbackPage from "@/components/layout/FallbackPage";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
async function getHomeData() {
  try {
    const res = await fetch(`${BASE_URL}/api/home`, {
      // ✅ ADD: Revalidate every 60 seconds
      next: { revalidate: 60 },

      // ✅ KEEP: The timeout protection we added earlier
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error("Failed to fetch home page data", res.status);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching home page data:", err);
    return null;
  }
}

// 2. SEO SECTION (The invisible <head> part)
export async function generateMetadata(props, parent) {
  const data = await getHomeData();

  // 2. Resolve the Parent (Layout) Metadata
  const parentMetadata = await parent;

  // Find the SEO component inside the sections
  const seoSection = data?.sections?.find(
    (s) => s.__component === "shared.seo"
  );

  // Return the object using your helper (This goes to the <head>)
  return SeoHelper(seoSection, parentMetadata);
}

// 3. PAGE SECTION (The visible <body> part)
export default async function Home() {
  const data = await getHomeData();

  if (!data) {
    return <FallbackPage />;
  }
  // --- Extract sections safely ---
  const heroData = data?.sections?.find((s) => s.__component === "shared.hero");
  const servicesData = data?.sections?.find(
    (s) => s.__component === "shared.services"
  );
  const swiperData = data?.sections?.find(
    (s) => s.__component === "shared.slider"
  );
  const clientsData = data?.sections?.find(
    (s) => s.__component === "shared.clients"
  );

  return (
    <>
      {heroData && <Hero data={heroData} />}
      {servicesData && <Services data={servicesData} />}
      {swiperData && <SwiperSection data={swiperData} />}
      {clientsData && <Clients data={clientsData} />}
    </>
  );
}
