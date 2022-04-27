import logo from './logo.svg';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route index path = "/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>

      </Routes>
   </BrowserRouter>
  );
}

export default App;