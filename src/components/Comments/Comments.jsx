import React from "react";
import CommentItem from "../CommentItem/CommentItem";

const Comments = ({ comments }) => {
  return (
    <div className='card-lg'>
      <h3 className='font-bold text-gray-800'>{comments ? comments.length : 0} Comments</h3>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default Comments;
