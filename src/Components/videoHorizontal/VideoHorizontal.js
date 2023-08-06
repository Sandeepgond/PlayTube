import React from 'react'
import "./_videoHorizontal.scss"
import {AiFillEye} from "react-icons/ai"
import moment from "moment"
import numeral from "numeral"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Row,Col} from "react-bootstrap"
import {useEffect,useState} from"react"
import request from '../../api'
import { useNavigate } from 'react-router-dom'

const VideoHorizontal = ({video}) => {
  const {
    id,
    snippet:{
      channelId,channelTitle,description,title,publishedAt,thumbnails:{medium}
    }
  }=video
  
  const [views,setViews]=useState(null)
  const [duration,setDuration]=useState(null)
  const [channelIcon,setChannelIcon]=useState(null)
  
  useEffect(()=>{
    const getVideoDetails=async()=>{
      const {data:{items}}=await request("/videos",{
        params:{
          part: 'contentDetails,statistics',
          id:id.videoId
        }
      })
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    getVideoDetails()

  },[id])

  useEffect(()=>{
    const getChannelIcons=async()=>{
      const {data:{items}}=await request("/channels",{
        params:{
          part: 'snippet',
          id:channelId
        }
      })
      setChannelIcon(items[0].snippet.thumbnails.default)
    }
    getChannelIcons()
    
  },[channelId])

  const seconds=moment.duration(duration).asSeconds()
  const _duration=moment.utc(seconds*1000).format("mm:ss")

  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/watch/${id.videoId}`)
  }
  
  return (
    <Row className="py-2 m-1 videoHorizontal align-align-items-center" onClick={handleClick} > 
      <Col xs={6} md={6} className='videoHorizontal_left'>
      <LazyLoadImage 
        src={medium.url}
        effect="blur" 
        className="videoHorizontal_thumbnail"
        wrapperClassName="videoHorizontal_thumbnail-wrapper"
      />
        <span className='videoHorizontal_duration'>{_duration}</span>
      </Col>

      <Col xs={6} md={6} className='videoHorizontal_right p-0 '>
        <p className='videoHorizontal_title mb-1'>
          {title}
        </p>
        <div className='videoHorizontal_details'>
            <AiFillEye/> 
            {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
        </div>
        <div className='videoHorizontal_channel d-flex align-items-center my-1'>
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            effect="blur"
          />
          <p className='mb-0' >{channelTitle}</p>
        </div>
      </Col>

    </Row>
   
  )
}

export default VideoHorizontal