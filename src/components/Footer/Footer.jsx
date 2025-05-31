import "./Footer.css";
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-grid">
      {/* Column 1: Quick Links */}
      <div className="footer-col">
        <h2 className="footer__title">Quick Links</h2>
        <ul className="footer__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalogue">Product catalogue</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactUs">Contact Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>

      {/* Column 2: Social Media */}
      <div className="footer-col">
        <h2 className="footer__title">Follow Us</h2>
        <div className="footer__social">
          <a href="https://wa.me/919274095445" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp className="socialmedia-icons" /></a>
          <a href="https://www.instagram.com/group.desai#" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="socialmedia-icons" /></a>
          <a href="https://www.linkedin.com/company/desaigroup25/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin className="socialmedia-icons" /></a>
        </div>
      </div>

      {/* Column 3: Contact Info */}
      <div className="footer-col">
        <h2 className="footer__title">Contact</h2>
        <address className="footer__contact">
        No 930, 17th Main, 3rd Block, Rajajinagar, Bengaluru, Karnataka - 560010 <br /><br />
          <a href="mailto:info@desaigroupexim.com" target="_blank">info@desaigroupexim.com</a><br />
          <a href="tel:+91 92740 95445" target="_blank">+91 92740 95445</a>
        </address>
      </div>

    </footer>
  );
}

export default Footer;
