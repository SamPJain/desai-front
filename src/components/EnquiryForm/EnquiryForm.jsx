import React, { useState, useEffect, useMemo } from 'react';
import "./EnquiryForm.css";
import { useLocation } from 'react-router-dom';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import emailjs from '@emailjs/browser';
import sideImage from "../../images/contactus_side.jpg"

const EnquiryForm = () => {
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

  return(
    <div>
      <section className="grid grid-cols-1 mb-10 mt-20 mr-5 md:grid-cols-2 lg:grid-cols-2 gap-8 md:px-6  ">
        <form onSubmit={sendEmail} className="ml-6 mb-4">
          <div className="mb-10 md:ml-1 lg:ml-2 ">
            <span className="flex justify-start ml-0 items-center gap-1">
              {/* <img className="w-6" src={sideImage} alt="" /> */}
              {/* <h1 className="text-xl md:text-xl lg:text-xl antialiased font-sans">
                Contact Us
              </h1> */}
            </span>
            <h1 className="text-green-700 form-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl flex items-center">
              Make An Enquiry
            </h1>
          </div>

          <div className="grid grid-cols-2 justify-center items-center">
            <label
              htmlFor="name"
              className="block text-sm ml-2 font-medium text-gray-700"
            >
              Name
            </label>

            <label
              htmlFor="email"
              className="block text-sm ml-4 font-medium text-gray-700"
            >
              Email Address
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="name"
              name="name"
              required={true}
              placeholder="Your Full Name"
              className="mt-1 p-2 border border-gray-300 rounded-md text-gray-700"
            />
            <input
              type="email"
              id="email"
              name="email"
              required={true}
              placeholder="Your Email address"
              className="mt-1 p-2 border border-gray-300 rounded-md text-gray-700"
            />
          </div>
          <div className="grid grid-cols-2 justify-center items-center">
            <label
              htmlFor="phone"
              className="block mt-4 ml-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <label
              htmlFor="country"
              className="block mt-4 ml-4 text-sm font-medium text-gray-700"
            >
              Country
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              required={true}
              placeholder="Phone"
              className="mt-1 p-2 border border-gray-300 rounded-md text-gray-700"
            />

            <Select className="text-gray-700" id="country" name="country" options={options} value={country} onChange={changeHandler} />
          </div>

          <div className="grid grid-cols-1 justify-center items-center">
            <label
              htmlFor="subject"
              className="block mt-4 ml-2 text-sm font-medium text-gray-700"
            >
              Subject
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              id="subject"
              name="subject"
              required={true}
              placeholder="Subject"
              className="mt-1 p-2 border border-gray-300 rounded-md text-gray-700"
            />
          </div>

          <label
            htmlFor="message"
            className="block mt-4 ml-2 text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 w-full h-[200px] border border-gray-300 rounded-md text-gray-700"
            placeholder="Type your message here"
            style={{ resize: "none" }}
          ></textarea>
          
          <button type="submit" className="submitButton" value="Send" disabled={isSubmitting}>
            Submit
          </button>
          {stateMessage && <p>{stateMessage}</p>}
        </form>

        {/* <div className="last-imgDiv mt-8 md:mt-0 lg:ml-10 lg:mt-5">
          <img
            className="final-img rounded-md w-[600px] h-[600px]"
            src={sideImage}
            alt=""
          />
        </div> */}
      </section>
    </div>
  );
}
export default EnquiryForm;
