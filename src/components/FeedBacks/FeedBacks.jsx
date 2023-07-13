import React, { useContext, useState } from 'react'
import { FeedBackContext } from '../../contexts/feedbackContext';
import EmptyFeedBack from './EmptyFeedBack';
import FeedBackItem from './FeedBackItem/FeedBackItem';
const FeedBacks = () => {
  const {sortedFeedbacks} = useContext(FeedBackContext)

  return (
    <>
      {sortedFeedbacks.length !== 0 ? (sortedFeedbacks.map((feed)=>(
        <FeedBackItem key={feed.id} feed={feed} />
      ))) : (
       <EmptyFeedBack />
      )} 
    </>
  )
}

export default FeedBacks