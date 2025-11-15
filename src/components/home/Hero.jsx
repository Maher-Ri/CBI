export default function Hero() {
  return (
    <section className="hero-section w-full h-[120vh] flex flex-col items-start justify-start bg-contain bg-top bg-no-repeat pt-[28%]">
      <div className="text-start text-white pl-[200px] max-w-[1000px] flex flex-col items-start justify-start gap-12">
        <h1 className="text-5xl lg:text-[57px] font-extrabold">
          NOUS TRANSFORMONS VOTRE DATA
          <br />
          <span className="font-medium">EN LEVIER DE CROISSANCE</span>
        </h1>
        <p className="text-1xl md:text-3xl">
          Nous aidons les entreprises à révéler des informations précieuses
          grâce à une analyse de données avancée, un conseil stratégique et des
          rapports exploitables
        </p>
        <button className="px-6 py-3 text-2xl font-medium rounded-lg transition-all duration-400 ease-in-out bg-gradient-to-r via-lightRed from-transparent to-gray text-babyBlue hover:from-babyBlue hover:to-gray hover:text-white focus:outline-none border-2 border-white">
          EN SAVOIR PLUS
        </button>
      </div>
    </section>
  );
}
