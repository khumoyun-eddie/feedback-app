import React from "react";
import FeedBacks from "../components/FeedBacks/FeedBacks";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import SideBar from "../components/SideBar/SideBar";
const Home = () => {
  return (
    <div className='container max-w-[1110px] mx-auto mt-24 flex items-start gap-[30px]'>
      <SideBar />
      <div className='flex-auto flex flex-col gap-6'>
        <HomeHeader />
        <FeedBacks />
      </div>
    </div>
  );
};

export default Home;
