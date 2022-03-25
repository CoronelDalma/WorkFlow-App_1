import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'
import teamReducer from '../features/team/teamSlice'
import sidebarReducer from '../features/sidebarSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        team: teamReducer,
        sidebar: sidebarReducer,
    }
})

export default store;