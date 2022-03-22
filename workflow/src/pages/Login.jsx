import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Fondo from '../components/layouts/Fondo'

import {useSelector, useDispatch} from 'react-redux'
import {login,logout} from '../features/user/userSlice'
import { URL } from "../config"
import Button from '../components/Buttons/Button'

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(()=>{
    if(user.logged){
        navigate("/")
    }
  },[user])

  const iniciarSesion = (event) => {
    event.preventDefault()
    const {email:{value:email},password:{value:password}} = event.target;
    console.log(event.target)
    dispatch(login({email,password}))
  }
  return (
    <Fondo>
      <div className="bg-white w-1/4 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg shadow-md">
        <h1 className='p-5 text-3xl font-bold text-center'>Iniciar sesión</h1>
        <p className='text-center hover:text-color-tertiary'><Link to="/register" className='text-1xl'>o cree una cuenta</Link></p>
        <form className='flex flex-col p-5' onSubmit={iniciarSesion}>
                <input className='p-4 bg-lavender-100 outline-none border focus:border-color-tertiary my-5 rounded-md' name='email' placeholder='Email...' type="email" required/>
                <input className='p-4 bg-lavender-100 outline-none border focus:border-color-tertiary my-5 rounded-md' name='password' placeholder='Password...' type="password" required/>
               
                <Button>Iniciar sesión</Button>
        </form>
        {user.error&&<p>{user.message}</p>}
        {user.loading&&<p>Loading...</p>}
        <a href={`${URL}/auth/google`} className='bg-indigo-600 py-4 px-3 flex mt-6 justify-center items-center gap-3 rounded-b-md'><span><FcGoogle/></span>Iniciar sesión con Google</a>
      </div> 
    </Fondo>
  )
}

export default Login