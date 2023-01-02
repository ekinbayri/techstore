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
import Log from './components/LogComponent';
import Logs from './pages/Logs';
function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  

  return(
    <BrowserRouter>
    
    <Routes>
      <Route index element={ <Index/> }/>
      
      <Route path = "/profile" element = {<Profile/>}>

      <Route path = "addresses" element = {<Addresses/>}/>
      <Route path = "orders" element = {<Orders/>} />
      <Route path = "userdetails" element = {<UserDetails/>} />
      </Route>
      
      <Route path = "/login" element = {localStorage.getItem("currentUser") != null ? <Navigate to = "/"/>:<Login/>} />
      <Route path =  "/adminpanel" element = {<AdminPanel/>}>
      <Route path = "productmanagement" element = {<ManageProduct/>}/>
      <Route path = "logs" element = {<Logs/>}/>
      </Route>
      <Route  path = "/register" element = {localStorage.getItem("currentUser") != null ? <Navigate to = "/"/>:<Register/>}/>
      <Route path = "/products" element = {<Products onAdd={onAdd} onRemove={onRemove}/>} />
      <Route path = "/mycart" element = {<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
