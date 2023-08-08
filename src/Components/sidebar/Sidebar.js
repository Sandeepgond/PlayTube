import React from 'react'
import { useDispatch } from "react-redux"
import "./_sidebar.scss"
import { Log_out } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied
} from "react-icons/md"

const Sidebar = ({ toggleSideBar, handleToggleSideBar }) => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(Log_out())
  }

  return (
    <nav
      className={toggleSideBar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSideBar(false)}
    >
      <Link to={"/"}>
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>
      <Link to={"/feed/subscriptions"} >
        <li>
          <MdSubscriptions size={23} />
          <span>Subscription</span>
        </li>
      </Link>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I Dont't Know</span>
      </li><hr />
      <li onClick={handleLogout}>
        <MdExitToApp size={23} />
        <span >Log Out</span>
      </li><hr />
    </nav>
  )
}

export default Sidebar