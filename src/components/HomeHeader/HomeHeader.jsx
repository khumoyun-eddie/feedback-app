import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BulbIcon from "../../bulb.svg";
import { FeedBackContext } from "../../contexts/feedbackContext";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";

const HomeHeader = () => {
  const navigate = useNavigate();
  const { sortFeedBacks } = useContext(FeedBackContext);

  const goToNewFeedback = () => {
    navigate("/new-feedback");
  };
  const sortByArray = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];
  return (
    <div className='py-[23px] pr-4 pl-6 bg-gray-700 rounded-[10px] flex items-center'>
      <img
        src={BulbIcon}
        alt=''
      />
      <h3 className='text-h3 text-white font-bold ml-4 mr-[38px]'>6 Suggestions</h3>
      {/* <div className="text-white">Headless ui dropdown</div> */}
      <DropDown
        data={sortByArray}
        handleChanges={sortFeedBacks}
        textColor='text-gray-400'
      />
      <Button
        btnType='purple'
        className='ml-auto'
        onClick={goToNewFeedback}
      >
        + Add Feedback
      </Button>
    </div>
  );
};

export default HomeHeader;
