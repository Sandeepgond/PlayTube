import React from 'react'
import "./_video.scss"
import {AiFillEye} from "react-icons/ai"

const Video = () => {
  return (
    <div className='video'>
      <div className='video_top'>
        <img src="https://i.ytimg.com/vi/--p_5kVeCQE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBr7m7bo37hdUv9Yb8E9KNo3JmmaA" alt=""/>
        <span>05:43</span>
      </div>
      <div className='video_title'>
        create an app in five min by the chintu coder 
      </div>
      <div className=' video_details'>
        <span>
          <AiFillEye/> 5m Views •
        </span>
      </div>
      <div className='video_channel'>
        <img src="https://yt3.ggpht.com/_uZyfmo8qAwbG9O0EeORSSjKH2e_O40nDVVBm2Qk553nAF7eWeeTSZ5ziJLLSDO-xLzUjbjSXA=s68-c-k-c0x00ffffff-no-rj" alt=""/>
        <p>Rainbow</p>
      </div>
    </div>
  )
}

export default Video