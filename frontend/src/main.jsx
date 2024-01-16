import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'//bridge between react and redux
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import PrivateRoute from './components/PrivateRoute.jsx'
import ProtectAdmin from './components/ProtectAdmin.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import AdminLoginScreen from './screens/AdminScreens/AdminLoginScreen.jsx'
import DashScreen from './screens/AdminScreens/DashScreen.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route index={true} path='/' element={<HomeScreen/>}/>
       <Route  path='/login' element={<LoginScreen/>}/>
       <Route  path='/signup' element={<RegisterScreen/>}/>
       <Route  path='' element={<PrivateRoute/>}> // private route
       <Route  path='/profile' element={<ProfileScreen/>}/>
       </Route>
       <Route  path='/admin' element={<AdminLoginScreen/>}/>
       <Route  path='' element={<ProtectAdmin/>}>
       <Route  path='/admin/dashboard' element={<DashScreen/>}/>
       </Route>

       
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
)
