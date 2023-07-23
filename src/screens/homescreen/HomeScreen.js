import React  from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from "../../Components/video/Video"
import CategoriesBar from "../../Components/categoriesBar/CategoriesBar"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { getPopularVideos } from '../../redux/actions/video.action'


const HomeScreen = () => {
  const dispatch=useDispatch()
  const {videos}=useSelector(state=>state.homeVideos)

  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch])
  return (
    <Container>
        <CategoriesBar/>
        <Row>
            {videos.map((video)=>(
                <Col lg={3} md={4} key={video.id}>
                    <Video video={video}/>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default HomeScreen