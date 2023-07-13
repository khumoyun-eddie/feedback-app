import React, { useContext, useRef } from "react";
import Button from "../Button/Button";
import { randomID } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/userContext";
import { FeedBackContext } from "../../contexts/feedbackContext";

const AddReplyForm = ({ replyingTo, commentID, handleReplySubmitted }) => {
  const { currentUser } = useContext(UserContext);
  const { addReplyComment } = useContext(FeedBackContext);
  const replyRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = randomID();
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);

    const newReplyObj = {
      ...data,
      id: randomId,
      replyingTo,
      user: {
        image: currentUser.photoURL,
        name: currentUser.displayName,
        username: `${currentUser.displayName.split(" ")[0].toLowerCase()}`,
      },
    };
    addReplyComment(newReplyObj, commentID);
    replyRef.current.value = ''
    handleReplySubmitted(false)
  };
  return (
    <form
      className='flex items-start justify-between gap-x-4'
      onSubmit={handleSubmit}
    >
      <textarea
        className='flex-1 mt-0 font-medium input-field placeholder:text-gray-600 placeholder:font-medium'
        name='content'
        id=''
        ref={replyRef}
        cols='30'
        rows='10'
        maxLength={250}
      ></textarea>
      <Button btnType='purple'>Post Reply</Button>
    </form>
  );
};

export default AddReplyForm;
