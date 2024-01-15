import {configureStore} from '@reduxjs/toolkit'
import authReducer from './Slices/authSlice';
import { apiSlice } from './Slices/apiSlice';
import adminReducer from './Slices/AdminSlice/authSlice';
import {adminApiSlice} from './Slices/AdminSlice/apiSlice' 

console.log(adminReducer);

const store = configureStore({
    reducer:{
       auth:authReducer,
       adminAuth:adminReducer,
    //    [adminApiSlice.reducerPath] : adminApiSlice.reducer,
       [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

export default store;