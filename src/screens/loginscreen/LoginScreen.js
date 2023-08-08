import {useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { login } from '../../redux/actions/auth.action'
import "./_loginScreen.scss"

const LoginScreen = () => {

  const dispatch=useDispatch()
  const accessToken=useSelector(state=>state.auth.accessToken)

  const handleLogin=()=>{
    dispatch(login())
  }
const navigate = useNavigate();

useEffect(()=>{
  if(accessToken){
      navigate('/');
    }
  },[accessToken],navigate)

  return (
    <div className='login'>
        <div className='login_container'>
            <img src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc" alt=""/>
            <button onClick={handleLogin}>Login with google</button>
            <p>This project is made using youtube api </p>
        </div>
    </div>
  )
}

export default LoginScreen