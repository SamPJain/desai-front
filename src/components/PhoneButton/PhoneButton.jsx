import { MdOutlinePhone } from 'react-icons/md';
import "./PhoneButton.css"; // Import your CSS file for styling

const PhoneButton = () => {return (
    <a 
      href="tel:+91 92740 95445"  // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 cursor-pointer"
    >
      <MdOutlinePhone className="phone" size={30} />
    </a>
    );
}

export default PhoneButton;