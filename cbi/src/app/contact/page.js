import { SeoHelper } from "../utils/SeoHelper";
import ContactForm from "@/components/ContactForm";
import CoverImage from "@/components/CoverImage";
import Image from "next/image";
import FallbackPage from "@/components/layout/FallbackPage";
import { getImageUrl } from "../utils/getImageUrl";
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const isDev = process.env.NODE_ENV === "development";
async function getContactData() {
  try {
    const res = await fetch(`${BASE_URL}/api/contact-us`, {
      // ✅ ADD: Revalidate every 60 seconds
      next: { revalidate: 60 },

      // ✅ KEEP: The timeout protection we added earlier
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error("Failed to fetch contact page data", res.status);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching contact page data:", err);
    return null;
  }
}

// 2. SEO SECTION (The invisible <head> part)
export async function generateMetadata(props, parent) {
  const data = await getContactData();

  // Resolve the Parent (Layout) Metadata
  const parentMetadata = await parent;

  // Find the SEO component inside the sections
  const seoSection = data?.sections?.find(
    (s) => s.__component === "shared.seo"
  );

  // Return the object using your helper (This goes to the <head>)
  return SeoHelper(seoSection, parentMetadata);
}

export default async function Contact() {
  const data = await getContactData();

 if (!data) {
    return <FallbackPage />;
  }

  // --- Extract sections safely ---
  const coverData = data?.sections?.find(
    (s) => s.__component === "shared.cover-image"
  );
  const bodyImage = data?.bodyImage;

  return (
    <>
      {coverData && <CoverImage data={coverData} />}
      <section className="lg:mx-[10%] px-[5%] my-12 md:my-24">
        <div className="mb-12 md:mb-28">
          <h1 className="text-yellow text-2xl md:text-4xl lg:text-[57px] lg:leading-[68px] font-extrabold">
            {data.title ? data.title : "GET IN TOUCH"}
          </h1>
          <p className="text-white text-2xl md:text-4xl lg:text-[57px] lg:leading-[68px] font-medium">
            {data.subTitle ? data.subTitle : "CONTACT US"}
          </p>
        </div>
        <ContactForm />
      </section>
      {bodyImage && (
        <div className="w-full max-h-[650px] overflow-hidden">
          <Image
            src={getImageUrl(bodyImage.url)}
            alt={bodyImage.alternativeText}
            width={1440}
            height={650}
            unoptimized={isDev}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </>
  );
}
