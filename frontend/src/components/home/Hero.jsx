export default function Hero(data) {
  const base = process.env.REACT_APP_STRAPI_URL;
  const heroData = data.data;
  return (
    <section
      style={{ backgroundImage: `url(${base}${heroData.image.url})` }}
      className="w-full h-screen px-[5%] lg:px-0 pb-16 flex flex-col items-start justify-end bg-cover bg-top bg-no-repeat">
      <div className="text-start text-white lg:pl-[15%] lg:max-w-[1000px] flex flex-col items-start justify-start gap-8 lg:gap-8">
        <h1 className="text-2xl lg:text-[57px] lg:leading-[57px] font-extrabold">
          {heroData.boldTitle}
          <br />
          <span className="font-medium">{heroData.lightTitle}</span>
        </h1>
        <p className="text-base md:text-3xl">{heroData.subtitle}</p>
        <a
          href={heroData.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-base lg:text-2xl font-medium uppercase rounded-lg transition-all duration-400 ease-in-out bg-gradient-to-r via-lightRed from-transparent to-gray text-babyBlue hover:from-babyBlue hover:to-gray hover:text-white focus:outline-none border-2 border-white"
        >
          {heroData.ctaText}
        </a>
      </div>
    </section>
  );
}
