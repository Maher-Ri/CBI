import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import SwiperSection from "../components/home/Swiper";
import Footer from "../components/layout/Footer";

export default function Home() {
    useEffect(() => {
        document.title = "Home • CBI Project";
    }, []);

    return (
        <div className="home-page font-sans text-gray-900 leading-relaxed bg-mainBlue">

<Hero />
<Services />
<SwiperSection />
            <main className="max-w-[1100px] mx-auto my-8 px-4">
                <section className="flex flex-col gap-5">
                    <div className="p-8 bg-gradient-to-r from-slate-50 to-white rounded-lg">
                        <h2 className="m-0 mb-2 text-2xl">Welcome to the CBI Project</h2>
                        <p className="m-0 text-gray-700">
                            A simple starting page for your React app. Replace this content with your project's home
                            content.
                        </p>
                        <div className="mt-4">
                            <a
                                href="#features"
                                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>

                    <section
                        id="features"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                    >
                        <article className="p-4 border border-gray-100 rounded-md">
                            <h3 className="mt-0 mb-2">Easy to Customize</h3>
                            <p className="m-0">Swap components, add routes, and adjust styles to fit your needs.</p>
                        </article>

                        <article className="p-4 border border-gray-100 rounded-md">
                            <h3 className="mt-0 mb-2">Lightweight</h3>
                            <p className="m-0">Small, focused component that serves as a clean starting point.</p>
                        </article>

                        <article className="p-4 border border-gray-100 rounded-md">
                            <h3 className="mt-0 mb-2">Accessible</h3>
                            <p className="m-0">Semantic HTML and straightforward structure make accessibility easier.</p>
                        </article>
                    </section>
                </section>
            </main>

<Footer />
        </div>
    );
}