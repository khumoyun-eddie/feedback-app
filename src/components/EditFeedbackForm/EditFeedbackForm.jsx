import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/userContext";
import { randomID } from "../../utils/firebase/firebase.utils";
import { FeedBackContext } from "../../contexts/feedbackContext";
import Button from "../Button/Button";
import FormInput from "../FormInputs/FormInput";
import FormTextarea from "../FormInputs/FormTextarea";
import FormSelect from "../FormInputs/FormSelect";
import EditIcon from "../EditIcon/EditIcon";

const EditFeedbackForm = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { currentFeed } = useContext(FeedBackContext);

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomId = randomID();
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);

    toast.info("Creating new Feedback");

    const newFeedbackObj = {
      ...data,
      id: randomId,
      upvotes: 1,
      status: "suggestion",
      comments: [],
      createdBy: currentUser.uid,
    };

    // addNewFeedBack(newFeedbackObj);
    toast.success("Success! Feedback Edited");
    setTimeout(() => navigate("/"), 1550);
  };

  return (
    <div className='w-[540px] mx-auto'>
      <Button
        className='mb-10 font-bold text-gray-600'
        onClick={handleCancel}
      >
        <span className='mr-2 font-bold text-blue'>&lt;</span>
        Go Back
      </Button>
      <form
        onSubmit={handleSubmit}
        className='form-card'
      >
        <EditIcon className='absolute -top-6' />
        
        <h1 className='text-gray-800 font-bold mb-[40px]'>Editing '{currentFeed.title}'</h1>

        <FormInput
          title='Feedback Title'
          description='Add a short, descriptive headline'
          type='title'
          
        />

        <FormSelect
          title='Category'
          description='Choose a category for your feedback'
          options={["Feature", "UI", "UX", "Enhancement", "Bug"]}
          value=''
          type='category'
          className='my-6'
        />
         <FormSelect
          title='Update Status'
          description='Change feature state'
          options={["Suggestion", "Planned", "In-Progress", "Live"]}
          value=''
          type='status'
          className='my-6'
        />

        <FormTextarea
          title='Feedback Detail'
          description='Include any specific comments on what should be improved, added, etc.'
          type='description'
        />
        <div className='flex justify-between mt-8'>
            <Button btnType="red">Delete</Button>
          <div className="space-x-4">
          <Button
            btnType='cancel'
            type='button'
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            btnType='purple'
            type='submit'
          >
            Add Feedback
          </Button>
          </div>
        </div>
      </form>
      <ToastContainer
        autoClose={1500}
        theme='colored'
        newestOnTop={true}
      />
    </div>
  );
};

export default EditFeedbackForm;
