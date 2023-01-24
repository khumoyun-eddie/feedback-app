import React from 'react'
import BulbIcon from "../../bulb.svg";
import Button from '../Button/Button';

const HomeHeader = () => {
  return (
    <div className='py-[23px] pr-4 pl-6 bg-gray-700 rounded-[10px] flex items-center'>
    <img
      src={BulbIcon}
      alt=''
    />
    <h3 className="text-h3 text-white font-bold ml-4 mr-[38px]">6 Suggestions</h3>
    <div className="text-white">Headless ui dropdown</div>
    <Button btnType='purple' className='ml-auto' to='/new-feedback'>+ Add Feedback</Button>
  </div>
  )
}

export default HomeHeader