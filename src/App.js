import React, { useState } from "react"
import "./_app.scss"
import Headers from "./Components/header/Headers"
import Sidebar from "./Components/sidebar/Sidebar"
import {Container} from "react-bootstrap"
import HomeScreen from "./screens/homescreen/HomeScreen"

function App() {
  
  const [toggleSideBar,setToggleSideBar]=useState(false)

  const handleToggleSideBar=()=>setToggleSideBar(value=>!value)

  return (
    <>
      <Headers handleToggleSideBar={handleToggleSideBar} />
      <div className="app_container border border-info" >
        <Sidebar toggleSideBar={toggleSideBar} handleToggleSideBar={handleToggleSideBar} />
        <Container fluid className="app_main border border-warning">
          <HomeScreen/>
        </Container>
      </div>
    </>
  );
}

export default App;
