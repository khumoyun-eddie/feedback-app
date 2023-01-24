import React from "react";
import { Link } from "react-router-dom";
const btnTypes = {
  element: "btn-elements",
  cancel: "btn-cancel",
  purple: "btn-purple",
  blue: "btn-blue",
  undefined: "",
};
const Button = ({ children, className = "", btnType, ...otherProps }) => {
  return (
    <Link
      className={`${btnTypes[btnType]} ${className}`.trim()}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default Button;
