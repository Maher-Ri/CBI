import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/app/utils/getImageUrl";
import EmailSubscription from "../EmailSubscription";

export default function Footer({ data }) {
  return (
    <footer className="bg-mainBlue text-white pt-16 pb-8 ">
      {/* TOP SECTIONS */}
      <div className="w-full pl-[5%] lg:pl-[15%] pr-[5%] grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        {/* ABOUT CBI */}
        <div>
          <h3 className="text-yellow text-xl xl:text-3xl font-extrabold mb-6">
            ABOUT CBI
          </h3>
          <ul className="text-[17px] font-medium uppercase">
            {data?.primaryLinks.map((link, index) => (
              <li key={index}>
                <Link className="mylink py-[4px]" href={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* INFO */}
        <div>
          <h3 className="text-yellow text-xl xl:text-3xl font-extrabold mb-6">
            INFO
          </h3>
          <ul className="space-y-2 lg:space-y-6 text-[17px] font-medium">
            <li className="pb-2">
              <span className="py-[4px]">{data?.info?.address}</span>
            </li>
            <li>
              <a className="mylink py-[4px]" href={`tel:${data?.info?.phone}`}>
                {data?.info?.phone}
              </a>
            </li>
            <li>
              <a
                className="mylink py-[4px]"
                href={`mailto:${data?.info?.email}`}
              >
                {data?.info?.email}
              </a>
            </li>
          </ul>
        </div>

        {/* STAY IN TOUCH */}
        <div>
          <h3 className="text-yellow text-xl xl:text-3xl font-extrabold mb-6">
            STAY IN TOUCH
          </h3>

          {/* Email Input */}
          {/* <EmailSubscription /> */}
          <EmailSubscription />
          <span className="leading-none text-base font-medium text-white/20 ">
            Share your email to get all new and
            <br className="hidden xl:block" />
            updates related to CBI
          </span>
          <ul className="text-[17px] font-medium mt-4">
            {data?.secondaryLinks.map((link, index) => (
              <li key={index}>
                <Link className="mylink py-[4px]" href={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="border-t-2 border-yellow mt-12 md:mt-16 mb-8 mx-[5%]" />

      {/* BOTTOM COPYRIGHT */}
      <div className="w-full pl-[5%] lg:pl-[15%] pr-[5%] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 ">
        <Link href="/" className="col-span-1">
          <Image
            src={getImageUrl(data?.logo?.url)}
            width={123}
            height={35}
            alt="CBI Logo"
          />
        </Link>
        <p className="w-full text-base text-white/20 md:col-span-2 content-center">
          {data?.copyright}
        </p>
      </div>
    </footer>
  );
}
