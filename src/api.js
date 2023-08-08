import axios from "axios"
const key=process.env.YouTube_Api_Key

const request= axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:key
    }
})

export default request