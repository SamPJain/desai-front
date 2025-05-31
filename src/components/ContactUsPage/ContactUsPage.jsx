import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import contactUsImage from "../../images/contactus2.jpg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import "./ContactUsPage.css";
import CompoHeader from "../common/CompoHeader";
import countryList from 'react-select-country-list'
import { useState, useMemo } from 'react'
import emailjs from '@emailjs/browser';
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import PhoneButton from "../PhoneButton/PhoneButton";
import EnquiryForm from "../EnquiryForm/EnquiryForm";

const ContactUsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  const { pathname } = useLocation();

  const [country, setCountry] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = country => {
    setCountry(country)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div>
      <PhoneButton />
      <WhatsappButton />
      <CompoHeader name="Contact" color="text-pink-600" />

      <div className="main-box grid md:grid-cols-3 mb-[6%] gap-4 md:px-6">
        <div
          className="identity grid grid-cols-2"
          style={{
            backgroundColor: "rgb(248, 240, 232)",
          }}
        >
          <div className="flex justify-center items-center mr-20">
            <IoLocationOutline
              className="text-yellow-400"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="contact grid grid-cols-1 justify-center items-center">
            <p>Our Location</p>
            <h1 className="font-bold text-yellow-600 !important"><a href="https://maps.app.goo.gl/9DK4fi37ZejLdPoH6?g_st=aw" target="_blank">No 930,
 17th Main, 3rd Block, Rajajinagar,Bengaluru</a></h1>
            {/* </a> */}
          </div>
        </div>
        <div
          className="identity grid grid-cols-2 "
          style={{
            backgroundColor: "rgb(248, 240, 232)",
          }}
        >
          <div className="flex justify-center items-center mr-20  !important"> {/* Changed from mr-20 to mr-5 */}
            <MdOutlinePhoneInTalk
              className="text-red-500"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="contact grid grid-cols-1 justify-center items-center">
            <p>Hotline</p>
            <h1 className="font-bold text-red-500 text-2xl"><a href="tel:+919274095445">+91 9274095445</a></h1>
          </div>
        </div>
        <div
          className="identity grid grid-cols-2 "
          style={{
            backgroundColor: "rgb(202, 229, 247)",
          }}
        >
          <div className="flex justify-center items-center mr-20">
            <MdOutlineMailOutline
              className="text-pink-500"
              style={{ fontSize: "50px" }}
            />
          </div>
          <div className="contact grid grid-cols-1 justify-center items-center">
            <p>Email Address</p>
            <h1 className="font-bold text-pink-500 text-lg"><a href="mailto:info@desaigroupexim.com" target="_blank">info@desaigroupexim.com</a></h1>
          </div>
        </div>
      </div>
      <EnquiryForm/>
    </div>
  );
};

export default ContactUsPage;
