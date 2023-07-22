import React, { useState } from 'react'
import "./_categoriesBar.scss"

const keywords=[
  "All",
  "React js",
  "Angular js",
  "Use of Api",
  "React Native",
  "Redux",
  "Music",
  "Guitar",
  "Bollywood songs",
  "Coding",
  "Cricket",
  "FootBall",
  "Real Madrid",
  "MS Dhoni",
  "Coding",
  "Cricket",
  "FootBall",
  "Real Madrid",
  "MS Dhoni"
]

const CategoriesBar = () => {
  const [activeElement,setActiveElement]=useState("All")

  const handleClick=(value)=>{
    setActiveElement(value)
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