import React from 'react'
import { Route, Routes } from 'react-router-dom';
import EditFeedbackForm from '../components/EditFeedbackForm/EditFeedbackForm';

const EditFeedback = () => {
  return (
    <Routes>
        <Route path=':feedback' element={<EditFeedbackForm />} />
    </Routes>
  )
}

export default EditFeedback