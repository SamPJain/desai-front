import React from "react";
import "./homeabout.css";
import Product from "../Products/Product";

const HomeAbout = () => {

    return (
        <section className="bg-white text-black dark:bg-gray-900 dark:text-white mt-10 mx-4">
            <div className="md:ml-8 lg:ml-2 pt-6 mb-5">
                <h1 className="mb-4 ml-6 text-xl lg:text-5xl text-green-700 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
                    Who We Are
                </h1>
                <p className="font-medium ml-6 mb-4 text-sm md:text-base lg:text-lg">
                    At Desai Group, we are proud to represent the finest of India’s agricultural heritage by delivering high-quality gherkins to global markets. With our headquarters strategically located in Bangalore, Karnataka — one of India’s leading hubs for agribusiness and export logistics — we are ideally positioned to serve clients across continents with efficiency, reliability, and unmatched product excellence.
                </p>
                <p className="font-medium ml-6 mb-4 text-sm md:text-base lg:text-lg">
                    We specialize in the export of premium gherkins, grown with care, processed with precision, and packaged to meet the diverse requirements of international buyers. Our mission is clear: to bring the taste of India to the world while maintaining the highest standards of quality, safety and sustainability.
                </p>
            </div>

            <div className="md:ml-8 lg:ml-2 pt-6 mb-10">
                <h1 className="mb-4 ml-6 text-xl lg:text-5xl text-green-700 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
                    Our Mission
                </h1>
                <p className="font-medium ml-6 mb-4 text-sm md:text-base lg:text-lg">
                    To deliver the best of Indian agriculture to global markets by fostering trust, ensuring uncompromising quality, and driving innovation at every step.
                </p>
            </div>

            <div className="md:ml-8 lg:ml-2 pt-6 mb-10">
                <h1 className="mb-4 ml-6 text-xl lg:text-5xl text-green-700 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
                    Our Vision
                </h1>
                <p className="font-medium ml-6 mb-4 text-sm md:text-base lg:text-lg">
                    To become the global benchmark for gherkin exports by consistently exceeding the expectations of our clients and empowering Indian farmers through sustainable and profitable partnerships
                </p>
            </div>

            <a
                href="/aboutus"
                className="inline-flex items-center justify-center px-5 py-3 text-base md:text-lg lg:text-xl font-medium text-center text-white bg-red-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-6 mt-2 mb-10"
            >
                Read More
                <svg
                    className="w-5 h-5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </a>
            <div className="md:ml-8 lg:ml-2 pt-4 mb-10 mt-12">
                <h1 className="mb-4 ml-6 text-xl lg:text-5xl text-green-700 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
                    Product Range
                </h1>
                <p className="font-medium mt-8 ml-6 text-sm md:text-base lg:text-lg">
                    Our range of gherkin products is designed to cater to both industrial and retail markets. We offer:
                </p>
                <a
                href="/catalogue"
                className="inline-flex items-center justify-center px-5 py-3 text-base md:text-lg lg:text-xl font-medium text-center text-white bg-red-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-6 mt-8 mb-10"
            >
                View All Products
                <svg
                    className="w-5 h-5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </a>
                <br></br>
                <Product />
                <br></br>
                <p className="font-medium ml-6 mb-4 text-sm md:text-base lg:text-lg">
                    Each batch is rigorously inspected and tested to ensure consistency in flavor, crunch, and appearance, meeting the highest international standards packaged to meet the diverse requirements of international buyers. Our mission is clear: to bring the taste of India to the world while maintaining the highest standards of quality, safety and sustainability.
                </p>
            </div>
        </section>
    );
};

export default HomeAbout;

