
import firebase from 'firebase/compat/app';
import auth from "../../firebase"
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType';


export const login=()=>async dispatch=>{

    dispatch({
        type:LOGIN_REQUEST
    })

    try {
        const provider=new firebase.auth.GoogleAuthProvider()
        const res=await auth.signInWithPopup(provider)
        const accessToken=res.credential.accessToken
        const profile={
            name:res.additionalUserInfo.profile.name,
            photoURL:res.additionalUserInfo.profile.picture
        }

        sessionStorage.setItem("access-token",accessToken)
        sessionStorage.setItem("user",JSON.stringify(profile) )

        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })
        dispatch({
            type:LOAD_PROFILE,
            payload:profile
        })
        console.log(res);
    } 
    catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })
        console.log(error.message)
        
    }

}

export const Log_out=()=>async dispatch=>{
    await auth.signOut()

    dispatch({
        type:LOG_OUT
    })

    sessionStorage.removeItem("access-token")
    sessionStorage.removeItem("user")

}