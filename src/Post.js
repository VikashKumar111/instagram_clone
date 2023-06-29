import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
const Post = () => {
  return (
      <div className='post'>
          
          <div className='post__header'>
             <Avatar
              className='post__avatar'
              alt='VikasKumar'
              src='/static/images/avatar/1.jpg'
              />
               <h3>username</h3>   
          </div>
          

          
          <img className='post__image' src='https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='postimage' />
          

          <h4 className='post__text'> <strong>CleverQazi :</strong> day three of live sessions awsome  </h4>
    </div>
  )
}

export default Post;