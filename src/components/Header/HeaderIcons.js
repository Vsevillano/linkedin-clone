import React from 'react'
import './styles.css'
// import { Avatar } from '@material-ui/core';
export const HeaderIcons = ({Icon, title, text}) => {
  return (
    <div className='header__icons'>
        {Icon && <Icon className="header__box"/>}
        {title ? <h3>{title}</h3> : <h3 className='header__premium'>{text}</h3>}
    </div>
  )
}
