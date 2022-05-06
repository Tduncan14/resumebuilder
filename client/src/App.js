import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Template from './pages/templates';



function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path = "/" element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
        <Route path = "/home" element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
        <Route path ="/profile" element = {<ProtectedRoute> <Profile/> </ProtectedRoute>} />
        <Route path ="/templates/:id" element = {<ProtectedRoute> <Template /> </ProtectedRoute>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>

      </Routes>
   </BrowserRouter>
  );
}

export default App;



export function ProtectedRoute(props){


  console.log(props)

  if(localStorage.getItem('user')){
    console.log(props.children)
    
    return props.children
  }

  else{
     return <Navigate to="/login"/>
  }






}