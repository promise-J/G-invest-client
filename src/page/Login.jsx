import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
// import useAuth from '../hooks/useAuth'
import { setToken, setUser } from '../redux/userSlice'
const initialState = {
  email: "",
  password: ""
}


const Login = () => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const {email, password} = data
  const dispatch = useDispatch()
  // const authMan = useAuth()

  const handleChange = (e)=>{
    const {value, name} = e.target
    setData({...data, [name]: value})
  }

  const isComplete = ()=>{
    return (!email || !password)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const {data: res} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, data)
      dispatch(setUser(res.user))
      dispatch(setToken(res.accessToken))
      setLoading(false)
      localStorage.setItem('IToken', res.accessToken)
      // navigate('/dashboard')
      window.location.href = '/dashboard'
    } catch (error) {
      console.log(error, 'from the login error')
      setLoading(false)
      toast.error(error?.response.data)
    }
  }

  return (
    <div className='login'>
        <div className="container">
            <h4>Sign in to your account</h4>
            <label className='input-label' htmlFor="email">Email</label>
            <input onChange={handleChange} name='email' value={email} type="text" placeholder='Email' />
            <label className='input-label' htmlFor="password">Password</label>
            <input onChange={handleChange} name='password' value={password} type="text" placeholder='Password' />
            <input type="checkbox" />
            <label className='rem-label' htmlFor="remember">Remember me</label>
            <button onClick={handleSubmit} disabled={isComplete()} className='login-btn'>{loading ? 'Loading...' : 'Login' }</button>
        </div>
    </div>
  )
}

export default Login