import React, { useState, useEffect, useCallback } from "react"; // Import useCallback
import { useLocation } from "react-router-dom";
import galleryHead from "../../images/galleryHead.png";
import CompoHeader from "../common/CompoHeader";
import { media } from "./media";
import { IoClose } from "react-icons/io5";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./gallery.css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import PhoneButton from "../PhoneButton/PhoneButton";
import EnquiryForm from "../EnquiryForm/EnquiryForm";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  // Wrap handleArrowClick with useCallback
  const handleArrowClick = useCallback(
    (direction) => {
      if (currentIndex !== null) {
        let newIndex;
        if (direction === "left") {
          newIndex = currentIndex - 1;
          // Prevent going back from the first item
          if (newIndex >= 0) {
            setCurrentIndex(newIndex);
          }
        } else { // direction === "right"
          newIndex = currentIndex + 1;
          // Prevent going forward from the last item
          if (newIndex < media.length) {
            setCurrentIndex(newIndex);
          }
        }
      }
    },
    [currentIndex] // Dependencies for useCallback - only currentIndex is needed here
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentIndex !== null) {
        if (event.key === "Escape") {
          setCurrentIndex(null);
        } else if (event.key === "ArrowLeft") {
          handleArrowClick("left");
        } else if (event.key === "ArrowRight") {
          handleArrowClick("right");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, handleArrowClick]); // handleArrowClick is now stable

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <PhoneButton />
      <WhatsappButton />
      <section className="p-5 mt-16">
        <CompoHeader name="Gallery" image={galleryHead} color="text-pink-600" />
      </section>
      {/* <section className="mt-20">
        <div className="md:ml-1 lg:ml-2 ">
          <h1
            className="ml-12 form-heading flex justify-center items-center text-green-700"
            style={{ fontSize: "40px" }}
          >
            Our Exclusive Image Gallery
          </h1>
        </div>
      </section> */}

      <section className="gallery-container">
        <div className="media-container">
          {media.map((el, index) => (
            <div
              className="media" // This div is the container for the media
              key={index}
              onClick={() => handleImageClick(index)}
            >
              {el.type === "image" ? (
                <img src={el.url} alt="Some issue found" />
              ) : (
                <video src={el.url} controls muted alt="Some issue found"></video>
              )}
            </div>
          ))}
        </div>
        <div
          className="popup-media"
          style={{ display: currentIndex !== null ? "block" : "none" }}
        >
          <IoClose
            className="gallery-closeBtn hover:bg-red-600 transition-all transform ease-linear duration-300"
            onClick={() => setCurrentIndex(null)}
          />
          {currentIndex !== null && currentIndex !== 0 && (
            <GoArrowLeft
              className="gallery-leftBtn hover:bg-blue-500 transition-all transform ease-linear duration-300"
              onClick={() => handleArrowClick("left")}
            />
          )}
          {currentIndex !== null && currentIndex !== media.length - 1 && (
            <GoArrowRight
              className="gallery-rightBtn hover:bg-blue-500 transition-all transform ease-linear duration-300"
              onClick={() => handleArrowClick("right")}
            />
          )}

          {currentIndex !== null && (
            <>
              {media[currentIndex].type === "video" ? (
                <video src={media[currentIndex].url} muted autoPlay controls />
              ) : (
                <img src={media[currentIndex].url} alt="" />
              )}
            </>
          )}
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
};

export default Gallery;
