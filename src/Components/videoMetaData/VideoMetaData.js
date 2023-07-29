import React from 'react'
import "./_videoMetaData.scss"
import moment from "moment"
import numeral from "numeral"
import {MdThumbUp,MdThumbDown} from "react-icons/md"
import ShowMoreText from "react-show-more-text"

const VideoMetaData = () => {
  return (
    <div className='videoMetaData' py-2> 
      <div className='videoMetaData_top'>
        <h5>Video Title</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(1000).format("0.a")} Views •
            {moment("2022-06-07").fromNow()}
          </span>
          <div>
            <span className='mr-3'>
              <MdThumbUp size={26} />  {numeral(1000).format("0.a")}
            </span>
            <span className='mr-3'>
              <MdThumbDown size={26} />  {numeral(1000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      
      <div className='videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3'>
        <div className='d-flex'>
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt='' 
            className='mr-3 rounded-circle'
          />
          <div className='d-flex flex-column'>
            <span>Code with Harry</span>
            <span> {numeral(1000).format("0.a")} Subscriber</span>
          </div>
        </div>
        <button className='btn border-0 p-2 m-2'> Subscribe</button>
      </div>
      
      <div className='videoMetaData_description'>
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass='showMoreText'
          expanded={false}
        >
          Your words matter, and our paraphrasing tool is designed to ensure you use the right ones. 
          With two free modes and five Premium modes to choose from, you can use QuillBot’s online Paraphraser to rephrase any text in a variety of ways. Our product will improve your fluency while also ensuring you have the appropriate vocabulary, tone, and style for any occasion.
          Simply enter your text into the input box, and our AI will work with you to create the best paraphrase.

        </ShowMoreText>
      </div>

    </div>
    
  )
}

export default VideoMetaData