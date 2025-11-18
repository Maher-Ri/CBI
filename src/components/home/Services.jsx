import React from "react";
import service1 from "../../assets/analise.png";
import service2 from "../../assets/consiel.png";
import service3 from "../../assets/rapports.png";
const services = [
    {
        id: 1,
        title: "ANALYSE DE DONNEES",
        description:"transformer les données brutes en informations exploitables",
        url: "https://example.com/design",
        image: service1,
    },
    {
        id: 2,
        title: "CONSIEL",
        description:"Accompagner les entreprises avec des stratégies sur mesure",
        url: "https://example.com/development",
        image: service2,
    },
    {
        id: 3,
        title: "RAPPORTS",
        description:"Accompagner les entreprises avec des stratégies sur mesure",
        url: "https://example.com/marketing",
        image: service3,
    },
];

export default function Services() {
    return (
        <section className="py-16 lg:py-32">
            <div className="w-full px-[5%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {services.map((s) => (
                        <a
                            key={s.id}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.title}
                            className="group relative overflow-hidden rounded-2xl bg-white border-2 border-white transform transition duration-300 hover:scale-[1.01]"
                        >
                            {/* image as an <img> */}
                            <img
                                src={s.image}
                                alt={s.title}
                                loading="lazy"
                                className="relative inset-0 w-full object-cover"
                            />

                            {/* dark overlay */}
                            {/* <div className="absolute inset-0 group-hover:bg-white/50 transition-colors"></div> */}

                            {/* title absolute */}
                            <div className="absolute bottom-8 left-[5%] z-10 text-mainBlue text-start w-[90%]">
                                <h3 className=" font-bold text-3xl lg:text-[30px] xl:text-[40px] 2xl:text-[50px] lg:leading-[36px] xl:leading-[60px] transition-all duration-500">
                                    {s.title}
                                </h3>
                                <p className="h-[0px] transform translate-y-[100%] overflow-hidden opacity-0 text-xl lg:text-3xl group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-[0%] transition-all duration-500">{s.description}</p>
                            </div>
                             </a>
                    ))}
                </div>
            </div>
        </section>
    );
}