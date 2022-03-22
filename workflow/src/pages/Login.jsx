import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Fondo from '../components/layouts/Fondo'

import {useSelector, useDispatch} from 'react-redux'
import {login,logout} from '../features/user/userSlice'
import { URL } from "../config"

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
      <div className='container w-96 h-max flex flex-col p-5 border-c-border text-white text-center mx-auto mt-4 bg-gray-400 hover:bg-purple-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-50 border border-gray-100 shadow-md'>
        <h1 className='text-4xl my-3'>Iniciar sesión</h1>
        <Link to="/" className='text-1xl'>o cree una cuenta</Link>
        <form onSubmit={iniciarSesion}>
          <div className='container__inputs flex flex-col gap-3 text-left my-9'>
            <div className="input_box flex flex-col">
              <label ><span>Correo electrónico</span></label>
              <input type="text" name='email' placeholder='ejemplo@email.com' className='text-lg text-black' required/>
            </div>
            <div className="input_box flex flex-col">
              <label ><span>Contraseña</span></label>
              <input className='text-black' type="password" name='password' placeholder='contraseña' required/>
            </div>

          </div>
          <div className="container__buttons flex flex-col items-center gap-4">
            <button  className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
              Iniciar Sesión
            </button>
           
          </div>
        
        </form>
        {user.error&&<p>{user.message}</p>}
        {user.loading&&<p>Loading...</p>}
        <a href={`${URL}/auth/google`} className='bg-indigo-600 py-4 px-3 flex mt-6 justify-center items-center gap-3'><span><FcGoogle/></span>Iniciar sesión con Google</a>
      </div> 
    </Fondo>
  )
}

export default Login