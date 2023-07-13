import { useContext, useRef, useState } from "react";
import Button from "../Button/Button";
import { randomID } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/userContext";
import { FeedBackContext } from "../../contexts/feedbackContext";

const AddCommentForm = ({currentFeedId}) => {
  const [countCommentCharacters, setCountCommentCharacters] = useState(0);
  const { currentUser } = useContext(UserContext);
 const {addNewComment} = useContext(FeedBackContext)
  const commentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = randomID();
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);
    
    const newCommentObj = {
      ...data,
      id: randomId,
      user: {
        image: currentUser.photoURL,
        name: currentUser.displayName,
        username: `${currentUser.displayName.split(" ")[0].toLowerCase()}`,
      },
    };
    commentRef.current.value = "";
    addNewComment(newCommentObj, currentFeedId)
  };
  
  return (
    <form
      className='card-lg'
      onSubmit={handleSubmit}
    >
      <h3 className='font-bold text-gray-800'>Add Comment</h3>
      <textarea
        name='content'
        id=''
        cols='30'
        rows='10'
        ref={commentRef}
        required
        className='font-medium input-field placeholder:text-gray-600 placeholder:font-medium'
        placeholder='Type your comments here'
        maxLength={250}
        onChange={(e) => setCountCommentCharacters(e.target.value.length)}
      />
      <div className='flex items-center justify-between mt-4'>
        <p className='text-sm text-gray-600'>{250 - countCommentCharacters} characters left</p>
        <Button btnType='purple'>Post Comment</Button>
      </div>
    </form>
  );
};

export default AddCommentForm;
