import JobCard from "@/components/JobCard";
import { SeoHelper } from "../utils/SeoHelper";
import CarriereHeader from "@/components/CarriereHeader";
import FallbackPage from "@/components/layout/FallbackPage";
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function getCarrieresData() {
  try {
    const res = await fetch(`${BASE_URL}/api/carriere`, {
      // ✅ ADD: Revalidate every 60 seconds
      next: { revalidate: 60 },

      // ✅ KEEP: The timeout protection we added earlier
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error("Failed to fetch Carrieres page data", res.status);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching Carrieres page data:", err);
    return null;
  }
}

// 2. SEO SECTION (The invisible <head> part)
export async function generateMetadata(props, parent) {
  const data = await getCarrieresData();

  // Resolve the Parent (Layout) Metadata
  const parentMetadata = await parent;

  // Find the SEO component inside the sections
  const seoSection = data?.sections?.find(
    (s) => s.__component === "shared.seo"
  );

  // Return the object using your helper (This goes to the <head>)
  return SeoHelper(seoSection, parentMetadata);
}

export default async function Carrieres() {
  const data = await getCarrieresData();

  const jobsData = data?.sections?.find((s) => s.__component === "shared.jobs");

  // If fetch failed, handle gracefully (optional)
  if (!data) {
    return <FallbackPage />;
  }

  return (
    <section>
      {data && <CarriereHeader data={data} />}
      <div className="flex flex-col gap-6 md:gap-12 mb-12 md:mb-24">
        {jobsData && jobsData.jobs.length > 0 ? (
          jobsData.jobs.map((job) => <JobCard key={job.id} data={job} />)
        ) : (
          <p className="mx-[5%] xl:mx-[15%] p-4 overflow-hidden rounded-2xl bg-yellow/20 text-yellow font-medium text-base md:text-lg lg:text-xl">
            No job opportunities are currently available. Please check back
            later for new postings.
          </p>
        )}
      </div>
    </section>
  );
}
