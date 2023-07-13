import React from "react";

const CommentReplyItem = ({ reply }) => {
  const {
    content,
    user: { name, image, username },
    replyingTo,
  } = reply;
  return (
    <div>
      <div className='grid grid-cols-[min-content_1fr] gap-x-8 gap-y-4 pb-8'>
        <div className='w-10 h-10 row-span-2 overflow-hidden rounded-full'>
          <img
            className='w-full'
            src={image.includes("https") ? image : `./../../..${image.slice(1)}`}
            alt={name}
          />
        </div>
        <div>
          <h4 className='font-bold text-gray-800'>{name}</h4>
          <p className='text-gray-600 '>@{username}</p>
        </div>
        <div className=''>
          <p className='text-sm text-gray-600'>
            <span className='text-purple'>@{replyingTo}</span> {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentReplyItem;
