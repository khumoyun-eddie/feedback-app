import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FeedbackDetail from '../components/FeedbackDetail/FeedbackDetail';


const FeedbackDetails = () => {

  return (
    <Routes>
        <Route path=':feedback' element={<FeedbackDetail/>} />
    </Routes>
  )
}

export default FeedbackDetails