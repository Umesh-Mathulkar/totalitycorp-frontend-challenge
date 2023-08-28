import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios
import { loginApi, registerApi } from '../../../services/authServices';
import { useAppDispatch } from '../../hook';
import { userApi } from '../../../services/userServices';
import { clearUser, setUser } from '../../slices/authSlice';

export interface LoginData {
  email: string;
  password: string;
}


interface LoginResponse {
  // ...
}
interface RegisterResponce{
  
}

export const login = createAsyncThunk<LoginResponse, LoginData>(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(loginApi, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await localStorage.setItem('jwtToken', response.data.token);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchUserDetails = createAsyncThunk<LoginResponse, void>(
  'auth/fetchUserDetails',
  async (_, thunkAPI) => {
    try {
      const userResponse = await axios.get(userApi, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
      });

      const user = userResponse.data;

   
      thunkAPI.dispatch(setUser(user));

      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const logout = createAsyncThunk<LoginResponse,void>(
  'auth/logout',
  async(_,thunkApi)=>{
    try{
      thunkApi.dispatch(clearUser());
    }
    catch(error){
      throw error
    }
  }
)


export const register = createAsyncThunk<RegisterResponce,LoginData>(
  'auth/register',
  async(data,thunkApi)=>{
    try{
      const response = await axios.post(registerApi, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data
    }
    catch(error){
      throw error
    }
  }
)




