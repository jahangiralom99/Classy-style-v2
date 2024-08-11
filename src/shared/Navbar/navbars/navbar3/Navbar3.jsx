import Navbar3Category from "./Navbar3Category";

const Navbar3 = () => {
  return (
    <div className=" bg-[#f7941f] lg:flex items-center hidden  relative z-10">
      <div className="max-w-screen-xl mx-auto  ">
        <ul className="flex items-center gap-1 text-sm">
          <Navbar3Category />
        </ul>
      </div>
    </div>
  );
};

export default Navbar3;
