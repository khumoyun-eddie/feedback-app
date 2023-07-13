import React from "react";

const FormInput = ({ title, description, className, type,...otherProps }) => {
  return (
    <div className={`${className}`}>
      {title && <h4 className='font-bold text-gray-800'>{title}</h4>}
      {description && <p className='text-h4 text-gray-600 mt-[2px]'>{description}</p>}
      <input
        type='text'
        // data-type={type}
        required
        name={type}
        className='input-field'
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
