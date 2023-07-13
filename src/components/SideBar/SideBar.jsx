import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import CategoryFilters from "../CategoryFilters/CategoryFilters";

const SideBar = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <div className=' w-full tablet:w-[255px] gap-6 tablet:sticky top-4 grid grid-flow-col tablet:grid-flow-row'>
      <div className='p-6 pt-[62px] flex flex-col items-start justify-end bg-gradient-radial rounded-[10px] '>
        <h2 className='text-lg font-bold text-white'>Frontend Mentor</h2>
        <p className='text-sm font-medium text-white'>Feedback Board</p>
      </div>
      <CategoryFilters />
      <div className='bg-white p-6 flex gap-2 flex-wrap rounded-[10px]'>
        <div className='w-[100%] flex justify-between items-center'>
          <h3 className='font-bold text-gray-800 text-h3'>Roadmap</h3>
          <Link
            to='/roadmap'
            className='text-xs font-semibold underline text-blue '
          >
            View
          </Link>
        </div>
        <div className='w-full space-y-2'>
          <div className='flex items-center justify-between w-full'>
            <span className='w-2 h-2 mr-4 rounded-full bg-red'>&nbsp;</span>
            <p className='flex-auto text-base text-gray-600'>Planned</p>
            <p className='text-base font-bold text-gray-600'>2</p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <span className='w-2 h-2 mr-4 rounded-full bg-purple'>&nbsp;</span>
            <p className='flex-auto text-base text-gray-600'>In-Progress</p>
            <p className='text-base font-bold text-gray-600'>3</p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <span className='w-2 h-2 mr-4 rounded-full bg-blue-light'>&nbsp;</span>
            <p className='flex-auto text-base text-gray-600'>Live</p>
            <p className='text-base font-bold text-gray-600'>1</p>
          </div>
        </div>
      </div>
      <div className='hidden tablet:inline-flex '>
        {currentUser && (
          <Button
            btnType='cancel'
            className='flex-1 col-span-2 text-center'
            onClick={signOutHandler}
          >
            Log Out
          </Button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
