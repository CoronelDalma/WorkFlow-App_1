import { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Header from './components/layouts/Header';
import { Home, Login, NotFound} from './pages';
import { validate } from './features/user/userSlice';


function App() {
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(validate())
  },[])
  
  return (
    <BrowserRouter>
      <Header/>
      <div className=' max-w-screen-xl mx-auto'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;