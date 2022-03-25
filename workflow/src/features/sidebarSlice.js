import {createSlice} from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState:true,
    reducers:{
        setOpen:(state) => !state,
    },
})

export const {setOpen} = sidebarSlice.actions // Esto se utiliza en el dispatch
export default sidebarSlice.reducer // Esto en el store