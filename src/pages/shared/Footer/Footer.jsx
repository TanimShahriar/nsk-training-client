import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer_design border-red-600 h-[60vh] mt-10" style={{ backgroundImage: 'url(https://i.ibb.co/bddxBnX/Footer.png)' }}>



      <div>
        <img className=" w-24 lg:w-32 h-16 lg:h-24 mb-2 " src="https://i.ibb.co/tYvTCn1/Screenshot-1.png" alt="" />
        <p className="text-2xl font-bold text-[#013982] mb-5">NSK Training Institute</p>
        <div className="">
          <p>Confidence is the main ingredient of our product</p>
          <p>design, get it if you need it</p>
        </div>
      </div>

      <div className="grid mt-5">
        <h6 className="border-b-2 border-[#6cb9e9] text-xl font-medium text-[#285b9e]">Quick Link</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Courses</a>
        <a className="link link-hover">Success</a>
        <a className="link link-hover">Job</a>
        <a className="link link-hover">CV Bank</a>
      </div>

      <div className="grid mt-5">
        <h6 className="border-b-2 border-[#6cb9e9] text-xl font-medium text-[#285b9e]">Special Attach</h6>
        <a className="link link-hover">Job</a>
        <a className="link link-hover">CV Bank</a>
      </div>

      <div>
        <h6 className=" text-[#6cb9e9] text-xl font-semibold mb-4">Follow Us</h6>
        <div className="  gap-2 flex">
          <FaFacebookF className="hover:bg-white duration-300 text-3xl p-1 rounded-md bg-[#6cb9e9] cursor-pointer" />
          <FaTwitterSquare className="hover:bg-white duration-300 text-3xl p-1 rounded-md bg-[#6cb9e9] cursor-pointer" />
          <FaWhatsapp className="hover:bg-white duration-300 text-3xl p-1 rounded-md bg-[#6cb9e9] cursor-pointer" />
          <FaYoutube className="hover:bg-white duration-300 text-3xl p-1 rounded-md bg-[#6cb9e9] cursor-pointer" />
          <FaTiktok className="hover:bg-white duration-300 text-3xl p-1 rounded-md bg-[#6cb9e9] cursor-pointer" />

        </div>
      </div>

    </footer>
  );
};

export default Footer;