import React from 'react'
import "./_watchScreen.scss"
import {useEffect} from "react"
import { Row,Col } from 'react-bootstrap'
import VideoMetaData from '../../Components/videoMetaData/VideoMetaData'
import VideoHorizontal from '../../Components/videoHorizontal/VideoHorizontal'
import Comments from '../../Components/comments/Comments'
import { useParams } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { getVideoById } from '../../redux/actions/video.action'

const WatchScreen = () => {

  const {id}=useParams()
  const dispatch=useDispatch()
  const {video,loading}=useSelector((state)=>state.selectedVideo)

  useEffect(()=>{
    dispatch(getVideoById(id))
  },[dispatch,id])
  
  return (
    <Row>
      <Col lg={8} >
        <div className='watchScreen_player'>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder={0}
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          >
          </iframe>
        </div>
        {
          !loading?<VideoMetaData video={video} videoId={id} />:<h6>Loading...</h6>
        }
        <Comments/>
      </Col>

      <Col lg={4} >
        {[...Array(10)].map(()=> <VideoHorizontal/>)}
      </Col>
    </Row>
    
  )
}

export default WatchScreen

