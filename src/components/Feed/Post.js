import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import './styles.css'
import { InputIcon } from './InputIcon'

export const Post = ({name, description, mensage, photoURL, images}) => {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar src={photoURL}/>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{mensage}</p>
            {images ? <img src={images} alt={name}/> : ''}
        </div>
        <div className='post__bottom'>
            <InputIcon Icon={ThumbUpAltOutlinedIcon} title='Recomendar' color='gray'/>
            <InputIcon Icon={ChatOutlinedIcon} title='Comentar' color='gray'/>
            <InputIcon Icon={ShareOutlinedIcon} title='Compartir' color='gray'/>
            <InputIcon Icon={SendOutlinedIcon} title='Enviar' color='gray'/>

        </div>
    </div>
  )
}
