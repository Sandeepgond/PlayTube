import React from 'react'
import {useDispatch} from "react-redux"
import "./_sidebar.scss"
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied
} from "react-icons/md"
import { Log_out } from '../../redux/actions/auth.action'

const Sidebar = ({toggleSideBar,handleToggleSideBar}) => {
  const dispatch=useDispatch()
  const handleLogout=()=>{
    dispatch(Log_out())

  }
  return (
    <nav className={toggleSideBar ? "sidebar open" : "sidebar"} 
      onClick={()=>handleToggleSideBar(false)}
    >
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23}/>
        <span>Librabry</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>I Dont't Know</span>
      </li><hr/>
      <li onClick={handleLogout}>
        <MdExitToApp size={23}/>
        <span >Log Out</span>
      </li><hr/>
    </nav>
  )
}

export default Sidebar