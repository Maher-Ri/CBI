import { SeoHelper } from "../utils/SeoHelper";
import ServiceCard from "@/components/ServiceCard";
import CoverImage from "@/components/CoverImage";
import FallbackPage from "@/components/layout/FallbackPage";
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function getServicesData() {
  try {
    const res = await fetch(`${BASE_URL}/api/services-page`, {
      // ✅ ADD: Revalidate every 60 seconds
      next: { revalidate: 60 },

      // ✅ KEEP: The timeout protection we added earlier
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error("Failed to fetch services page data", res.status);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching services page data:", err);
    return null;
  }
}

// 2. SEO SECTION (The invisible <head> part)
export async function generateMetadata(props, parent) {
  const data = await getServicesData();

  // Resolve the Parent (Layout) Metadata
  const parentMetadata = await parent;

  // Find the SEO component inside the sections
  const seoSection = data?.sections?.find(
    (s) => s.__component === "shared.seo"
  );

  // Return the object using your helper (This goes to the <head>)
  return SeoHelper(seoSection, parentMetadata);
}

export default async function Services() {
  const data = await getServicesData();
  if (!data) {
    return <FallbackPage />;
  }
  // --- Extract sections safely ---
  const servicesData = data?.sections?.find(
    (s) => s.__component === "shared.services"
  );
  const coverData = data?.sections?.find(
    (s) => s.__component === "shared.cover-image"
  );
  return (
    <>
      {coverData && <CoverImage data={coverData} />}
      <section className="my-12 md:my-24">
        <div className="lg:ml-[10%] px-[5%] mb-12 md:mb-28">
          <h1 className="text-yellow text-2xl md:text-4xl lg:text-[57px] lg:leading-[68px] font-extrabold">
            {data.title ? data.title : "OUR SERVICES"}
          </h1>
          <p className="text-white text-2xl md:text-4xl lg:text-[57px] lg:leading-[68px] font-medium">
            {data.subTitle ? data.subTitle : ""}
          </p>
        </div>
        <div className="px-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-8 md:gap-12">
          {servicesData.services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
