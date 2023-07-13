import React from 'react'
import {ReactComponent as EditIconSvg} from './edit-icon.svg'
const EditIcon = ({className, ...otherProps}) => {
  return (
    <div className={`${className} w-14 h-14`} {...otherProps}>{<EditIconSvg />}</div>
  )
}

export default EditIcon