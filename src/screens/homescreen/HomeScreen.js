import React  from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from "../../Components/video/Video"
import CategoriesBar from "../../Components/categoriesBar/CategoriesBar"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action'
import InfiniteScroll from "react-infinite-scroll-component"
import Skeleton from "react-loading-skeleton"

const HomeScreen = () => {
  const dispatch=useDispatch()
  const {videos,activeCategory,loading}=useSelector(state=>state.homeVideos)

  const fetchData=()=>{
    if(activeCategory==="All"){
      dispatch(getPopularVideos())
    }
    else{
      dispatch(getVideosByCategory(activeCategory))
    }
  }

  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch])
  return (
    <Container>
        <CategoriesBar/>
          <InfiniteScroll 
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
              <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            >
            <Row>
                {loading===false?videos.map((video)=>(
                  <Col lg={3} md={4} key={video.id}>
                        <Video video={video}/>
                    </Col>
                )):
                [Array(20).map(()=> <Skeleton height={180} width="100%"/> )]
                
                // [...Array(20)].map(()=> <Col lg={3} md={4}> <Skeleton height={180} width="100%" /> </Col>)
                }
            </Row>
          </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen