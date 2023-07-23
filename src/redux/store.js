import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {authReducer} from "./reducers/auth.reducer"
import { homeVideoReducer } from "./reducers/video.reducer"

const rootReducer=combineReducers({
    auth:authReducer,
    homeVideos:homeVideoReducer
})

const store=createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store