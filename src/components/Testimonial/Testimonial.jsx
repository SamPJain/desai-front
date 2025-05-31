import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { GoStarFill } from "react-icons/go";
const testimonialData = [
  {
    description:
      "Working with Desai Group has transformed our gherkin supply chain. Their consistent quality and reliable delivery have helped us maintain our position as a leading food distributor in Germany. Their HACCP certification and quality control measures give us complete confidence.",
    imgurl: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Klaus Weber",
    profession: "Procurement Director",
  },
  {
    description:
      "As a major US food processing company, finding reliable international suppliers is crucial. Desai Group's commitment to quality, transparent communication, and ability to handle large volumes has made them our preferred gherkin supplier for the past 5 years.",
    imgurl: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Michael Roberts",
    profession: "Entrepreneur in Food Industry",
  },
  {
    description:
      "The consistency in product quality and their ability to meet strict European import standards sets Desai Group apart. Their sustainable farming practices and fair trade policies align perfectly with our company values. Excellent partner for our pickle production.",
    imgurl: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Pierre Dupont",
    profession: "CEO",
  },
  {
    description:
      "We've been importing gherkins from Desai Group for our nationwide retail chain since a long time. Their competitive pricing, quality assurance, and flexible packaging options have helped us grow our pickle category by 40% year over year.",
    imgurl: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "David Thompson",
    profession: "Import Manager",
  },
];
const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 668);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: !isMobile ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="mb-4 ml-6 text-xl lg:text-5xl text-green-700 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Testimonials
        </h1>
        <div className="md:px-4 p-1 py-6 testimonial-box">
          <Slider {...settings}>
            {testimonialData.map((elm, index) => (
              <div key={index} className="md:p-4 p-2 md:w-1/2 w-full bg-transparent">
                <div
                  className={`h-full text-black p-8 rounded-lg  ${
                    index % 2 === 0 ? "card-test" : "card-test2"
                  } shadow-lg`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-green-900 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <div className="flex gap-2 mb-1">
                    <GoStarFill size={17} className="text-yellow-500" />
                    <GoStarFill size={17} className="text-yellow-500" />
                    <GoStarFill size={17} className="text-yellow-500" />
                    <GoStarFill size={17} className="text-yellow-500" />
                    <GoStarFill size={17} className="text-yellow-500" />
                  </div>
                  <p className="leading-relaxed mb-6">{elm.description}</p>
                  <div href="#" className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={elm.imgurl}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium">{elm.name}</span>
                      <span className="text-orange-300 text-sm">
                        {elm.profession}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
