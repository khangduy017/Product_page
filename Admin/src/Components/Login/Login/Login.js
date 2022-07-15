import React, { useState, useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../../Images/logo.jpg'
import axios from 'axios'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

function Login(props) {
  let navigate = useNavigate();

  const [loggedin, setLogin] = useState(false)
  const [enteredAccount, setEnteredAccount] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')

  const [accountWrong, setAccountWrong] = useState(false)
  const [passwordWrong, setPasswordWrong] = useState(false)

  const accountChangeHandler = event => {
    setEnteredAccount(event.target.value);
  }
  const passwordChangeHandler = event => {
    setEnteredPassword(event.target.value)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    const object = {
      email: enteredAccount,
      password: enteredPassword,
      loginAs: 'admin'
    };
    setAccountWrong(false)
    setPasswordWrong(false)
    axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/users/login', object).then((res) => {
      cookie.set('JWT', res.data.token, { path: '/' })
      // console.log(res.data.token)
      setLogin(true)
    }).catch(error => {
      console.log(error)
      setAccountWrong(true)
      setPasswordWrong(true)
    })
  }

  return (
    <div className='LOGIN_REGISTER'>
      <form onSubmit={handleLogin} className='Login'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        {loggedin && navigate('/dashboard')}
        <div className={`input ${accountWrong && 'inputWrong'}`} onChange={accountChangeHandler}>
          <input placeholder='Nhập gmail của bạn' spellCheck='false' />
          {accountWrong && <svg className='wrongIcon' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_915_635)">
              <path d="M7.7786 20.8596C11.3909 24.472 17.2477 24.472 20.8601 20.8596C24.4724 17.2473 24.4724 11.3905 20.8601 7.77816C17.2477 4.16581 11.3909 4.16581 7.7786 7.77816C4.16625 11.3905 4.16625 17.2473 7.7786 20.8596Z" fill="#FF0000" />
              <path d="M7.07151 21.2132C3.17182 17.3135 3.17182 10.9708 7.07151 7.07107C10.9712 3.17137 17.314 3.17137 21.2136 7.07107C25.1133 10.9708 25.1133 17.3135 21.2136 21.2132C17.314 25.1129 10.9712 25.1129 7.07151 21.2132ZM19.7994 8.48528C16.6793 5.36517 11.6041 5.36694 8.48572 8.48528C5.36738 11.6036 5.36562 16.6789 8.48572 19.799C11.6058 22.9191 16.6811 22.9173 19.7994 19.799C22.9178 16.6806 22.9195 11.6054 19.7994 8.48528Z" fill="#FF0000" />
              <path d="M18.3855 16.9705L11.3145 9.89948L9.90024 11.3137L16.9713 18.3848L18.3855 16.9705Z" fill="white" />
              <path d="M18.3849 11.3137L16.9707 9.89948L9.89964 16.9705L11.3138 18.3848L18.3849 11.3137Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_915_635">
                <rect width="20" height="20" fill="white" transform="translate(14.1426) rotate(45)" />
              </clipPath>
            </defs>
          </svg>}
        </div>

        <div className={`input ${passwordWrong && 'inputWrong'}`}>
          <input type="password" placeholder='Nhập mật khẩu của bạn' spellCheck='false' onChange={passwordChangeHandler} />
          {passwordWrong && <svg className='wrongIcon' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_915_635)">
              <path d="M7.7786 20.8596C11.3909 24.472 17.2477 24.472 20.8601 20.8596C24.4724 17.2473 24.4724 11.3905 20.8601 7.77816C17.2477 4.16581 11.3909 4.16581 7.7786 7.77816C4.16625 11.3905 4.16625 17.2473 7.7786 20.8596Z" fill="#FF0000" />
              <path d="M7.07151 21.2132C3.17182 17.3135 3.17182 10.9708 7.07151 7.07107C10.9712 3.17137 17.314 3.17137 21.2136 7.07107C25.1133 10.9708 25.1133 17.3135 21.2136 21.2132C17.314 25.1129 10.9712 25.1129 7.07151 21.2132ZM19.7994 8.48528C16.6793 5.36517 11.6041 5.36694 8.48572 8.48528C5.36738 11.6036 5.36562 16.6789 8.48572 19.799C11.6058 22.9191 16.6811 22.9173 19.7994 19.799C22.9178 16.6806 22.9195 11.6054 19.7994 8.48528Z" fill="#FF0000" />
              <path d="M18.3855 16.9705L11.3145 9.89948L9.90024 11.3137L16.9713 18.3848L18.3855 16.9705Z" fill="white" />
              <path d="M18.3849 11.3137L16.9707 9.89948L9.89964 16.9705L11.3138 18.3848L18.3849 11.3137Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_915_635">
                <rect width="20" height="20" fill="white" transform="translate(14.1426) rotate(45)" />
              </clipPath>
            </defs>
          </svg>}
        </div>
        <button className='loginButton'>Đăng nhập</button>
        <div className='forgetPassword' onClick={() => navigate('/forget')}>Quên mật khẩu?</div>
        {(accountWrong || passwordWrong) && <div className='wrongInputLogin'>Tài khoản hay mật khẩu của bạn không đúng.</div>}
        {/* <div className='iconAdmin'>Admin Login</div> */}
      </form>
      <div className='overlay' />
    </div>
  )
}

export default Login