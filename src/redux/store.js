import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {authReducer} from "./reducers/auth.reducer"
import { homeVideoReducer, selectedVideoReducer } from "./reducers/video.reducer"
import { channelDetailsReducer } from "./reducers/channel.reducer"
import { commentListReducer } from "./reducers/comments.reducer"

const rootReducer=combineReducers({
    auth:authReducer,
    homeVideos:homeVideoReducer,
    selectedVideo:selectedVideoReducer,
    channelDetails:channelDetailsReducer,
    commentList:commentListReducer
})

const store=createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store