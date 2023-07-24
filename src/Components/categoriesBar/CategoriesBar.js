import React, { useState } from 'react'
import "./_categoriesBar.scss"
import {useDispatch} from "react-redux"
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action'

const keywords=[
  "All",
  "React js",
  "Angular js",
  "Use of Api",
  "React Native",
  "Express",
  "Node js",
  "MongoDB",
  "Coding",
  "Redux",
  "MS Dhoni",
  "Music",
  "Guitar",
  "Bollywood songs",
  "Cricket",
  "FootBall",
  "Kabaddi",
  "Badminton",
  "Table Tennis",
  "Free Fire ",
  "PubG",
  "Real Madrid",
  
]

const CategoriesBar = () => {
  const [activeElement,setActiveElement]=useState("All")

  const dispatch=useDispatch()

  const handleClick=(value)=>{
    setActiveElement(value)
    if(value==="All"){
      dispatch(getPopularVideos())
    }
    else{
      dispatch(getVideosByCategory(value))
    }

  }
  return (
    <div className='CategoriesBar'>
      {
        keywords.map((value,ind)=>(
          <span onClick={()=>handleClick(value)} key={ind} 
            className={activeElement===value?"active":""}
          >
            {value}
          </span>
        ))
      }
    </div>
  )
}

export default CategoriesBar