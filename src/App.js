import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/userContext";
import FeedbackDetails from "./routes/FeedbackDetails";
import Home from "./routes/Home";
import NewFeedback from "./routes/NewFeedback";
import Roadmap from "./routes/Roadmap";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import EditFeedback from "./routes/EditFeedback";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className='container  max-w-[1110px] mx-auto py-12 flex tablet:items-start gap-[30px] flex-col tablet:flex-row'>
      <Routes>
        {!currentUser && (
          <Route
            path='/'
            element={<SignIn />}
          />
        )}
        <Route
          path='/sign-up'
          element={<SignUp />}
        />
        <Route
          path='/sign-in'
          element={<SignIn />}
        />
        {currentUser && (
          <>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/roadmap'
              element={<Roadmap />}
            />
            <Route
              path='/new-feedback/*'
              element={<NewFeedback />}
            />
            <Route
              path='/feedbacks/*'
              element={<FeedbackDetails />}
            />
            <Route
              path='/edit-feedback/*'
              element={<EditFeedback />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
