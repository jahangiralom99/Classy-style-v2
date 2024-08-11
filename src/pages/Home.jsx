import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../components/banner/Banner";
import PopularCategory from "../components/popularCategory/PopularCategory";
import Trending from "../components/trending/Trending";
import AdsImages from "../components/adsImages/AdsImages";
import HomeDecor from "../components/homeDecor/HomeDecor";
import {useContext} from "react";
import Title from "../components/title/Title";
import {GroupsContext, ItemContext, WebContext} from "../App";

const Home = () => {
  const grpData = useContext(GroupsContext);
  const webItmData = useContext(WebContext);
  const itemData = useContext(ItemContext);
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">
      <Title title="home" />
      <Banner />
      <PopularCategory grpData={grpData} />
      <Trending grpData={grpData} webItmData={webItmData} itemData={itemData} />
      <AdsImages />
      <Trending grpData={grpData} webItmData={webItmData} itemData={itemData} />
      <AdsImages />
      <HomeDecor grpData={grpData} webItmData={webItmData} itemData={itemData} />
    </div>
  );
};

export default Home;
