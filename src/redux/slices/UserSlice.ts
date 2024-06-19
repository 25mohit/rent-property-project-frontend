import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ShowLoader } from "./SettingSlice";

export const SignInUser = createAsyncThunk("SignInUser", async (payload: any, { dispatch }) => {
  dispatch(ShowLoader(true))
  try {
    const response = await axios.post(`https://relicet.up.railway.app/users/secure-login`, payload);
    dispatch(ShowLoader(false))
    return response.data
  }
  catch (error) {
    dispatch(ShowLoader(false))
    throw error;
  }
})

export const CheckEmail = createAsyncThunk("CheckEmail", async (payload: any, { dispatch }) => {
  dispatch(ShowLoader(true))
  try {
    const response = await axios.post(`https://relicet.up.railway.app/utils/check-email`, payload);
    dispatch(ShowLoader(false))
    return response.data
  }
  catch (error) {
    dispatch(ShowLoader(false))
    throw error;
  }
})

export const VerifyOTP = createAsyncThunk("VerifyOTP", async (payload: any, { dispatch }) => {
  dispatch(ShowLoader(true))
  try {
    const response = await axios.post(`https://relicet.up.railway.app/utils/verify-otp`, payload);
    dispatch(ShowLoader(false))
    return response.data
  }
  catch (error) {
    dispatch(ShowLoader(false))
    throw error;
  }
})

export const RegisterUser = createAsyncThunk("RegisterUser", async (payload: any, { dispatch }) => {
  dispatch(ShowLoader(true))
  try {
    const response = await axios.post(`https://relicet.up.railway.app/users/register`, payload);
    dispatch(ShowLoader(false))
    return response.data
  }
  catch (error) {
    dispatch(ShowLoader(false))
    throw error;
  }
})

const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: {}, 
    otpData: {} ,
    checkEmailData:{},
    registerData:{}
  } as { data: Record<string, any>; otpData: Record<string, any>; registerData: Record<string, any>, checkEmailData: Record<string, any> }, // Explicitly define the type of initialState
  reducers: {}, // Define your reducers if any
  extraReducers: (builder) => {
    builder.addCase(SignInUser.fulfilled, (state, action) => {
        const payload = action.payload
        console.log("payload", payload);
        state.data = payload;
    })
    builder.addCase(CheckEmail.fulfilled, (state, action) => {
        const payload = action.payload
        console.log("payload", payload);
        state.checkEmailData = payload;
    })
    builder.addCase(VerifyOTP.fulfilled, (state, action) => {
        const payload = action.payload
        console.log("payload", payload);
        state.otpData = payload;
    })
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
        const payload = action.payload
        console.log("payload", payload);
        state.registerData = payload;
    })
  }
});

export default UserSlice.reducer;