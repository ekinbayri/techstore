import './App.css';
import Index from './pages/index.js';
import Login from './pages/login.js';
import Profile from './pages/profile.js';
import Register from './pages/register.js';
import Orders from './components/Orders.js';
import Products from './pages/products.js';
import Addresses from './pages/Addresses';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Basket from './pages/Basket';

import AdminPanel from './pages/AdminPanel';
import { useState } from 'react';
import ManageProduct from './pages/ManageProduct';
import UserDetails from './pages/UserDetails';

import Logs from './pages/Logs';
import UserForm from './forms/UserForm';
import ManageUser from './pages/ManageUser';
function App() {

  const [cartItems, setCartItems] = useState([]);
  const [countItems,setCountItems] = useState([]);


  return(
    <BrowserRouter>
    
    <Routes>
      <Route index element={ <Index/> }/>
      
      <Route path = "/profile" element = {<Profile/>}>
        <Route path = "addresses" element = {<Addresses/>}/>
        <Route path = "orders" element = {<Orders/>} />
        <Route path = "userdetails" element = {<UserDetails/>} />
        <Route path = "userform" element = {<UserForm/>} />
      </Route>

      <Route path = "/login" element = {localStorage.getItem("currentUser") != null ? <Navigate to = "/"/>:<Login/>} />

      <Route path =  "/adminpanel" element = {<AdminPanel/>}>
        <Route path = "productmanagement" element = {<ManageProduct/>}/>
        <Route path = "logs" element = {<Logs/>}/>
        <Route path = "manageuser" element = {<ManageUser/>} />
      </Route>

      <Route  path = "/register" element = {localStorage.getItem("currentUser") != null ? <Navigate to = "/"/>:<Register/>}/>
      <Route path = "/products" element = {<Products cartItems = {cartItems} setCartItems = {setCartItems} countItems = {countItems} setCountItems = {setCountItems}/>} />
      <Route path = "/mycart" element = {<Basket cartItems={cartItems} countItems = {countItems} />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
