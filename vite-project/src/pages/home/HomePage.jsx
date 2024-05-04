
import Category from "../../components/category/Category";
import HeroSection from "../../components/herosection/HeroSection";
import HomePageProductCard from "../../components/homePageProductcard/HomePageProductCard";
import Layout from "../../components/layout/Layout";

import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
// import myContext from "../../context/myContext";
// import { useContext } from "react";

const HomePage = () => {
  //const context=useContext(myContext);
  //const name=context;
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
      
    </Layout>
  )
}

export default HomePage