import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import "./WhatsappButton.css"; // Import your CSS file for styling

const WhatsappButton = () => {return (
    <a 
      href="https://wa.me/919274095445?text=Hello"  // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 cursor-pointer"
    >
      <IoLogoWhatsapp size={30} />
    </a>
    );
}

export default WhatsappButton;