import { Link } from "react-router-dom";
import Navbar2icon from "./Navbar2icon";
import SearchFn from "./SearchFn";

const Navbar2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 bg-[#F7941F] md:bg-transparent">
      <div className="flex md:flex-row flex-col justify-between gap-2 items-center">
        <Link to="/">
          <img
            className="lg:w-28 md:w-20 ml-24  border hidden md:block"
            src="https://i.ibb.co/KG68zms/Screenshot-2024-05-19-160207.png"
            alt=""
          />
        </Link>
        <div className="flex md:flex-row gap-3 flex-col-reverse justify-between items-center md:my-6 mb-2">
          <SearchFn />
          <div className="hidden md:block">
            <Navbar2icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
