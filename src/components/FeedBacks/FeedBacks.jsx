import React from 'react'
import FEEDS from '../../data.json'
import EmptyFeedBack from './EmptyFeedBack';
import FeedBackItem from './FeedBackItem/FeedBackItem';
const FeedBacks = () => {
  const feeds = []//Object.entries(FEEDS.feedbacks)
  return (
    <>
      {feeds.length!==0 ? (feeds.map((feed)=>(
        <FeedBackItem key={feed[0]} feed={feed[1]} />
      ))) : (
       <EmptyFeedBack />
      )} 
    </>
  )
}

export default FeedBacks