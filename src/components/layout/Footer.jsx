export default function Footer() {
  return (
    <footer className="bg-mainBlue text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      {/* TOP SECTIONS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

        {/* ABOUT CBI */}
        <div>
          <h3 classname=" text-xl font-bold mb-6">ABOUT CBI</h3>
          <ul className="space-y-2 text-sm">
            <li>ACCUEIL</li>
            <li>À PROPOS</li>
            <li>SERVICES</li>
            <li>PROJETS</li>
            <li>CARRIERS</li>
          </ul>
        </div>

        {/* INFO */}
        <div>
          <h3 className="text-xl font-bold mb-6">INFO</h3>
          <ul className="space-y-2 text-sm">
            <li>30 Division, New York</li>
            <li>NY 1000, USA</li>
            <li className="mt-4">+1 600 123 456 789</li>
            <li>info@cbi.com</li>
          </ul>
        </div>

        {/* STAY IN TOUCH */}
        <div>
          <h3 className="text-xl font-bold mb-6">STAY IN TOUCH</h3>
          <p className="text-sm mb-4">Get News & Updates</p>

          {/* Email Input */}
          <div className="flex items-center border-b border-gray-400 pb-2 mb-6">
            <input
              type="email"
              placeholder="Share your email to get updates…"
              className="bg-transparent outline-none text-sm flex-1 placeholder-gray-300"
            />
            <button className="text-gray-300 hover:text-white transition">➤</button>
          </div>

          <ul className="space-y-2 text-sm">
            <li>CONTACT US</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-500 my-12 opacity-40"></div>

      {/* BOTTOM COPYRIGHT */}
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block border border-white px-4 py-1 mb-4 text-sm">
          CBI
        </div>
        <p className="text-xs text-gray-300">
          Copyright 2024 CBI. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
