import React from 'react'
import CommentReplyItem from '../CommentReplyItem/CommentReplyItem';

const CommentReplies = ({replies, commentId}) => {
  return (
    <div className='ml-10'>
        {replies?.map((reply,i)=>(
            <CommentReplyItem key={i} reply={reply}/>
        ))}
    </div>
  )
}

export default CommentReplies