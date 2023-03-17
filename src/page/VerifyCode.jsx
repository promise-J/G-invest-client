import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const VerifyCode = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const [code, setCode] = useState('')
    const [email, setEmail] = useState('')
    
    useEffect(()=>{
        if(state){
            setEmail(state.email)
        }else{
            return navigate('/login')
        }
    },[navigate, state])
    const handleSubmit = async()=>{
        try {
            await axios.put('http://localhost:5000/api/auth/verify', {verificationCode: code, email})
            toast.success('Verified')
            navigate('/login')
        } catch (error) {
            toast.error('Not verified, please enter the code')
            console.log(error)
        }
    }
  return (
    <div className='verifyCode'>
        <input type="text" onChange={(e)=> setCode(e.target.value)} value={code} placeholder='Enter Verification Code' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default VerifyCode