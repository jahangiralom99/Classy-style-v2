import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavSocialIcon = () => {
  return (
    <div className="flex md:flex-row flex-row-reverse items-center  gap-2">
      <div className="text-[#365493] rounded-full  p-[2px]  md:p-2">
        <FaFacebook className="text-3xl md:w-10 w-5" />
      </div>
      <div className="bg-black rounded-full p-2 hidden md:block">
        <FaTiktok className="text-white " />
      </div>

      <Link to="/">
          <img
            className="md:hidden w-20 ml-3"
            src="https://i.ibb.co/KG68zms/Screenshot-2024-05-19-160207.png"
            alt=""
          />
        </Link>
      <div className="md:bg-[#CB2027] md:rounded-full rounded-md p-[2px] md:p-2  ">
        <FaYoutube className="md:text-white text-[#CB2027] w-5" />
      </div>
      <div className="bg-[#1EBEA5] rounded-full p-2 hidden md:block">
        <FaWhatsapp className="text-white" />
      </div>
      <div className="bg-[#F89A1E] rounded-full p-2 hidden md:block">
        <CgMail className="text-white" />
      </div>
    </div>
  );
};

export default NavSocialIcon;
