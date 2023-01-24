import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const SideBar = () => {
  return (
    <div className='flex-grow-0 flex-shrink-0 w-[255px] flex flex-col gap-6'>
        <div className='p-6 pt-[62px] flex flex-col items-start justify-end bg-gradient-radial rounded-[10px]'>
          <h2 className='text-lg font-bold text-white'>Frontend Mentor</h2>
          <p className='text-sm font-medium text-white'>Feedback Board</p>
        </div>
        <div className='bg-white p-6 flex gap-2 flex-wrap rounded-[10px]'>
          <Button btnType='element' className='active'>All</Button>
          <Button btnType='element' >UI</Button>
          <Button btnType='element' >UX</Button>
          <Button btnType='element' >Enhancement</Button>
          <Button btnType='element' >Bug</Button>
          <Button btnType='element' >Feature</Button>
        </div>
        <div className='bg-white p-6 flex gap-2 flex-wrap rounded-[10px]'>
          <div className='w-[100%] flex justify-between items-center'>
            <h3 className='text-h3 font-bold text-gray-800'>Roadmap</h3>
            <Link to='/roadmap' className='text-blue font-semibold text-xs underline '>
              View
            </Link>
          </div>
          <div className='w-full space-y-2'>
            <div className='w-full flex items-center justify-between'>
              <span className='w-2 h-2 rounded-full bg-red mr-4'>&nbsp;</span>
              <p className='text-base text-gray-600 flex-auto'>Planned</p>
              <p className='font-bold text-base text-gray-600'>2</p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <span className='w-2 h-2 rounded-full bg-purple mr-4'>&nbsp;</span>
              <p className='text-base text-gray-600 flex-auto'>In-Progress</p>
              <p className='font-bold text-base text-gray-600'>3</p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <span className='w-2 h-2 rounded-full bg-blue-light mr-4'>&nbsp;</span>
              <p className='text-base text-gray-600 flex-auto'>Live</p>
              <p className='font-bold text-base text-gray-600'>1</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SideBar