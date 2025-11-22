export default function Services(data) {
  const services = data.data.services;
  const base = process.env.REACT_APP_STRAPI_URL;
  return (
    <section className="py-16 lg:py-32">
      <div className="w-full px-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => (
            <a
              key={service.id}
              href="/CBI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-white transform transition duration-300 hover:scale-[1.01]"
            >
              <img
                src={`${base}${service.image.url}`}
                alt={service.title}
                loading="lazy"
                className="relative inset-0 w-full object-cover"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 group-hover:bg-gradient-to-tr group-hover:from-babyBlue/60 group-hover:via-red/30 group-hover:to-transparent transition-colors"></div>

              <div className="absolute bottom-8 left-[5%] z-10 text-mainBlue text-start w-[90%]">
                <h3 className=" font-bold text-3xl lg:text-[30px] xl:text-[40px] 2xl:text-[50px] lg:leading-[36px] xl:leading-[60px] transition-all duration-500">
                  {service.title}
                </h3>
                <p
                  className="h-[0px] transform translate-y-[100%] overflow-hidden opacity-0 text-xl lg:text-3xl 
                                group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-[0%] transition-all duration-500"
                >
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
