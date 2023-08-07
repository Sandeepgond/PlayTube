import React, { useState,useEffect } from "react"
import "./_app.scss"
import Headers from "./Components/header/Headers"
import Sidebar from "./Components/sidebar/Sidebar"
import {Container} from "react-bootstrap"
import HomeScreen from "./screens/homescreen/HomeScreen"
import LoginScreen from "./screens/loginscreen/LoginScreen"
import WatchScreen from "./screens/watchScreen/WatchScreen"
import {useSelector} from "react-redux"
import {Route,Routes,useNavigate} from "react-router-dom"
import SearchScreen from "./screens/SearchScreen"

const Layout=({children})=>{
  const [toggleSideBar,setToggleSideBar]=useState(false)
  const handleToggleSideBar=()=>setToggleSideBar(value=>!value)
  
  return (
    <>
      <Headers handleToggleSideBar={handleToggleSideBar} />
      <div className="app_container" >
        <Sidebar toggleSideBar={toggleSideBar} handleToggleSideBar={handleToggleSideBar} />
        <Container fluid className="app_main">
          {children} 
        </Container>
      </div>
    </>
  )
}

function App() {

  const {accessToken,loading}=useSelector(state=>state.auth)
  const navigate=useNavigate()

  useEffect(()=>{
    if(!loading && !accessToken){
      navigate("/login")
    }

  },[accessToken,loading])

  return (
      <Routes>
        <Route path="/" element={<Layout><HomeScreen/></Layout>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/search/:querry" element={<Layout> <SearchScreen/> </Layout>}/>
        <Route path="/watch/:id" element={<Layout> <WatchScreen/> </Layout>}/>
        <Route path="*" element={<h1>Path Not Found</h1>}/>
      </Routes>
  )
}

export default App;
