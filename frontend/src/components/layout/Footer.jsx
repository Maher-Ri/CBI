import logo from "../../assets/Logo.svg";
import EmailSubscribtion from "../utils/EmailSubscribtion";


export default function Footer() {
  
  return (
    <footer className="bg-mainBlue text-white pt-16 pb-8 ">
      {/* TOP SECTIONS */}
      <div className="w-full pl-[5%] lg:pl-[15%] pr-[5%] grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        {/* ABOUT CBI */}
        <div>
          <h3 className=" text-xl xl:text-3xl font-extrabold mb-6">
            ABOUT CBI
          </h3>
          <ul className="space-y-2 text-[17px] font-medium uppercase">
            <li>ACCUEIL</li>
            <li>À PROPOS</li>
            <li>SERVICES</li>
            <li>PROJETS</li>
            <li>CARRIERS</li>
          </ul>
        </div>

        {/* INFO */}
        <div>
          <h3 className="text-xl xl:text-3xl font-extrabold mb-6">INFO</h3>
          <ul className="space-y-6 text-[17px] font-medium">
            <li>
              30 Division, New York
              <br />
              NY 1000, USA
            </li>
            <li className="mt-4">+1 600 123 456 789</li>
            <li>info@cbi.com</li>
          </ul>
        </div>

        {/* STAY IN TOUCH */}
        <div>
          <h3 className="text-xl xl:text-3xl font-extrabold mb-6">
            STAY IN TOUCH
          </h3>

          {/* Email Input */}
          <EmailSubscribtion/>
          <span className="leading-none text-[17px] font-medium text-white/20 ">
            Share your email to get all new and
            <br className="hidden xl:block" />
            updates related to CBI
          </span>
          <ul className="space-y-2 text-[17px] font-medium mt-4">
            <li>CONTACT US</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t-2 border-white my-12 opacity-40 mx-[5%]"></div>

      {/* BOTTOM COPYRIGHT */}
      <div className="px-[5%] lg:px-[15%] flex flex-col md:flex-row gap-4 md:gap-0 justify-start items-center">
        <img src={logo} alt="CBI Logo" className="w-[52px]" />
        <p className="w-full text-base text-white/20 text-center md:pr-[52px]">
          Copyright 2024 CBI. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
