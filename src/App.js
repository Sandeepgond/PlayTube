import React, { useState } from "react"
import "./_app.scss"
import Headers from "./Components/header/Headers"
import Sidebar from "./Components/sidebar/Sidebar"
import {Container} from "react-bootstrap"
import HomeScreen from "./screens/homescreen/HomeScreen"
import LoginScreen from "./screens/loginscreen/LoginScreen"

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


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
  // let navigate = useNavigate(); 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomeScreen/></Layout>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/search" element={<Layout><h1>Search Results</h1></Layout>}/>
        <Route path="*" element={<h1>Path Not Found</h1>}/>
      </Routes>
    </Router>
  )
  
}

export default App;
