import React from 'react'
import "./_headers.scss"
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications , MdApps} from "react-icons/md"

const Headers = () => {
  return (
    <div className='border border-dark header'>
      <FaBars className='header_menu' size={26}/>
      <img 
        src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"
        alt="youtubeLogo"
        className='header_logo'
      />
      <form>
        <input type='text' placeholder='Search'/>
        <button type='submit'><AiOutlineSearch/></button>
      </form>
      <div className='header_icons'>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img 
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="avatar"
        />
        
      </div>
    </div>
  )
}

export default Headers