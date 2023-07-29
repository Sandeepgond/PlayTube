import React from 'react'
import "./_videoHorizontal.scss"
import {AiFillEye} from "react-icons/ai"
import moment from "moment"
import numeral from "numeral"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Row,Col} from "react-bootstrap"

const VideoHorizontal = () => {
  const seconds=moment.duration("100").asSeconds()
  const _duration=moment.utc(seconds*1000).format("mm:ss")

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center"> 
      <Col xs={6} md={4} className='videoHorizontal_left'>
      <LazyLoadImage 
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        effect="blur" 
        className="videoHorizontal_thumbnail"
        wrapperClassName="videoHorizontal_thumbnail-wrapper"
      />
        <span className='video_top_duration'>{_duration}</span>
      </Col>

      <Col xs={6} md={8} className='videoHorizontal_right p-0 '>
        <p className='videoHorizontal_title mb-1'>
          be a full stack web developer 
        </p>
        <div className='videoHorizontal_details'>
            <AiFillEye/> 
            {numeral(1000).format("0.a")} Views •
      
            {moment("2020-05-08").fromNow()}
        </div>
        <div className='videoHorizontal_channel d-flex align-items-center my-1'>
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            effect="blur"
          />
          <p>
            Code with harry
          </p>
        </div>
      </Col>

    </Row>
   
  )
}

export default VideoHorizontal