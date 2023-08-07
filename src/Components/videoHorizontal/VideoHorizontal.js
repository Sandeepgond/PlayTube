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

const VideoHorizontal = ({video,searchScreen}) => {
  const {
    id,
    snippet:{
      channelId,channelTitle,description,title,publishedAt,thumbnails:{medium}
    }
  }=video
  const isVideo=id.kind==='youtube#video'
  
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
    isVideo?navigate(`/watch/${id.videoId}`):navigate(`/channel/${id.channelId}`)
  }

  const thumbnail=isVideo && 'videoHorixontal_thumbnail-channel'
  
  return (
    <Row className="py-2 m-1 videoHorizontal align-items-center" onClick={handleClick} > 
      <Col xs={6} md={searchScreen?4:6} className='videoHorizontal_left'>
      <LazyLoadImage 
        src={medium.url}
        effect="blur" 
        className={`videoHorizontal_thumbnail${thumbnail}`}
        wrapperClassName="videoHorizontal_thumbnail-wrapper"
      />
      {isVideo
        (<span className='videoHorizontal_duration'>{_duration}</span>)
      }
      </Col>

      <Col xs={6} md={searchScreen?8:6} className='videoHorizontal_right p-0 '>
        <p className='videoHorizontal_title mb-1'>
          {title}
        </p>
        {isVideo && (
          <div className='videoHorizontal_details'>
              <AiFillEye/> 
              {numeral(views).format("0.a")} Views •
              {moment(publishedAt).fromNow()}
          </div>
        )}

        {isVideo && <p className='mt-1' >{description}</p>}

        <div className='videoHorizontal_channel d-flex align-items-center my-1'>
          {isVideo && 
          (<LazyLoadImage
            src={channelIcon?.url}
            effect="blur"
          />)}
          <p className='mb-0' >{channelTitle}</p>
        </div>
      </Col>

    </Row>
   
  )
}

export default VideoHorizontal