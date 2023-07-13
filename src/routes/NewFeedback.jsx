import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddNewFeedback from '../components/AddNewFeedback/AddNewFeedback';

const NewFeedback = () => {
  return (
    <Routes>
      <Route index element={<AddNewFeedback />} />
    </Routes>
  )
}

export default NewFeedback