import React from "react";
import { ReactComponent as CorrectIconSvg } from "./correct-icon.svg";

const CorrectIcon = ({className,...otherProps}) => {
  return (
    <div className={`w-2 h-3 ${className}`} {...otherProps} >
      <CorrectIconSvg />
    </div>
  );
};

export default CorrectIcon;
