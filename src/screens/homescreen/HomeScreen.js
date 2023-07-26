import React  from 'react'
import { Col, Container} from 'react-bootstrap'
import Video from "../../Components/video/Video"
import CategoriesBar from "../../Components/categoriesBar/CategoriesBar"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action'
import InfiniteScroll from "react-infinite-scroll-component"
import SkeletonVideo from '../../Components/skeleton/SkeletonVideo'

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
            className='row'
            >
          
            {loading===false?videos.map((video)=>(
              <Col lg={3} md={4}>
                    <Video video={video} key={video.id}  />
                </Col>
            )): [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                 <SkeletonVideo />
              </Col>
            ))
            }
         
          </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen