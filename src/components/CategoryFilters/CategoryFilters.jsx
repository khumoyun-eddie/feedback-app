import {useContext, useState} from 'react'
import Button from "../Button/Button";
import { FeedBackContext } from '../../contexts/feedbackContext';
const categoryButtonsList = [
  { label: "All" },
  { label: "UI" },
  { label: "UX" },
  { label: "Enhancement" },
  { label: "Bug" },
  { label: "Feature" },
];
const CategoryFilters = () => {
  const [activeButton, setActiveButton] = useState(0);
  const { filterFeedbacksByCategory } = useContext(FeedBackContext);
  const handleCategorySelect = (buttonIndex, buttonLabel) => {
    setActiveButton(buttonIndex);
    filterFeedbacksByCategory(buttonLabel);
  };
  return (
    <div className='bg-white p-6 flex gap-2 flex-wrap rounded-[10px]'>
        {categoryButtonsList.map((button, i) => (
          <Button
            btnType='element'
            key={i}
            onClick={() => handleCategorySelect(i, button.label)}
            className={activeButton === i ? "active" : ""}
          >
            {button.label}
          </Button>
        ))}
      </div>
  )
}

export default CategoryFilters