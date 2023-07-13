import React from "react";
const btnTypes = {
  element: "btn-elements",
  cancel: "btn-cancel",
  purple: "btn-purple",
  blue: "btn-blue",
  red:'btn-red',
  undefined: "",
};
const Button = ({ children, className = "", btnType, ...otherProps }) => {
  return (
    <button
      className={`${btnTypes[btnType]} ${className}`.trim()}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
