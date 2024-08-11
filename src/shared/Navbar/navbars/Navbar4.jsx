/* eslint-disable react/no-unescaped-entities */
import {useContext} from "react";
import {BsThreeDots} from "react-icons/bs";
import {MdMenu} from "react-icons/md";
import {TbCategoryMinus} from "react-icons/tb";
import {GroupsContext} from "../../../App";
import {Link} from "react-router-dom";
import {base_url} from "../../../utilities/dataPanel";

const Navbar4 = () => {
  const grpData = useContext(GroupsContext);

  return (
    <div className="fixed hidden lg:top-0 md:block lg:left-0 z-[9999] h-screen md:h-full group w-20 bg-white shadow-2xl rounded-md hover:w-64 transform duration-500 px-4 p-3 ">
      <div className="">
        <div className="flex flex-col  gap-8">
          <div className="p-2 border w-14 bg-[#2794E9EA] transform duration-500 group-hover:w-56 rounded-full">
            <div className="flex items-center">
              <div>
                <MdMenu className="text-4xl text-white " />
              </div>
              <div className="group-hover:ml-3 hidden group-hover:block font-bold text-white">Menu</div>
            </div>
          </div>
          <Link to="/allCategory" className="flex  hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <TbCategoryMinus className="text-2xl ml-2" />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">All Category</div>
          </Link>
          {grpData
            .filter((main) => main.is_group == 0)
            .slice(0, 15)
            .map((group, index) => (
              <Link to={`/category/${index}`} key={index}>
                <div className="flex -m-2 items-center hover:text-[#2794E9EA] cursor-pointer">
                  <div>
                    <img className="w-8 ml-2" src={`${base_url + group.image}`} alt="" />
                  </div>
                  <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">{group.name}</div>
                </div>
              </Link>
            ))}

          <Link to="/allCategory" className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <BsThreeDots className="text-2xl ml-2" />
            </div>
            <div className="group-hover:ml-3 hidden group-hover:block  font-bold">
              <span className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">All Product</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar4;
