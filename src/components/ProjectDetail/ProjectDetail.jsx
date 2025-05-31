import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom/dist";
import "./projectdetail.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import PhoneButton from "../PhoneButton/PhoneButton";
import { imageUrls } from "../AboutUsPage/aboutdata"; // Adjust the path if needed
import GallerySlider from "../GallerySlider/GallerySlider";
import EnquiryForm from "../EnquiryForm/EnquiryForm";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/project";

const ProjectDetail = () => {
  const [product, setProducts] = useState(null);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getSlidesPerView = () => {
    const width = window.innerWidth;
    if (width <= 360) return 3;
    if (width <= 540) return 4;
    return 6;
  };

 useEffect(() => {
    fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.error("No product data found for ID:", id);
        return;
      }
      setProducts(data)
    }
  )}, [id]);

  return (
    <div>

      <div className="mt-16 md:px-[30px] px-[10px] py-8 flex flex-col items-center">
        {/* top img div */}
        <div className="w-full flex justify-center items-center mt-4 px-4 md:px-0">
          <div className="w-full md:w-[500px] h-[200px] md:h-[250px] relative overflow-hidden border rounded-lg">
            <img
              src={product.title_image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Update content container */}
        <div className="w-full mt-8 md:mt-14 max-w-4xl flex flex-col items-center px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-semibold my-4 md:my-8 text-green-700 text-center">
            About {product.product_name}
          </h2>
          <p className="text-xl opacity-[.8] mb-8  text-gray-700 text-center">
            {product.product_range_description}
          </p>

          <h3 className="text-3xl font-bold my-4 text-green-700 text-center">
            {product.product_name} Product Categories
          </h3>
          <p className="opacity-[.8] mb-8 text-xl text-gray-700 text-center">
            <ul className="list-disc ml-6 mb-1">
              {(Array.isArray(product.product_categories)
                ? product.product_categories
                : (product.product_categories || "").split(",")
              ).map((cat, idx) =>
                cat && cat.trim() ? (
                  <li key={idx} className="text-left mb-1">{cat.trim()}</li>
                ) : null
              )}
            </ul>
          </p>
        </div>

        <h3 className="text-3xl font-bold my-4 text-green-700 text-center">
          {product.product_name} Grades by Export Market
        </h3>

        {product.size_grades?.description && (
          <p className="opacity-[.8] mb-8 text-xl font-semibold text-gray-700 text-center">
            {product.size_grades.description}
          </p>
        )}
        {product.size_grades?.grades_by_market && (
          <div className="overflow-x-auto mb-4 flex justify-center">
            <table className="min-w-full md:min-w-[300px] border border-gray-300 rounded bg-green-50">
              <thead>
                <tr className="bg-green-100">
                  <th className="text-xl font-bold border px-4 py-2 text-left text-green-700">Market</th>
                  <th className="text-xl font-bold border px-4 py-2 text-left text-green-700">Grades</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.size_grades.grades_by_market).map(
                  ([market, grades]) => (
                    <tr key={market} className="even:bg-green-50 odd:bg-white">
                      <td className="text-xl border px-4 py-2 font-semibold text-gray-700">{market}</td>
                      <td className="text-xl border px-4 py-2 text-gray-700">
                        {Array.isArray(grades) ? (
                          <ul className="list-disc ml-4">
                            {grades.map((g, i) =>
                              g && g.trim() ? (
                                <li key={i}>{g.trim()}</li>
                              ) : null
                            )}
                          </ul>
                        ) : (
                          <span>{String(grades)}</span>
                        )}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}

        {product.size_grades?.custom_grades && (
          <p className="opacity-[.8] mb-8 text-[16px] text-gray-700 text-center">
            *{product.size_grades.custom_grades}
          </p>
        )}

        <h3 className="text-3xl font-bold my-4 text-green-700 text-center">
          Packaging Details
        </h3>
        {product.packing_details?.descriptions && (
          <p className="opacity-[.8] mb-4 text-xl font-semibold text-gray-700 text-center">
            {product.packing_details.descriptions}
            <ul className="list-disc list-inside pl-0 md:ml-6 md:text-base">
              {product.packing_details?.bulk_packaging && (
                <li>
                  <b className="text-xl font-bold text-zinc-900">Bulk Packaging</b>
                  <p className="text-xl font-semibold ml-6">{product.packing_details?.bulk_packaging}</p>
                </li>
              )}
              {product.packing_details?.retail_packaging && (
                <li>
                  <b className="text-xl font-bold text-zinc-900">Retails Packaging</b>
                  <p className="text-xl font-semibold ml-6">{product.packing_details?.retail_packaging}</p>
                </li>
              )}
            </ul>
          </p>
        )}

        <h3 className="text-3xl font-bold my-4 text-green-700 text-center">
          Certifications
        </h3>
        <p className="opacity-[.8] text-[16px] text-gray-700 text-center">
          {product.certifications?.standard_certifications && (
            <ul className="list-disc ml-6 opacity-[.8] text-xl font-semibold text-gray-700 text-center mb-4">
              {(Array.isArray(product.certifications.standard_certifications)
                ? product.certifications.standard_certifications
                : (product.certifications.standard_certifications || "").split(",")
              ).map((cert, idx) =>
                cert && cert.trim() ? (
                  <li key={idx}>{cert.trim()}</li>
                ) : null
              )}
            </ul>
          )}
        </p>
        <p className="opacity-[.8] mb-1 text-xl font-semibold text-gray-700 text-center">
          *{product.certifications?.additional_certifications}
        </p>
        
        {/* <NextPre
          id={id}
          currentProduct={product}
          projectsData={projectsData}
        /> */}
        <PhoneButton />
        <WhatsappButton />
        <GallerySlider
          images={
            typeof product.gallery_images === "string"
              ? product.gallery_images.split(",").map(img => img.trim()).filter(Boolean)
              : Array.isArray(product.gallery_images)
                ? product.gallery_images
                : []
          }
        />
      </div>

       <EnquiryForm />

      {/* Add this section just before the closing </div> of your main container */}
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

export default ProjectDetail;