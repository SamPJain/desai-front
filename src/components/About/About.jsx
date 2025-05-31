import React from "react";
import "./About.css";
import productImg from "../../images/product_range.jpg";
import processImg from "../../images/processing.png";
import sourcingImg from "../../images/sourcing.png";
import globalImg from "../../images/global.png";
import secImg from "../../images/TriasseaIcon.png";
import mainImage1 from "../../images/h1-banner01.jpg";
import mainImage2 from "../../images/cucumber1.jpg";
import mainImage3 from "../../images/gkins3.jpg";
import mainImage4 from "../../images/cucumber2.jpg";
import mainImage5 from "../../images/crop2.jpg";

const About = () => {
  const dataArray = [
    {
      image: productImg,
      tag: "Product Range",
      description1: "Our range of gherkin products is designed to cater to both industrial and retail markets. We offer",
      description2: "Each batch is rigorously inspected and tested to ensure consistency in flavor, crunch, and appearance, meeting the highest international standards",
      list: [
        "Gherkins in Brine",
        "Gherkins in Vinegar",
        "Gherkins in Acetic Acid"
      ],
    },
    {
      image: processImg,
      tag: "Processing Excellence",
      description1: "We operate state-of-the-art processing units that combine traditional knowledge with cutting-edge technology. Every facility is :",
      description2: "Whether you’re a bulk importer, brand owner, or distributor, we offer packaging and processing solutions tailored to your market needs",
      list: [
        "ISO and HACCP certified, ensuring adherence to global food safety regulations",
        "Equipped for custom packaging including bulk containers, retail jars, and private label solutions",
        "Staffed by skilled professionals committed to quality control and hygienic processing at every step"
      ]
    },
    {
      image: sourcingImg,
      tag: "Sourcing & Sustainability",
      description1: "Our success begins at the farm. We have built long-term partnerships with certified contract farmers who grow gherkins specifically for our export program. These farms follow strict agronomic practices, ensuring",
      description2: "This direct sourcing model allows us to maintain quality control from seed to shipment, while also contributing to India’s rural economy.",
      list: [
        "Traceable and sustainable farming methods",
        "Regular monitoring and quality audits",
        "Support for rural agricultural communities through training and fair pricing"
      ],
    },
    {
      image: globalImg,
      tag: "Global Reach",
      description1: "Our commitment to excellence has enabled us to expand our footprint across key international markets, including:",
      description2: "We continue to explore new markets, building trusted relationships with importers, food brands, and distribution partners worldwide.",
      list: [
        "Europe",
        "North America",
        "Asia",
      ]
    }
  ];

  return (
    <section className="pt-5 pb-5 dark:bg-gray-900 dark:text-gray-100 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3">
      <div className="md:ml-8 lg:ml-2 mr-8 md:col-span-2 lg:col-span-2">
        <span className="flex justify-start ml-6 items-center gap-2">
          <img className="w-8" src={secImg} alt="" />
          <h3 className="text-xl md:text-2xl lg:text-3xl antialiased font-sans">
            About Us
          </h3>
        </span>
        <h1 className="mt-5 mb-6 ml-6 text-xl lg:text-5xl font-extrabold leading-none tracking-tight text-green-700 dark:text-white md:text-4xl">
          Exporting India's Best to the World
        </h1>
        <p className="ml-6 text-gray-500 mb-4 text-sm md:text-base lg:text-lg">
          At Desai Group, we are proud to represent the finest of India’s agricultural heritage by delivering high-quality gherkins to global markets. With our headquarters strategically located in Bangalore, Karnataka — one of India’s leading hubs for agribusiness and export logistics — we are ideally positioned to serve clients across continents with efficiency, reliability, and unmatched product excellence.
        </p>
        <p className="ml-6 text-gray-500 mb-4 text-sm md:text-base lg:text-lg">
          We specialize in the export of premium gherkins, grown with care, processed with precision, and packaged to meet the diverse requirements of international buyers. Our mission is clear: to bring the taste of India to the world while maintaining the highest standards of quality, safety, and sustainability
        </p>
        <h1 className="mt-8 mb-6 ml-6 text-xl lg:text-5xl font-extrabold leading-none tracking-tight text-green-700 dark:text-white md:text-4xl">
          Our Mission
        </h1>
        <p className="ml-14 text-lg lg:text-xl md:text-xl">
          To deliver the best of Indian agriculture to global markets by fostering trust, ensuring uncompromising quality, and driving innovation at every step.
        </p>
        <h1 className="mt-8 mb-6 ml-6 text-xl lg:text-5xl font-extrabold leading-none tracking-tight text-green-700 dark:text-white md:text-4xl">
          Our Vision
        </h1>
        <p className="ml-14  mb-6 text-lg lg:text-xl md:text-xl">
          To become the global benchmark for gherkin exports by consistently exceeding the expectations of our clients and empowering Indian farmers through sustainable and profitable partnerships.
        </p>
        <h1 className="ml-6 mt-8 text-xl lg:text-5xl font-extrabold leading-none tracking-tight text-green-700 dark:text-white md:text-4xl">
          Our Focus
        </h1>


        <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-4">
          {dataArray.map((data, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center items-center gap-3 item-center mb-4 md:mb-6 lg:mb-5 mr-3 md:mr-6"
            >
              <img
                className="h-15 w-15 md:h-24 md:w-20 lg:h-23 lg:w-28 rounded-full bg-lime-100 hover:bg-orange-300 fill-white ml-3 md:ml-0"
                src={data.image}
                alt=""
              />
              <div className="mt-4 text-center md:text-left">
                <h4 className="text-lg lg:text-3xl md:text-2xl text-orange-500 hover:text-[#0a2945]">
                  {data.tag}
                </h4>
                <p className="bg-white  dark:bg-gray-900 dark:text-white mt-4 text-sm md:text-base lg:text-lg text-gray-700">
                  {data.description1}
                </p>
                <ul className="mt-2 text-green-700 text-sm md:text-base lg:text-lg">
                  {data.list && data.list.map((item, index) => (
                    <li key={index} className="list-disc ml-4">
                      <i>{item}</i>
                    </li>
                  ))}
                </ul>
                <p className="bg-white  dark:bg-gray-900 dark:text-white mt-2 text-sm md:text-base lg:text-lg text-gray-700">
                  {data.description2}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* <div className="image-container mt-8 md:mt-0 lg:ml-20 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-4 lg:col-span-4"> */}
      <div className="image-container mt-8 md:mt-0 lg:ml-12 lg:mt-20 grid grid-cols-1  md:col-span-1 lg:col-span-1">

        <img
          className="hover:scale-110 transition duration-500  w-full md:w-auto md:max-w-1/2"
          src="https://demo2.themelexus.com/farmor/wp-content/uploads/2023/09/h1-banner03.svg"
          alt=""
        />
        <img
          className="hover:scale-110 transition duration-500  w-64 ml-12  mt-4 md:mt-0 md:w-64 md:max-w-1/2 h-80"
          src={mainImage1}
          alt=""
        />
        <br></br>
        <img
          className="hover:scale-110 transition duration-500  w-64 ml-12 mt-56 md:mt-[500px] md:w-64 md:max-w-1/2 h-43 !important"
          src={mainImage2}
          alt=""
        />
        <img
          className="hover:scale-110 transition duration-500  w-64 ml-12 mt-20 md:mt-[200px] md:w-64 md:max-w-1/2 h-43"
          src={mainImage3}
          alt=""
        />
        <img
          className="hover:scale-110 transition duration-500   w-64 ml-12 mt-20 md:mt-[200px]  md:w-64 md:max-w-1/2 h-105"
          src={mainImage4}
          alt=""
        />

        <img
          className="hover:scale-110 transition duration-500   w-64 ml-12 mt-20 md:mt-[200px]  md:w-64 md:max-w-1/2 h-105"
          src={mainImage5}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
