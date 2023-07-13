import React, { useState } from "react";
import CommentReplies from "../CommentReplies/CommentReplies";
import AddReplyForm from "../AddReplyForm/AddReplyForm";

const CommentItem = ({ comment, feedBackID }) => {
  const [isReply, setIsReply] = useState(false);
  const {
    content,
    user: { image, name, username },
    replies,
    id,
  } = comment;

  const replyOpenHandler = () => {
    setIsReply((prev) => !prev);
  };
  return (
    <div className='border-b border-gray-500 last:border-b-0'>
      <div className='grid grid-cols-[min-content_1fr] gap-x-8 gap-y-4 py-8'>
        <div className='w-10 h-10 row-span-3 overflow-hidden rounded-full'>
          <img
            className='w-full'
            src={image.includes("https") ? image : `./../../..${image.slice(1)}`}
            alt={name}
          />
        </div>
        <div className='flex justify-between'>
          <div>
            <h4 className='font-bold text-gray-800'>{name}</h4>
            <p className='text-gray-600 '>@{username}</p>
          </div>
          <p
            className='text-xs font-semibold cursor-pointer text-blue hover:underline'
            onClick={replyOpenHandler}
          >
            Reply
          </p>
        </div>
        <div>
          <p className='text-sm text-gray-600'>{content}</p>
        </div>
        {isReply && (
          <AddReplyForm
            replyingTo={username}
            commentID={id}
            handleReplySubmitted={(e)=>setIsReply(e)}
          />
        )}
      </div>
      {replies && (
        <CommentReplies
          replies={replies}
          commentId={id}
        />
      )}
    </div>
  );
};

export default CommentItem;
