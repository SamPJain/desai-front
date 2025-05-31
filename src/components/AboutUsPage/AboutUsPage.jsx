import React, { useState, useEffect } from "react";
import aboutUsHeader from "../../images/AboutUs.jpg";
import { useLocation } from "react-router-dom";
import CompoHeader from "../common/CompoHeader";
import About from "../About/About";
import secImg from "../../images/TriasseaIcon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import bgImage from "../../images/aboutus-back.png";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { imageUrls } from "./aboutdata";
import { GiThreeLeaves } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faCogs, faAward } from '@fortawesome/free-solid-svg-icons';
import WhatsappButton from "../WhatsappButton/WhatsappButton";

import "./AboutUsPage.css";
import PhoneButton from "../PhoneButton/PhoneButton";

const AboutUsPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getSlidesPerView = () => {
    if (screenWidth <= 360) {
      return 3; // For mobile screens
    } else if (screenWidth <= 540) {
      return 4; // For tablet screens
    } else {
      return 6; // For laptop screens
    }
  };

  return (
    <div className="dark:bg-gray-900">
      <PhoneButton />
      <WhatsappButton />
      <section className="p-5 mt-16 dark:bg-gray-900 dark:text-white">
        <CompoHeader name="About Us" image={aboutUsHeader} color="text-pink-600" />
      </section>

      <section className="p-5 dark:bg-gray-900 dark:text-white grid grid-cols-1 mb-10 mt-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative">
            <img src={bgImage} className="opacity-15" alt="" />
            <div className="dark:text-gray-100 absolute top-[10%] left-0 ml-4 mr-8 mb-6 md:ml-1 lg:ml-2">
                <span className="flex justify-start items-center gap-1">
                  <img className="w-6" src={secImg} alt="" />
                  <h3 className="text-2xl md:text-2xl lg:text-2xl antialiased font-sans">
                    Why Choose Us
                  </h3>
                </span>
                <h1 className="mt-5 form-heading text-[30px] md:text-[50px] text-green-700 dark:text-white font-extrabold leading-none tracking-tight text-green-900 dark:text-white md:text-4xl">
                  We Are Different
                </h1>
                <p className="mt-6 text-gray-700 my-1 text-lg dark:text-gray-100 md:text-[20px]">
                  At Desai Group, we believe that excellence is not just a goal—it’s our standard. Our clients choose us because:
                </p>
                <ul className="my-1 mt-4 text-lg bg-white dark:bg-gray-900 dark:text-white">
                  <li><p className="text-orange-600 font-bold">Premium Quality</p> – <span className="text-green-900 dark:text-gray-100">Every product is fresh, crunchy, and flavorful, backed by the stringent quality checks</span></li>
                  <li><p className="text-orange-600 font-bold">Tailored Solutions</p> – <span className="text-green-900 dark:text-gray-100">We customize every detail, from product formulation to packaging and labeling </span></li>
                  <li><p className="text-orange-600 font-bold"> Reliable Logistics</p> – <span className="text-green-900 dark:text-gray-100">Our end-to-end supply chain includes temperature-controlled storage, fast dispatch, and international shipping support</span></li>
                  <li><p className="text-orange-600 font-bold"> Customer-Centric Approach</p> – <span className="text-green-900 dark:text-gray-100">We value long-term partnerships, offering responsive service and transparent communication at every stage</span></li>
                </ul>
              </div>
          </div>

        <div className=" dark:text-gray-100 p-[2%] grid grid-cols-1 md:grid-cols-2 gap-4 mt-[550px] md:mt-0 lg:ml-10 lg:mt-28 ml-6 text-black">
          <div className="aboutus-grid m-2">
            <div className="aboutus-small flex flex-row mt-5 justify-between gap-40 text-5xl">
              <GiThreeLeaves className="symbol1" />
              <h1 className="">01</h1>
            </div>
            <div>
              <h1 className="aboutus-heading text-xl">100% Natural</h1>
            </div>
          </div>

          <div className="aboutus-grid m-2">
            <div className="aboutus-small flex flex-row mt-5 justify-between gap-40 text-5xl">
              <FontAwesomeIcon className="symbol1" icon={faCogs} />
              <h1 className="">02</h1>
            </div>

            <div>
              <h1 className="aboutus-heading text-xl">High-Tech Processing</h1>
            </div>
          </div>

          <div className="aboutus-grid m-2">
            <div className="aboutus-small flex flex-row mt-5 justify-between gap-40 text-5xl">
              <FontAwesomeIcon className="symbol1" icon={faTruck} />
              <h1 className="">03</h1>
            </div>

            <div>
              <h1 className="aboutus-heading text-xl">State-of-the-Art Logistics</h1>
            </div>
          </div>

          <div className="aboutus-grid m-2">
            <div className="aboutus-small flex flex-row mt-5 justify-between gap-40 text-5xl">
              <FontAwesomeIcon className="symbol1" icon={faAward} />
              <h1 className="">04</h1>
            </div>
            <div className="mt-4">
              <h1 className="aboutus-heading text-xl">Best Quality Product</h1>
            </div>
          </div>
        </div>
      </section>


      <section className="mb-10 mt-[100px] important">
        <About />
      </section>

      <section className="mt-20 main-aboutus">
        <h2 className="text-center leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="py-5 sm:py-10">
          <div className="bg-orange-400 mx-auto max-w-8xl">
            <Swiper
              slidesPerView={getSlidesPerView()}
              spaceBetween={30}
              modules={[Autoplay]}
              className="About-mySwiper"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {imageUrls.map((imageUrl, index) => (
                <SwiperSlide key={index} className="about-swiper-slide">
                  <img
                    className="transition duration-300 opacity-50 hover:opacity-100 transform"
                    src={imageUrl}
                    alt={`Brand ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
