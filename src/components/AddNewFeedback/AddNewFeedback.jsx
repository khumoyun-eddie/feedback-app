import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/userContext";
import { randomID } from "../../utils/firebase/firebase.utils";
import { FeedBackContext } from "../../contexts/feedbackContext";
import AddIcon from "../../addIcon.svg";
import Button from "../Button/Button";
import FormInput from "../FormInputs/FormInput";
import FormTextarea from "../FormInputs/FormTextarea";
import FormSelect from "../FormInputs/FormSelect";

const AddNewFeedback = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { addNewFeedBack } = useContext(FeedBackContext);

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

    addNewFeedBack(newFeedbackObj);
    toast.success("Success! New Feedback added");
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
        <img
          src={AddIcon}
          alt='add icon'
          className='absolute w-14 h-14 -top-6'
        />
        <h1 className='text-gray-800 font-bold mb-[40px]'>Create New Feedback</h1>

        <FormInput
          title='Feedback Title'
          description='Add a short, descriptive headline'
          type='title'
        />

        <FormSelect
          title='Category'
          description='Choos a category for your feedback'
          options={["Feature", "UI", "UX", "Enhancement", "Bug"]}
          value=''
          type='category'
          className='my-6'
        />

        <FormTextarea
          title='Feedback Detail'
          description='Include any specific comments on what should be improved, added, etc.'
          type='description'
        />
        <div className='flex justify-end gap-4 mt-8'>
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
      </form>
      <ToastContainer
        autoClose={1500}
        theme='colored'
        newestOnTop={true}
      />
    </div>
  );
};

export default AddNewFeedback;
