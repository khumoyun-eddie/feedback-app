import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeedBackItem from "../FeedBacks/FeedBackItem/FeedBackItem";
import Button from "../Button/Button";
import Comments from "../Comments/Comments";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { getSingleFeedbackDocument } from "../../utils/firebase/firebase.utils";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import { FeedBackContext } from "../../contexts/feedbackContext";
import { UserContext } from "../../contexts/userContext";

const FeedbackDetail = () => {
  // const [currentFeed, setCurrentFeed] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { currentFeed, getSingleFeedback } = useContext(FeedBackContext);
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const params = useParams();

  const handleToGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    // setIsLoading(true);
    (async () => {
      await getSingleFeedback(params.feedback)
      // setIsLoading(false)
    })();
  }, [params, getSingleFeedback]);

  const handleGoToEdit = () => {
    if (!currentFeed.createdBy?.includes(currentUser.uid)) return;
    navigate(`/edit-feedback/${currentFeed.id}`);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='w-[730px] mx-auto'>
          <div className='flex items-center justify-between mb-10'>
            <Button
              className='font-bold text-gray-600 '
              onClick={handleToGoBack}
            >
              <span className='mr-2 font-bold text-blue'>&lt;</span>
              Go Back
            </Button>
            <Button
              btnType='blue'
              onClick={handleGoToEdit}
              className={`${currentFeed.createdBy?.includes(currentUser.uid) ? "" : "opacity-50 cursor-not-allowed"}`}
            >
              Edit Feedback
            </Button>
          </div>

          <FeedBackItem feed={currentFeed} />
          {currentFeed.comments && (
            <Comments
              comments={currentFeed.comments}
              feedBackID={currentFeed?.id}
            />
          )}
          <AddCommentForm currentFeedId={currentFeed.id} />
        </div>
      )}
    </>
  );
};

export default FeedbackDetail;
