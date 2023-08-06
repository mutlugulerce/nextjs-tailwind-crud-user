import {BASE_URL} from '../constans/api';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
users: [],
loading: false,
error: '',
}

export const fetchUser = createAsyncThunk('users/fetchUsers',async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (error) {
     throw new Error('Network response was not ok');       
    }
} )


export const createUser = createAsyncThunk('users/createUser' , async(user) => {
   return axios.post(`${BASE_URL}/users`, {
    name: user.name,
    email:user.email,
   })
   .then((response) => response.data)
})




export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{ },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading =true;
        });
        builder.addCase(fetchUser.fulfilled, (state,action) => {
            state.loading= false;
            state.error= '';
            state.users= action.payload;
        });
        builder.addCase(fetchUser.rejected, (state) => {
            state.loading;
            state.users= [];
            state.error= 'Yüklenemedi'
        });
        builder.addCase(createUser.pending, (state) => {
            state.loading= true;
        });
        builder.addCase(createUser.fulfilled, (state,action) => {
            state.loading= false;
            state.error='';
            state.users= [...state.users, action.payload];
        });
        builder.addCase(createUser.rejected, (state) => {
            state.loading;
            state.users= [];
            state.error= 'Could not create user'
        });
    }
})


export default userSlice.reducer