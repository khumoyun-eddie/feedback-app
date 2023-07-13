import { createContext, useEffect, useState, useCallback } from "react";
import {
  addCommentAndRepliesDocument,
  addFeedbackDocuments,
  getCategoriesAndDocuments,
  getSingleFeedbackDocument,
} from "../utils/firebase/firebase.utils";

export const FeedBackContext = createContext({
  feedbacks: [],
  sortedFeedbacks: [],
  currentFeed: {},
  setCurrentFeed: () => null,
  sortFeedBacks: () => null,
  addNewFeedBack: () => null,
  addNewComment: () => null,
  addReplyComment: () => null,
  getSingleFeedback: () => null,
  filterFeedbacksByCategory: () => null,
});

export const FeedBackProvider = ({ children }) => {
  const [currentFeed, setCurrentFeed] = useState(() => {
    const storedData = localStorage.getItem("currentFeed");
    return storedData ? JSON.parse(storedData) : {};
  });
  const [feedbacks, setFeedBacks] = useState([]);
  const [sortedFeedbacks, setSortedFeedBacks] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await getCategoriesAndDocuments();
      setFeedBacks(req);
      setSortedFeedBacks(req);
    })();
  }, []);

  const getSingleFeedback = async (id) => {
    const selectedFeed = await getSingleFeedbackDocument(id);
    setCurrentFeed(selectedFeed);
    localStorage.setItem("currentFeed", JSON.stringify(selectedFeed));
  };
  const addNewFeedBack = async (newFeedback) => {
    await addFeedbackDocuments(newFeedback);
    setFeedBacks([...feedbacks, newFeedback]);
  };

  const sortFeedBacks = useCallback(
    (filter = "most upvotes") => {
      if (filter.toLowerCase() === "most upvotes") {
        const sortedArray = [...feedbacks].sort((a, b) => b.upvotes - a.upvotes);
        setSortedFeedBacks(sortedArray);
      }
      if (filter.toLowerCase() === "least upvotes") {
        const sortedArray = [...feedbacks].sort((a, b) => a.upvotes - b.upvotes);
        setSortedFeedBacks(sortedArray);
      }
      if (filter.toLowerCase() === "most comments") {
        const sortedArray = [...feedbacks].sort((a, b) => b.comments?.length - a.comments?.length);
        setSortedFeedBacks(sortedArray);
      }
      if (filter.toLowerCase() === "least comments") {
        const sortedArray = [...feedbacks].sort((a, b) => a.comments?.length - b.comments?.length);
        setSortedFeedBacks(sortedArray);
      }
    },
    [feedbacks]
  );

  const filterFeedbacksByCategory = (filter) => {
    if (filter !== "All") {
      const newArr = feedbacks.filter((feedback) => feedback.category.toLowerCase() === filter.toLowerCase());
      setSortedFeedBacks(newArr);
    } else {
      setSortedFeedBacks(feedbacks);
    }
  };

  const addNewComment = (newComment) => {
    const updatedCommentsArray = currentFeed.comments ? [...currentFeed.comments, newComment] : [newComment];
    addCommentAndRepliesDocument(currentFeed.id, updatedCommentsArray);
    // getSingleFeedback ni ishga tushur
    // setFeedBacks((prev) => {
    //   const newFeedbacksList = prev.map((feed) => {
    //     if (feed.id !== feedID) return feed;
    //     return { ...currentFeedBack, comments: updatedCommentsArray };
    //   });
    //   return newFeedbacksList;
    // });
  };

  const addReplyComment = (newReply, commentID) => {
    const currentComment = currentFeed.comments.find((comment) => comment.id === commentID);
    const newComment = { ...currentComment, replies: [newReply] };

    const updatedCommentsList = currentFeed.comments.map((comment) =>
      comment.id !== commentID ? comment : newComment
    );
    addCommentAndRepliesDocument(currentFeed.id, updatedCommentsList);
  };

  const value = {
    feedbacks,
    currentFeed,
    setCurrentFeed,
    setFeedBacks,
    sortedFeedbacks,
    addNewFeedBack,
    sortFeedBacks,
    filterFeedbacksByCategory,
    addNewComment,
    addReplyComment,
    getSingleFeedback,
  };
  return <FeedBackContext.Provider value={value}>{children}</FeedBackContext.Provider>;
};
