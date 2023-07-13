import React from "react";
import EmptyIcon from "./empty.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
const EmptyFeedBack = () => {
  const navigate = useNavigate();
  
  const goToNewFeedback = () => {
    navigate("/new-feedback");
  };
  return (
    <div className='h-[600px] w-full bg-white rounded-[10px] flex flex-col justify-center items-center px-[200px] text-center'>
      <img
        src={EmptyIcon}
        alt=''
      />
      <h1 className='text-gray-800 font-bold mt-[53px] mb-4'>There is no feedback yet</h1>
      <p className='text-gray-600 text-base mb-12'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
      </p>
      <Button btnType='purple' onClick={goToNewFeedback}>+ Add Feedback</Button>
    </div>
  );
};

export default EmptyFeedBack;
