import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Fondo from '../components/layouts/Fondo'

import {useSelector, useDispatch} from 'react-redux'
import {login,logout} from '../features/user/userSlice'

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
    const {email:{value:email},password:{value:password}} = event.target
    dispatch(login({email,password}))
  }
  return (
    <Fondo>
      <div className='container w-96 flex-col p-5 border-2 border-c-border bg-stone-400 text-white text-center mx-auto'>
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
              <input type="password" name='password' placeholder='contraseña' required/>
            </div>

          </div>
          <div className="container__buttons flex flex-col items-center gap-4">
            <button type="button" className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
              Iniciar Sesión
            </button>
           
          </div>
        
        </form>
        {user.error&&<p>{user.message}</p>}
        {user.loading&&<p>Loading...</p>}
        <a href="https://backendtzuzulcode.wl.r.appspot.com/auth/google" className='bg-indigo-600 py-4 px-3 flex'><span><FcGoogle/></span>Iniciar sesión con Google</a>
      </div> 
    </Fondo>
  )
}

export default Login