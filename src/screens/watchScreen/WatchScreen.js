import React from 'react'
import "./_watchScreen.scss"
import { Row,Col } from 'react-bootstrap'
import VideoMetaData from '../../Components/videoMetaData/VideoMetaData'
import VideoHorizontal from '../../Components/videoHorizontal/VideoHorizontal'
import Comments from '../../Components/comments/Comments'

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8} >

        <div className='watchScreen_player'>
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameBorder={0}
            title='My video'
            allowFullScreen
            width="100%"
            height="100%"
          >
          </iframe>
        </div>
        <VideoMetaData/>
        <Comments/>
      </Col>

      <Col lg={4} >
        {[...Array(10)].map(()=> <VideoHorizontal/>)}
        
      </Col>
    </Row>
    
  )
}

export default WatchScreen

