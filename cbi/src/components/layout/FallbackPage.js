export default function FallbackPage() {
  return (
      <section className="mb-8 pt-[140px] md:pt-[200px] px-[5%] lg:px-[15%] flex flex-col items-start justify-start gap-8">
        <h1 className="text-yellow text-2xl md:text-3xl lg:text-[57px] lg:leading-[64px] font-extrabold">
          CBI Services
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-3xl">
          We are currently experiencing high traffic or system maintenance. 
          Please contact us directly for immediate assistance.
        </p>
        <a 
          href="/contact" 
          className="px-8 py-3 bg-yellow/90 text-mainBlue font-bold rounded-lg hover:bg-yellow transition"
        >
          CONTACT US
        </a>
      </section>
  );
}
