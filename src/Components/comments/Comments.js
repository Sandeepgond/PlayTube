import React from 'react'
import "./_comments.scss"
import Comment from '../comment/Comment'
import { useEffect ,useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'


const Comments = ({videoId,totalComments}) => {

  const [text, setText] = useState('')

  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getCommentsOfVideoById(videoId))
  },[videoId,dispatch])
  
  const comments=useSelector(state=>state.commentList.comments)
  const _comments = comments?.map(
    comment => comment.snippet.topLevelComment.snippet
 )

  const handleCommentSubmit=(e)=>{
     e.preventDefault()
      if (text.length === 0) return
      dispatch(addComment(videoId, text))

      setText('')
  }

  const {photoURL}=useSelector(state=>state.auth?.user)

  return (
    <div className='comments'>
      <p>{totalComments} Comments</p>
      <div className='comments_form d-flex w-100 my-2'>
        <img
          src={photoURL}
          alt='avatar'
          className='rounded-circle mr-3'
        />
        <form onSubmit={handleCommentSubmit} className='d-flex flex-grow-1'>
          <input
              type='text'
              className='flex-grow-1'
              placeholder='Write a comment...'
              value={text}
              onChange={e => setText(e.target.value)}
          />
            <button className='p-2 border-0'>Comment</button>
        </form>
      </div>
      <div className='comment_list'>
      {_comments?.map((comment, i) => (
               <Comment comment={comment} key={i} />
            ))}

      </div>
    </div>
  )
}

export default Comments