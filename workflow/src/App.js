import { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/layouts/Header';
import { Home, Login, TeamPage, NotFound, MyTeams, Register, Members, UsersPage} from './pages';
import { validate } from './features/user/userSlice';
import PrivateRoute from './Routers/PrivateRoute';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(validate())
  },[])
  
  return (
    <BrowserRouter>
      <Header/>
      <div className=' max-w-screen-xl mx-auto bg-color-bg flex'>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/my-teams" element={<PrivateRoute><MyTeams/></PrivateRoute>}/>
          <Route path="/my-teams/:idTeam" element={<PrivateRoute><TeamPage/></PrivateRoute>}/>
          <Route path="/members" element={<PrivateRoute><Members/></PrivateRoute>}/>
          <Route path="/users" element={<PrivateRoute><UsersPage/></PrivateRoute>}/>
          <Route path="/users/:idTeam" element={<PrivateRoute><UsersPage/></PrivateRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
