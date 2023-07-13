import React from 'react'
import {ReactComponent as ArrowUpIconSvg} from './arrow-up-icon.svg'
const ArrowUpIcon = ({className, ...otherProps}) => {
  return (
    <div className={` w-5 h-5 flex items-center justify-center ${className}`} {...otherProps} >
        <ArrowUpIconSvg />
    </div>
  )
}

export default ArrowUpIcon