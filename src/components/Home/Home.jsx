import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useNavigate, useLocation } from "react-router-dom";
import HomeAbout from "../HomeAbout/HomeAbout";
import NHerosection from "../NHeroSection/NHerosection";
import Testimonial from "../Testimonial/Testimonial";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import PhoneButton from "../PhoneButton/PhoneButton";
import "./home.css";
import EnquiryForm from "../EnquiryForm/EnquiryForm";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      // Use useNavigate to navigate after loading
      navigate("/"); // or any other route you want to navigate to
    }
  }, [loading, navigate]);

  return (
    <div>
      {loading ? (
        <div className="bg-white dark:bg-gray-900 flex justify-center items-center h-screen bg-green-400">
          <BeatLoader className="text-gray-700" color={"#10B981"} size={50} aria-label="Loading Products"/>
        </div>
      ) : (
        <>
          <NHerosection />
          <HomeAbout />
          <Testimonial />
          <EnquiryForm />
          <WhatsappButton />
          <PhoneButton />
        </>
      )}
    </div>
  );
};

export default Home;
