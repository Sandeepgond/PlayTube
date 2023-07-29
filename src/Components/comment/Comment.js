import React from 'react'
import moment from "moment"
import "./_comment.scss"

const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
        <img 
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt='' 
            className='mr-3 rounded-circle'
        />
        <div className='comment_body'>
            <p className='comment_header'>
                Sandeep Gond • {moment("2020-05-07").fromNow()}
            </p>
            <p className='mb-0'>
                Nice Video Dude
            </p>
        </div>
    </div>
  )
}

export default Comment