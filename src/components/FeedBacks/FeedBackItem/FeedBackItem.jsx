import React from "react";
import { useNavigate } from "react-router-dom";
import ChatIcon from "./chat.svg";

const FeedBackItem = ({ feed }) => {
  const { title, description, category, comments, upvotes } = feed;
  const navigate = useNavigate();
  const handleToGoDetails = () => navigate(`feedbacks/${feed.id}`);
  
  return (
    <div className='bg-white rounded-[10px] flex items-center px-8 py-7'>
      <div className='self-start flex flex-col items-center bg-gray-400 px-[9px] py-2 rounded-[10px] mr-10 cursor-pointer w-10'>
        <span className='w-2 h-2 mb-3 font-bold text-blue'>^</span>
        <p className='text-xs font-bold text-gray-800'>{upvotes}</p>
      </div>
      <div>
        <h3 className='font-bold text-gray-800 text-h3'>{title}</h3>
        <p className='mt-1 mb-3 text-base text-gray-600'>{description}</p>
        <button className='capitalize btn-elements'>{category}</button>
      </div>
      <div
        className='flex items-center gap-2 ml-auto cursor-pointer'
        onClick={handleToGoDetails}
      >
        <img
          src={ChatIcon}
          alt=''
        />
        <p className='text-base font-bold text-gray-800'>{comments && comments.length}</p>
      </div>
    </div>
  );
};

export default FeedBackItem;
