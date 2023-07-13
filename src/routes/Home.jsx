import React from "react";
import FeedBacks from "../components/FeedBacks/FeedBacks";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import SideBar from "../components/SideBar/SideBar";
const Home = () => {
  return (
    <>
      <SideBar />
      <div className='flex-auto flex flex-col gap-6'>
        <HomeHeader />
        <FeedBacks />
      </div>
    </>
  );
};

export default Home;
