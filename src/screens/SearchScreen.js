import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../redux/actions/video.action';
import {Container} from "react-bootstrap"
import VideoHorizontal from "../Components/videoHorizontal/VideoHorizontal"
import Skeleton, {SkeletonTheme}  from "react-loading-skeleton"

const SearchScreen = () => {
    const {querry}=useParams()
    // console.log(querry);
    const dispatch=useDispatch()
    const { videos, loading } = useSelector(state => state.searchedVideos)

    useEffect(()=>{
        dispatch(getVideosBySearch(querry))
    },[dispatch,querry])
  return (
    <Container>
         {!loading ? (
            videos?.map(video => (
               <VideoHorizontal
                  video={video}
                  key={video.id.videoId}
                  searchScreen
               />
            ))
         ) : (
            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='160px' count={20} />
            </SkeletonTheme>
         )}
      </Container>
  )
}

export default SearchScreen