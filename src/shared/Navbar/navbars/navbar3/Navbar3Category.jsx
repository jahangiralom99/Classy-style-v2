import {useContext} from "react";
import {IoIosArrowDown} from "react-icons/io";
import {Link} from "react-router-dom";
import {GroupsContext} from "../../../../App";

const Navbar3Category = () => {
  const grpData = useContext(GroupsContext);

  return (
    <>
      <li className=" p-4 group ">
        <span className="flex uppercase items-center text-white font-bold gap-1">
          ALl Category <IoIosArrowDown />
        </span>
        <div className="absolute m-4 md:top-10 shadow-lg border bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
          <ul className="grid grid-cols-10 p-3 gap-5">
            {grpData
              .filter((main) => main.is_group == 1 && main.name !== "Grocery")
              .map((group, index) => (
                <li className="flex flex-col gap-1" key={index}>
                  <h1 className="font-bold">{group.name}</h1>
                  {grpData
                    .filter((main) => main.is_group == 0)
                    .map((item, idx) => {
                      if (item.parent_item_group == group.name) {
                        return (
                          <Link key={idx} to={`category/${idx}`}>
                            {item.name}
                          </Link>
                        );
                      }
                    })}
                </li>
              ))}
          </ul>
        </div>
      </li>

      {grpData
        .filter((main) => main.is_group == 1 && main.name !== "Grocery")
        .slice(0, 7)
        .map((group, index) => (
          <li className="relative p-4 group " key={index}>
            <div className="flex uppercase items-center text-white font-bold gap-1">
              {group.name} <IoIosArrowDown />
            </div>
            <div className="absolute md:top-10 bg-white shadow-lg border left-0 mt-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
              <ul className="flex p-6 gap-28 px-8">
                <li className="flex flex-col gap-2 w-40">
                  <h1 className="font-bold">{group.name}</h1>
                  {grpData
                    .filter((main) => main.is_group == 0)
                    .map((item, idx) => {
                      if (item.parent_item_group == group.name) {
                        return (
                          <Link key={idx} to={`category/${idx}`}>
                            {item.name}
                          </Link>
                        );
                      }
                    })}
                </li>
              </ul>
            </div>
          </li>
        ))}

      <li>
        <Link to="/allCategory" className="flex uppercase items-center text-white font-bold gap-1">
          All Product <IoIosArrowDown />
        </Link>
      </li>
    </>
  );
};

export default Navbar3Category;
