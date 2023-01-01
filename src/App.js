import './App.css';
import Index from './pages/index.js';
import Login from './pages/login.js';
import Profile from './pages/profile.js';
import Register from './pages/register.js';
import Orders from './components/Orders.js';
import Products from './pages/products.js';
import Addresses from './pages/Addresses';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyCart from './pages/MyCart';
import BillingInformation from './pages/BillingInformation';
import AdminPanel from './pages/AdminPanel';
function App() {
  return(
    <BrowserRouter>
    
    <Routes>
      <Route index element={ <Index/> }/>
      
      <Route path = "/profile" element = {<Profile/>}>

      <Route path = "addresses" element = {<Addresses/>}/>
      
  
      <Route path = "orders" element = {<Orders/>} />
      
      </Route>
      
      <Route path = "/login" element = {localStorage.getItem("currentUser") != null ? <Navigate to = "/"/>:<Login/>} />
      <Route path =  "/adminpanel" element = <AdminPanel/> />
     
      <Route  path = "/register" element = {localStorage.getItem("currentUser") != null ? <Navigate to = "/"/>:<Register/>}/>
      <Route path = "/products" element = {<Products/>} />
      <Route path = "/mycart" element = {<MyCart/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
