import React from 'react'

const Post = () => {
  return (
    <div className='post'>
          <h3>username</h3>   
          {/* header-avatar + username */}


          {/* image */}
          <img className='post__image' src='https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='postimage' />
          {/* username+caption */}

          <h4> username : caption </h4>
    </div>
  )
}

export default Post;