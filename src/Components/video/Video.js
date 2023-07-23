import React, { useEffect, useState } from 'react'
import "./_video.scss"
import {AiFillEye} from "react-icons/ai"
import request from '../../api'
import moment from "moment"
import numeral from "numeral"

const Video = ({video}) => {
  const {id,
    snippet:{
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails:{medium},
    }}=video

  const [views,setViews]=useState(null)
  const [duration,setDuration]=useState(null)
  const [channelIcon,setChannelIcon]=useState(null)

  const seconds=moment.duration(duration).asSeconds()
  const _duration=moment.utc(seconds*1000).format("mm:ss")

  useEffect(()=>{
    const getVideoDetails=async()=>{
      const {data:{items}}=await request("/videos",{
        params:{
          part: 'contentDetails,statistics',
          id:id
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

  
  return (
    <div className='video'>
      <div className='video_top'>
        <img src={medium.url} alt=""/>
        <span>{_duration}</span>
      </div>
      <div className='video_title'>
        {title}
      </div>
      <div className=' video_details'>
        <span>
          <AiFillEye/> {numeral(views).format("0.a")} Views •
        </span>
        <span>
          {moment(publishedAt).fromNow()}
        </span>
      </div>
      <div className='video_channel'>
        <img src={channelIcon?.url} alt=""/>
        <p>{channelTitle}</p>
      </div>
    </div>
  )
}

export default Video