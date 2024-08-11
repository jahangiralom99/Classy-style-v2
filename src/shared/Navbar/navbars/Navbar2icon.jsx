import { useContext } from "react";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
// import { TbCurrencyTaka } from "react-icons/tb";
import { TiArrowShuffle } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CartContext } from "../../../App";

const Navbar2icon = () => {

  const {cartItems} = useContext(CartContext);
  return (
    <div className="flex items-center gap-3 ml-3">
      <div className="border rounded-full p-2">
        <CiHeart className="text-2xl" />
      </div>
      <div className="border rounded-full p-2">
        <TiArrowShuffle className="text-2xl" />
      </div>
      <div className="border  py-1 px-1 rounded-full bg-[#27aae1] flex items-center gap-3">
        <Link to='/cart'>
        <div className="bg-white rounded-full p-1">
        <CiShoppingCart className="text-2xl " />
        </div>
        </Link>
        <div className="flex items-center">
        <span className="bg-[#27aae1] border-2 text-white font-bold px-2 py-[2px] rounded-full">{cartItems}</span>
        </div>
        
      </div>
      <Link to='/login'>
      <div className="border-2 border-[#27aae1] p-2 rounded-full">
        <CiUser className="text-2xl p-1" />
      </div>
      </Link>
    </div>
  );
};

export default Navbar2icon;
