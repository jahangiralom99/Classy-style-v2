import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import slider1 from "../../assets/slider1.jpg";
import {useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {Link} from "react-router-dom";
import {CiHeart} from "react-icons/ci";
import {IoSearch} from "react-icons/io5";
import {TiArrowShuffle} from "react-icons/ti";
import {base_url} from "../../utilities/dataPanel";
const HomeDecor = (props) => {
  const {grpData, webItmData, itemData} = props;
  const [tabIndex, setTabIndex] = useState(0);

  const rate = (id) => {
    let fil = itemData.find((item) => item.item_code === id);
    return fil?.standard_rate;
  };

  return (
    <section className="lg:grid lg:grid-cols-12 justify-items-center gap-5 place-content-center pt-10 flex flex-col justify-center items-center  ">
      <div className="lg:hidden w-full ">
        <h1 className="text-3xl text-center font-bold text-[#f7941f] pb-5">Trending</h1>
        <p className="border"> </p>
        <hr
          className="bg-red-600 h-1 -mt-1  mx-auto
           w-64"
        />
      </div>
      <section className=" lg:w-64 w-72 mr-10 col-span-2 pt-20  lg:-mt-72 xl-mt-32  md:mx-0 mx-auto xl:mt-32">
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} className="">
          <div>
            <img className="h-[500px]  " src={slider1} />
          </div>
          <div>
            <img className="h-[500px]" src={slider1} />
          </div>
          <div>
            <img className="h-[500px]" src={slider1} />
          </div>
        </Carousel>
      </section>

      {/* card part start */}

      <section className="col-span-10 ">
        <div className="mt-16">
          <div>
            <div className="hidden lg:block">
              <h1 className="text-3xl text-center font-bold text-[#f7941f]">Trending</h1>
              <p className="border mt-5"> </p>
              <hr
                className="bg-red-600 h-1 -mt-1 mx-auto
           w-64"
              />
            </div>

            {/* tab area start */}

            <div className="">
              <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList role="tablist" className="text-center md:block flex flex-wrap  justify-center tabs-bordered bg-transparent mt-10  ">
                  {grpData
                    .filter((main) => main.is_group == 0)
                    .slice(0, 10)
                    .map((grp, index) => (
                      <Tab key={index} role="tab" className="tab md:h-8 h-14  overflow-hidden text-left text-[8px] md:text-xl md:w-auto  bg-transparent  ">
                        {grp.name}
                      </Tab>
                    ))}
                </TabList>

                {grpData
                  .filter((main) => main.is_group == 0)
                  .slice(0, 10)
                  .map((grp, index) => (
                    <TabPanel key={index}>
                      <section className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:gap-10 gap-4 md:grid-cols-2 mt-12 md:ml-5 lg:ml-20 px-4 ">
                        {webItmData
                          .filter((item) => item.item_group === grp.name)
                          .map((itm, index) => (
                            <Link to={`/item/${itm?.item_code}`} key={index}>
                              <div className="relative  text-center group transform duration-500 cursor-pointer flex flex-col justify-center items-center">
                                <div className="absolute hidden  group-hover:block md:top-8 lg:left-48 md:left-64 left-[70px] rounded-md  bg-white ">
                                  <div className="flex flex-col items-center justify-center gap-4 ">
                                    <div data-tip="Compare" className="tooltip tooltip-left">
                                      <TiArrowShuffle className="text-2xl" />
                                    </div>
                                    <div data-tip="Search" className="tooltip tooltip-left">
                                      <IoSearch className="text-2xl" />
                                    </div>
                                    <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
                                      <CiHeart className="text-2xl" />
                                    </div>
                                  </div>
                                </div>
                                <img className="rounded-md w-60 h-72" src={`${base_url + itm?.thumbnail}`} alt="" />

                                <p className="md:text-base text-sm my-5 font-medium">
                                  {itm.web_item_name.length > 20 ? itm.web_item_name.slice(0, 20) + "..." : itm.web_item_name}
                                </p>
                                <h2 className="font-semibold ">
                                  <span className="text-2xl font-bold">&#2547;</span> {rate(itm.item_code)}
                                </h2>

                                <div className="mt-8 flex md:flex-row flex-col gap-3 items-center justify-start">
                                  <div>
                                    <Link tto={`/product/${itm?.item_code}`}>
                                      <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
                                        Add to cart
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </section>
                    </TabPanel>
                  ))}
              </Tabs>
            </div>

            {/* tab area end */}
          </div>
        </div>
      </section>

      {/* card part end */}
    </section>
  );
};

export default HomeDecor;
