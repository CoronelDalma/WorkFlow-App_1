import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// Axios
import {get, post} from "../../api"
export const teams = createAsyncThunk("team/teams", async(params,thunkAPI) =>{
    const response = await get("/teams")
    console.log(response)
    return response.data
})

const teamSlice = createSlice({
    name: 'team',
    initialState:{
        name:"",
        loading:false,
        error: true,
        message:"",
        teams:[]
    },
    reducers:{

    },
    extraReducers(builder) {
        //login
        builder.addCase(teams.pending,(state,action) =>{
            state.name = ""
            state.loading = true
            state.error = false
            state.message = ""
        })
        builder.addCase(teams.fulfilled,(state,action) =>{
            state.name = action.payload.name
            state.loading = false
            state.error = false
            state.message = ""
        })
        builder.addCase(teams.rejected,(state,action) =>{
            state.loading = false
            state.error = true
            state.message = "Error cargando teams"
        })
    }
})

// export const {logout} = userSlice.actions // Esto se utiliza en el dispatch
export default teamSlice.reducer // Esto en el store