import React from 'react'
import ChatIcon from './chat.svg'


const FeedBackItem = ({feed}) => {
 
  return (
    <div className="bg-white rounded-[10px] flex items-center px-8 py-7">
    <div className="self-start flex flex-col items-center bg-gray-400 px-[9px] py-2 rounded-[10px] mr-10">
      <span className="text-blue w-2 h-2 font-bold mb-3">^</span>
      <p className="text-gray-800 text-xs font-bold">{feed.upvotes}</p>
    </div>
    <div>
      <h3 className="text-h3 text-gray-800 font-bold">{feed.title}</h3>
      <p className="text-base text-gray-600 mt-1 mb-3">{feed.description}</p>
      <button className="btn-elements capitalize">{feed.category}</button>
    </div>
    <div className="ml-auto flex items-center gap-2">
      <img src={ChatIcon} alt="" />
      <p className="text-base font-bold text-gray-800">{feed.comments.length}</p>
    </div>
  </div>
  )
}

export default FeedBackItem