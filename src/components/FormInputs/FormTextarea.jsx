import React from "react";

const FormTextarea = ({ title, description, className, type }) => {
  return (
    <div className={`${className}`}>
      {title && <h4 className='font-bold text-gray-800'>{title}</h4>}
      {description && <p className='text-h4 text-gray-600 mt-[2px]'>{description}</p>}
      <textarea
        cols='30'
        rows='10'
        name={type}
        className='input-field'
        required
      />
    </div>
  );
};

export default FormTextarea;
