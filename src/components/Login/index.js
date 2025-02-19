import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../AuthContext';
import { FaEye, FaEyeSlash } from "react-icons/fa"

import './index.css'

const Login = () => {
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [passwordSee, setPasswordSee] = useState(false)
  const [errorMsg, setErrorMsg] = useState('') 
  const { login } = useAuth();

  const navigate = useNavigate()

  const renderLoginForm = () => {
      const onSubmitForm = event => {
            event.preventDefault()
            if (userName === "web01" && password==="web01@doctor") {
                login();
                navigate('/')
                } else {
                    onSubmitFailure("USERNAME OR PASSWORD IS INVALID")
                }
      }
        const onSubmitFailure = error => {
                  setErrorMsg(error)
      }

      const onclickPassword = () => {
        setPasswordSee(!passwordSee)
      }

      const passwordText = passwordSee ? 'text' : 'password'
      const passwordIcon = passwordSee ? <FaEyeSlash /> : <FaEye />

      return (
          <>
            <form className="formContainer" onSubmit={onSubmitForm}>
                <h1 className="loginP">Login</h1>
                <div className="inputContainer">
                  <label className="label" htmlFor="userName">
                      Enter UserName*
                  </label>
                  <input
                    type="text"
                    id="userName"
                    value={userName}
                    className="inputUserName"
                    placeholder='Name'
                    onChange={(e)=> setUserName(e.target.value)}
                  />
                  <label className="label" htmlFor="password">
                    Enter Password*
                  </label>
                  <div className='password-div'>
                  <input
                    type={passwordText}
                    id="password"
                    value={password}
                    className="inputPassword"
                    placeholder='Password'
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                  <button type="button" className='password-btn' onClick={onclickPassword}>
                    <span className='eye-icon'>{passwordIcon}</span>
                  </button>
                  </div>
                </div>
                <p className="errorMsg">{errorMsg}</p>
                <button type="submit" className="loginButton">
                  Login
                </button>
        </form>
      </>
      )
  }

  return (
    <>
    <div className="loginFormContainer">
      <img 
      src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-healthcare-app-illustration-download-in-svg-png-gif-file-formats--online-booked-appointment-consultation-schedule-medical-conference-and-pack-illustrations-4649545.png"
      alt="loginImg"
      className='login-img'
      />

      {renderLoginForm()}
    </div>
    </>
  )
}

export default Login