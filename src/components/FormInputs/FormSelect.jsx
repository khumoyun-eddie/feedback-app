import React from 'react'

const FormSelect =({ title, description, options, className , type}) => {
    return (
      <div  className={`${className}`}>
        {title && <h4 className='font-bold text-gray-800'>{title}</h4>}
        {description && <p className='text-h4 text-gray-600 mt-[2px]'>{description}</p>}
        <select
            name='category'
            data-type={type}
 
            className='input-field'
          >
            {options.map((option,i)=>(
                <option value={option} key={i}>{option}</option>
            ))}
          </select>
      </div>
    );
  };

export default FormSelect