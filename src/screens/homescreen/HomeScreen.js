import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from "../../Components/video/Video"
import CategoriesBar from "../../Components/categoriesBar/CategoriesBar"


const HomeScreen = () => {
  return (
    <Container>
        <CategoriesBar/>
        <Row>
            {[...new Array(20)].map(()=>(
                <Col lg={3} md={4} >
                    <Video/>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default HomeScreen