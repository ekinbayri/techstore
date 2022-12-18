
import './App.css';
import Index from './pages/index.js';
import Login from './pages/login.js';
import Profile from './pages/profile.js';
import Register from './pages/register.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return(
    <BrowserRouter>
    
    <Routes>
      <Route index element={ <Index/> }/>
      <Route path ="/profile" element = {<Profile/>}/>
      <Route path ="/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
