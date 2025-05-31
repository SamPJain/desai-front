import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./galleryslider.css";

const GallerySlider = ({ images }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 668);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: !isMobile && images.length>1 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
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
        <h1 className="text-3xl font-extrabold title-font text-green-700 mb-12 text-center">
          Product Gallery
        </h1>
        <div className="md:px-4 p-1 py-6 testimonial-box w-[300px] md:w-full">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div
                key={index}
                className="md:p-4 p-2 md:w-1/2 w-full bg-transparent"
              >
                <div
                  className={`h-full text-black p-8 rounded-lg ${
                    index % 2 === 0 ? "card-test" : "card-test2"
                  } shadow-lg`}
                >
                  <div className="flex justify-center items-center mb-6">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="rounded-lg  w-full h-[300px] object-cover"
                    />
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

export default GallerySlider;