import { useContext } from 'react'
import { useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setAToken,backendUrl} = useContext(AdminContext)
    const {setDToken} = useContext(DoctorContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            if(state === 'Admin') {
                const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password})
                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                    navigate('/admin-dashboard')
                }else{
                    toast.error(data.message)
                }
            }else{
                const {data} = await axios.post(backendUrl+'/api/doctor/login',{email,password})
                if (data.success) {
                    localStorage.setItem('dToken', data.token)
                    setDToken(data.token)
                    navigate('/faculty-dashboard')
                }else{
                    toast.error(data.message)
                }
            }
                
        } catch (error) {
            toast.error(error.message)
            console.log(error.message);
            
        }
    }
  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-[#5F6FFF]'>{state}</span> Login</p>
        <div className='w-full'>
            <p>Email</p>
            <input 
            onChange= {(e) => setEmail(e.target.value)} value = {email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full'>
            <p>Password</p>
            <input 
            onChange= {(e) => setPassword(e.target.value)} value = {password}
            className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-[#5F6FFF] text-white w-full py-2 rounded-md text-base'>Login</button>
        {
            state === 'Admin' ? (
                <p onClick={() => setState('Faculty')}>Faculty Login?  <span className='text-[#5F6FFF] underline cursor-pointer'>Click here</span></p>
            ) : (
                <p onClick={() => setState('Admin')}>Admin Login? <span className='text-[#5F6FFF] underline cursor-pointer'>Click here</span></p>
            )
        }
      </div>
    </form>
  )
}

export default Login
