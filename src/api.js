import axios from "axios"

const request= axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        // key:process.env.REACT_APP_YouTube_Api_Key
        key:'AIzaSyBD3XPRMzTGcV6LOYriAsgnALbc0SZ43RM'
    }
})

export default request