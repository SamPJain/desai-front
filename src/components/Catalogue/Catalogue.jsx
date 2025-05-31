import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import CompoHeader from "../common/CompoHeader";
import { useNavigate } from "react-router-dom";
import catalogue from "../../images/catalogue1.png";
import "./catalogue.css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import PhoneButton from "../PhoneButton/PhoneButton";
import secImg from "../../images/TriasseaIcon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { imageUrls } from "../AboutUsPage/aboutdata";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/project";

const Catalogue = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(1);

  const handclick1 = () => {
    setState(1);
  };
  const handclick2 = () => {
    setState(2);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Fetch projects from API
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // Add this function if not imported
  const getSlidesPerView = () => {
    const width = window.innerWidth;
    if (width <= 360) return 3;
    if (width <= 540) return 4;
    return 6;
  };

  return (
    <div>
      <PhoneButton />
      <WhatsappButton />
      <CompoHeader name="Catalogue" color="text-pink-600" />

      <section className="mb-20">
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto lg:max-w-none max-w-2xl">
              <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
                {products.map((callout) => (
                  <div key={callout._id} className="group relative">
                    <div className="project-content relative w-full h-[440px] mb-8 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                      {/* Add product name overlay at the top */}
                      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 p-2 z-10">
                        <h3 className="text-2xl font-bold text-white text-center">
                          {callout.product_name}
                        </h3>
                      </div>

                      <img
                        src={callout.title_image || "/Media/default.png"}
                        alt={callout.product_name}
                        className="h-[440px] rounded-lg w-full object-cover object-center"
                      />
                      {/* Hover overlay remains unchanged */}
                      <div
                        className="absolute top-0 bottom-0 left-0 right-0 project-detail bg-green-600 opacity-0 transition-all duration-500 ease-linear transform hover:scale-110 hover:opacity-60 flex flex-col justify-center items-center text-center px-10"
                        onClick={() => navigate(`/projectdetail/${callout._id}`)}
                      >
                        
                        <h3 className="text-3xl font-semibold text-white mb-2">
                          {callout.product_name}
                        </h3>
                        <p className="text-white text-base">
                          {callout.product_range_description}
                        </p>
                        <IoArrowForward className="absolute bottom-5 right-5 text-white font-bold text-4xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex content-center justify-center gap-1">
        <button
          onClick={handclick1}
          className={
            state !== 2
              ? `hidden`
              : `text-green-600 hover:text-white border border-gray-400 hover:bg-green-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>

        <button
          onClick={handclick1}
          type="button"
          style={{
            backgroundColor: state === 1 ? "#16a34a" : "",
            color: state === 1 ? "white" : "",
          }}
          className={`text-green-600 border border-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 ${
            state === 1
              ? "!hover:bg-green-600"
              : "text-green-600 hover:text-white hover:bg-green-600"
          }`}
        >
          1
        </button>

        <button
          onClick={handclick2}
          type="button"
          style={{
            backgroundColor: state === 2 ? "#16a34a" : "",
            color: state === 2 ? "white" : "",
          }}
          className={`text-green-600 border border-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 ${
            state === 2
              ? "!hover:bg-green-600"
              : "text-green-600 hover:text-white hover:bg-green-600"
          }`}
        >
          2
        </button>

        <button
          onClick={handclick2}
          type="button"
          className={
            state === 2
              ? `hidden`
              : `text-green-600 hover:text-white border border-gray-400 hover:bg-green-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
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

export default Catalogue;