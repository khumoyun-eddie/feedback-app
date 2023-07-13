import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FeedBackProvider } from "./contexts/feedbackContext";
import { UserProvider } from "./contexts/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FeedBackProvider>
          <App />
        </FeedBackProvider>
      </UserProvider>
    </BrowserRouter>
);
