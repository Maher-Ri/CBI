"use client";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import SwiperSection from "../components/home/Swiper";
import Clients from "../components/home/Clients";
import Seo from "../components/utils/Seo";
import UseAxios from "../components/hooks/UseAxios";
import Loading from "../components/layout//Loading";
import Error from "../components/layout//Error";

export default function Home() {
  const base = process.env.REACT_APP_STRAPI_URL;
  const { loading, error, data } = UseAxios(`${base}/api/home`);
  if (loading) return <Loading />;
  if (error) return <Error />;
  // useEffect(() => {
  //   document.title = "Home • CBI Project";
  // }, []);

  return (
    <div className="home-page font-sans text-gray-900 leading-relaxed bg-mainBlue">
      {data.sections?.map((section, index) => {
        switch (section.__component) {
          case "shared.seo":
            return <Seo key={index} data={section} />;

          case "shared.hero":
            return <Hero key={index} data={section} />;

          case "shared.services":
            return <Services key={index} data={section} />;

          case "shared.slider":
            return <SwiperSection key={index} data={section} />;

          case "shared.clients":
            return <Clients key={index} data={section} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
