import React, { useState } from 'react'
import "./_headers.scss"
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Headers = ({ handleToggleSideBar }) => {

  const navigate = useNavigate()

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
  }

  const user = useSelector(state => state.auth?.user)

  return (
    <div className='border border-dark header'>
      <FaBars className='header_menu' size={26} onClick={() => handleToggleSideBar()} />
      <img
        src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"
        alt="youtubeLogo"
        className='header_logo'
      />
      <form onSubmit={handleSubmit} >
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search' />
        <button type='submit'><AiOutlineSearch /></button>
      </form>
      <div className='header_icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src={user?.photoURL}
          alt="avatar"
        />
      </div>
    </div>
  )
}

export default Headers