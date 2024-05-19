import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINT } from "../../config";
import axios from "axios";
import { ShowLoader, ShowNotification } from "./SettingSlice";

export const SignInUser = createAsyncThunk("SignInUser", async (payload: any, { dispatch }) => {
  dispatch(ShowLoader(true));
  try {
      const response = await axios.post(`${ENDPOINT}user/secure-login`, payload);
      dispatch(ShowLoader(false));
      const data = response?.data
      if(!data?.status){
        let notifyData = {}
        if(data?.m === "ex"){
          notifyData = {
            show: true,
            success: false, 
            message: "We have already sent OTP. Please wait for 2 minutes"
          }
        } else if(data?.m == "cl"){
          notifyData = {
            show: true,
            success: false, 
            message: "You have not entered Previous OTP. Now Please try again to Login"
          }
        } else if(data?.m == "nf"){
          notifyData = {
            show: true,
            success: false, 
            message: "This eMail id is not registered with us"
          }
        } else if(data?.m == "iv"){
          notifyData = {
            show: true,
            success: false, 
            message: "eMail ID or Password is Incorrect"
          }
        }
        dispatch(ShowNotification(notifyData))
      } else if(data?.status){
        let notifyData = {}
        if(data?.m === "ss"){
          notifyData = {
            show: true,
            success: true, 
            message: "OTP Sent Successfully. Please check your eMail"
          }
        }
        dispatch(ShowNotification(notifyData))

      }
      return response.data;
  } catch (error) {
      dispatch(ShowLoader(false));
      throw error;
  }
});

export const VerifyOTPHandler = createAsyncThunk("VerifyOTPHandler", async(payload: any, { dispatch }) => {
  dispatch(ShowLoader(true));
  try {
    const response = await axios.post(`${ENDPOINT}user/secure/verify-otp`, payload)
    dispatch(ShowLoader(false));
    const data = response?.data
    if(!data?.status){
      let notifyData = {}
      if(data?.m === "iv"){
        if(data?.field === "id"){
          notifyData= {
            show: true,
            success: false,
            message: "Your User ID is Invalid"
          }
        } else if(data?.field === "otp"){
          notifyData= {
            show: true,
            success: false,
            message: "Invalid OTP"
          }
        }
      } else if(data?.m === "xp"){
        notifyData= {
          show: true,
          success: false,
          message: "Your OTP is Expired"
        }
      }
      dispatch(ShowNotification(notifyData))
    } else if(data?.status){
      const notifyData = {
        show: true, 
        success: true,
        message: "OTP Verified"
      }
      dispatch(ShowNotification(notifyData))
    }
    return response?.data
  } catch (error) {
    dispatch(ShowLoader(false));
    console.log("ERROR", error);
    
  }
})

const UserSlice = createSlice({
  name: "user",
  initialState: { data: {} } as { data: Record<string, any> }, // Explicitly define the type of initialState
  reducers: {}, // Define your reducers if any
  extraReducers: (builder) => {
    builder.addCase(SignInUser.fulfilled, (state, action) => {
        const payload = action.payload
        if(payload?.status){
            localStorage.setItem('token', payload.d)
        }
        state.data = payload;
    })
    .addCase(SignInUser.rejected, (state, action) => {        
      state.data = action
    })
    builder.addCase(VerifyOTPHandler.fulfilled, (state, action) => {
        const payload = action.payload
        if(payload?.status){
            localStorage.setItem('token', payload.d)
        }
        state.data = payload;
    })
  },
});

export default UserSlice.reducer;