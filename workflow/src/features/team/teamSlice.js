import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const teams = createAsyncThunk("team/teams", async(params,thunkAPI) =>{
    const response = await fetch("http://localhost:3004/teams",{
        method: "GET",
        credentials: 'include'
    })

    const data = await response.json();
    if(!data.id) {
        return thunkAPI.rejectWithValue(data)
    }
    return data;
})

const teamSlice = createSlice({
    name: 'team',
    initialState:{
        name:"",
        loading:false,
        error: true,
        message:""
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