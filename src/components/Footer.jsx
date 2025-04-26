import { FaChevronUp } from "react-icons/fa";
import logo from '../images/Logo.png'


const Footer = () => {
  return (
    <footer className=" text-gray-800 px-[16px]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:grid md:grid-cols-6 gap-8 border-b border-gray-300 pb-8">

          <div>
            <h4 className="font-semibold mb-4">Site Map</h4>
            <ul className="space-y-2 text-sm">
              <li>Homepage</li>
              <li>Product</li>
              <li>Services</li>
              <li>Technology</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Service Lineup 1</li>
              <li>Service Lineup 2</li>
              <li>Service Lineup 3</li>
              <li>Service Lineup 4</li>
              <li>Service Lineup 5</li>
              <li>Service Lineup 6</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Product Lineup 1</li>
              <li>Product Lineup 2</li>
              <li>Product Lineup 3</li>
              <li>Product Lineup 4</li>
              <li>Product Lineup 5</li>
              <li>Product Lineup 6</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Live Chat</li>
              <li>Email Support</li>
              <li>Product Refund</li>
              <li>Submit Feedback</li>
              <li>Help Ticket</li>
              <li>Call Center</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>HIPAA Notice</li>
              <li>Data Policy</li>
              <li>AI Privacy</li>
              <li>Terms & Conditions</li>
              <li>Lawyer’s Corner</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Pricing</h4>
            <ul className="space-y-2 text-sm">
              <li>Pricing Tier 1</li>
              <li>Pricing Tier 2</li>
              <li>Pricing Tier 3</li>
              <li>Pricing Tier 4</li>
              <li>Pricing Tier 5</li>
              <li>Pricing Tier 6</li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg"><img src={logo} alt="" /></span>
          </div>
          <div className="my-4 md:my-0">
            <button className="p-2 border rounded-full border-gray-300 hover:bg-gray-100 transition">
              <FaChevronUp size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-400">Copyright 2028 slothUI, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
