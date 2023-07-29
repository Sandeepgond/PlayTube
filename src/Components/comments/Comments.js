import React from 'react'
import "./_comments.scss"
import Comment from '../comment/Comment'

const Comments = () => {
  const handleSubmitComment=()=>{

  }
  return (
    <div className='comments'>
      <p>12345 comments</p>
      <div className='comments_form d-flex w-100 my-2'>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=''
          className='rounded-circle mr-3'
        />
        <form onSubmit={handleSubmitComment} className='d-flex flex-grow-1'>
          <input
              type='text'
              className='flex-grow-1'
              placeholder='Write a comment...'
              // value={text}
              // onChange={e => setText(e.target.value)}
          />
            <button className='p-2 border-0'>Comment</button>
        </form>
      </div>
      <div className='comment_list'>
        {
          [...Array(15)].map(()=><Comment/>)
        }

      </div>
    </div>
  )
}

export default Comments