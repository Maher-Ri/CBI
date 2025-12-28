import Image from "next/image";
import { getImageUrl } from "@/app/utils/getImageUrl";
export default function Services({ data }) {
  // Make sure data.services exists
  const services = data?.services || [];
  const isDev = process.env.NODE_ENV === "development";
  return (
    <section className="py-16 lg:py-32">
      <div className="w-full px-[10%] sm:px-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <a
              key={service.id}
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-white transform transition duration-500 hover:scale-[1.05]"
            >
              <Image
                src={getImageUrl(service.image.url)}
                alt={service.title}
                width={405}
                height={598}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                unoptimized={isDev}
                className="object-cover w-full h-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-yellow via-gray/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

              <div className="absolute bottom-8 left-[5%] z-10 text-mainBlue text-start w-[90%]">
                <h3 className="font-extrabold text-3xl lg:text-[30px] xl:text-[40px] 2xl:text-[50px] lg:leading-[36px] xl:leading-[50px] 2xl:leading-[60px] transition-transform duration-500 origin-bottom-left group-hover:-translate-y-2">
                  {service.title}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div
                      suppressHydrationWarning={true}
                      className="text-xl lg:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ease-in-out py-2"
                    >
                      {service.description}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
