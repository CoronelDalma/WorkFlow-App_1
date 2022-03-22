import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// Axios
import {post} from "../../api"

export const login = createAsyncThunk("user/login", async(credentials,thunkAPI) =>{
    /*const response = await fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login",{
        method : "POST",
        credentials: 'include',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
        })
        
    const data = await response.json();
    if(!data.id) {
        return thunkAPI.rejectWithValue(data)
    }
    return data;*/
    //AXIOS
    const response = await post("/auth/login",{
        email:credentials.email,
        password: credentials.password
    })
    return response.data
})

 

export const validate = createAsyncThunk("user/validate", async(params,thunkAPI) =>{
    /*const response = await fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/validate",{
        method: "POST",
        credentials: 'include'
    })

    const data = await response.json();
    if(!data.logged) {
        return thunkAPI.rejectWithValue("Error de validación")
    }
    return data;*/
    //axios
    const response = await post("/auth/validate")
    return response.data
})

export const logout = createAsyncThunk("user/logout", async() =>{
    /*const response = await fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/logout",{
        method : "POST",
        credentials: 'include',
    })

    const data = await response.json();
    return data;*/
    //axios
    const response = await post("/auth/logout")
    return response.data
})

const userSlice = createSlice({
    name: 'user',
    initialState:{
        logged:false,
        name:"",
        loading:false,
        error: true,
        message:""
    },
    reducers:{

    },
    extraReducers(builder){
        //login
        builder.addCase(login.pending,(state,action) =>{
            state.name = ""
            state.loading = true
            state.error = false
            state.message = ""
        })
        builder.addCase(login.fulfilled,(state,action) =>{
            state.logged = true
            state.name = action.payload.name
            state.loading = false
            state.error = false
            state.message = ""
        })
        builder.addCase(login.rejected,(state,action) =>{
            state.logged = false
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })
        //validate
        builder.addCase(validate.pending,(state,action) =>{
            state.loading = true

        })
        builder.addCase(validate.fulfilled,(state,action) =>{
            state.logged = true
            state.name = action.payload.user.name
            state.error = false
            state.loading = false
            state.message = ""
        })
        builder.addCase(validate.rejected,(state,action) =>{
            state.logged = false
            state.loading = false

        })
        //logout
        builder.addCase(logout.pending,(state,action) =>{
            state.loading = true

        })
        builder.addCase(logout.fulfilled,(state,action) =>{
            state.logged = false
            state.name = ""
            state.error = false
            state.loading = false
            state.message = ""
        })
        builder.addCase(logout.rejected,(state,action) =>{
            state.logged = false
            state.name = ""
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })
    }

})
// export const {logout} = userSlice.actions // Esto se utiliza en el dispatch
export default userSlice.reducer // Esto en el store