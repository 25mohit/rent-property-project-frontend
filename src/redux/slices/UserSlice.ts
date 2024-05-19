import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// utils/check-email
// utils/verify-otp
// users/register

export const SignInUser = createAsyncThunk("SignInUser", async (payload: any, { dispatch }) => {
  try {
    const response = await axios.post(`http://localhost:5000/users/secure-login`, payload);
    console.log("response", response, payload);
    return response.data
  }
  catch (error) {
    throw error;
}
})
export const CheckEmail = createAsyncThunk("CheckEmail", async (payload: any, { dispatch }) => {
  try {
    const response = await axios.post(`http://localhost:5000/utils/check-email
    `, payload);
    console.log("response", response, payload);
    return response.data
  }
  catch (error) {
    throw error;
}
})

const UserSlice = createSlice({
  name: "user",
  initialState: { data: {} } as { data: Record<string, any> }, // Explicitly define the type of initialState
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
        state.data = payload;
    })
  }
});

export default UserSlice.reducer;