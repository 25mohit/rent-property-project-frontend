import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice"
import SettingReducer from "./slices/SettingSlice"

const rootReducer = combineReducers({
  user: UserReducer,
  settings: SettingReducer
    // Add other reducers here
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  
  export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: rootReducer
})