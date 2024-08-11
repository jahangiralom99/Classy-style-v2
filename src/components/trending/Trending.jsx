import {useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination} from "swiper/modules";
import "swiper/css/virtual";
import {Virtual} from "swiper/modules";
import {Link} from "react-router-dom";
import {base_url} from "../../utilities/dataPanel";

const Trending = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const {grpData, webItmData, itemData} = props;

  const rate = (id) => {
    let fil = itemData.find((item) => item.item_code === id);
    return fil?.standard_rate;
  };

  return (
    <div className="mt-16">
      <div>
        <h1 className="text-3xl text-center font-bold text-[#f7941f]">Trending</h1>
        <p className="border mt-5"> </p>
        <hr className="bg-red-600 h-1 -mt-1 mx-auto w-64" />

        <div>
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList role="tablist" className="text-center md:block flex  justify-center tabs-bordered bg-transparent ">
              {grpData
                .filter((main) => main.is_group == 0)
                .slice(0, 18)
                .map((grp, index) => (
                  <Tab
                    key={index}
                    role="tab"
                    className="tab md:h-8 h-14 w-[60px] overflow-hidden text-left md:text-base text-[10px] md:w-auto  bg-transparent focus:outline-none focus:ring focus:ring-violet-300">
                    {grp.name}
                  </Tab>
                ))}
            </TabList>

            {grpData
              .filter((main) => main.is_group == 0)
              .slice(0, 18)
              .map((grp, index) => (
                <TabPanel key={index} className="bg-transparent ">
                  {/* sm view */}
                  <div className="md:hidden">
                    <Swiper
                      virtual
                      slidesPerView={2}
                      spaceBetween={230}
                      modules={[Virtual, Pagination]}
                      pagination={{
                        clickable: true,
                      }}
                      className="mySwiper">
                      {webItmData
                        .filter((item) => item.item_group === grp.name)
                        .map((itm, index) => (
                          <SwiperSlide key={index} virtualIndex={index} className="md:ml-0 ml-4">
                            <Link to={`/product/${itm?.item_code}`}>
                              <div className="card w-72 bg-white shadow-xl my-5 hover:-translate-y-2 duration-200 h-[500px] ">
                                <figure>
                                  <img src={`${base_url + itm?.thumbnail}`} className="h-80 w-full" />
                                </figure>
                                <div className="card-body">
                                  <h2 className="text-center font-medium">
                                    {itm.item_group}
                                    <br />
                                    {itm.web_item_name}
                                  </h2>
                                  <p className="text-center  font-medium"> {rate(itm.item_code)} TK</p>
                                  <div className="card-actions justify-center">
                                    <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
                                      Add to cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                  {/* md view */}
                  <div className="md:block lg:hidden hidden md:pl-10">
                    <Swiper
                      virtual
                      slidesPerView={2}
                      spaceBetween={30}
                      modules={[Virtual, Pagination]}
                      pagination={{
                        clickable: true,
                      }}
                      className="mySwiper">
                      {webItmData
                        .filter((item) => item.item_group === grp.name)
                        .map((itm, index) => (
                          <SwiperSlide key={index} virtualIndex={index} className="md:ml-0 ml-4">
                            <Link to={`/product/${itm?.item_code}`}>
                              <div className="card w-72 bg-white shadow-xl my-5 hover:-translate-y-2 duration-200 h-[500px]">
                                <figure>
                                  <img src={`${base_url + itm?.thumbnail}`} className="h-80 w-full" />
                                </figure>
                                <div className="card-body">
                                  <h2 className="text-center font-medium">
                                    {itm.item_group}
                                    <br />
                                    {itm.web_item_name}
                                  </h2>
                                  <p className="text-center  font-medium"> {rate(itm.item_code)} TK</p>
                                  <div className="card-actions justify-center">
                                    <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
                                      Add to cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                  {/* 1024px view */}
                  <div className="md:hidden hidden-1100-tab1 lg:block hidden md:pl-10">
                    <Swiper
                      virtual
                      slidesPerView={3}
                      spaceBetween={30}
                      modules={[Virtual, Pagination]}
                      pagination={{
                        clickable: true,
                        breakpoints: {
                          1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                          },
                        },
                      }}
                      className="mySwiper">
                      {webItmData
                        .filter((item) => item.item_group === grp.name)
                        .map((itm, index) => (
                          <SwiperSlide key={index} virtualIndex={index} className="md:ml-0 ml-4">
                            <Link to={`/product/${itm?.item_code}`}>
                              <div className="card w-72 bg-white shadow-xl my-5 hover:-translate-y-2 duration-200 h-[500px]">
                                <figure>
                                  <img src={`${base_url + itm?.thumbnail}`} className="h-80 w-full" />
                                </figure>
                                <div className="card-body">
                                  <h2 className="text-center font-medium">
                                    {itm.item_group}
                                    <br />
                                    {itm.web_item_name}
                                  </h2>
                                  <p className="text-center  font-medium"> {rate(itm.item_code)} TK</p>
                                  <div className="card-actions justify-center">
                                    <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
                                      Add to cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                  {/* 1100px view */}
                  <div className="hidden hidden-lg-block-tab1">
                    <Swiper
                      virtual
                      slidesPerView={4}
                      spaceBetween={30}
                      modules={[Virtual, Pagination]}
                      pagination={{
                        clickable: true,
                        breakpoints: {
                          1100: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                          },
                        },
                      }}
                      className="mySwiper">
                      {webItmData
                        .filter((item) => item.item_group === grp.name)
                        .map((itm, index) => (
                          <SwiperSlide key={index} virtualIndex={index} className="md:ml-0 ml-4">
                            <Link to={`/product/${itm?.item_code}`}>
                              <div className="card w-72 bg-white shadow-xl my-5 hover:-translate-y-2 duration-200 h-[500px]">
                                <figure>
                                  <img src={`${base_url + itm?.thumbnail}`} className="h-80 w-full" />
                                </figure>
                                <div className="card-body">
                                  <h2 className="text-center font-medium">
                                    {itm.item_group}
                                    <br />
                                    {itm.web_item_name}
                                  </h2>
                                  <p className="text-center  font-medium"> {rate(itm.item_code)} TK</p>
                                  <div className="card-actions justify-center">
                                    <button className="px-3 py-2 bg-[#27aae1] transition ease-in duration-200 rounded-full text-xs  text-white border-2  focus:outline-none">
                                      Add to cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                </TabPanel>
              ))}
          </Tabs>
        </div>

        {/* tab area end */}
      </div>
    </div>
  );
};

export default Trending;
