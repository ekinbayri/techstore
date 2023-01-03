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
import EditProductForm from './forms/EditProductForm';
import DeleteProductForm from './forms/DeleteProductForm';
import ProductForm from './forms/ProductForm';


function App() {

  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id && x.cartQuantity + 1 <= product.quantity ? { ...exist, cartQuantity: exist.cartQuantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, cartQuantity: 1 }]);
    }
  }
  
  const removeItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.cartQuantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, cartQuantity: exist.cartQuantity - 1 } : x
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
        <Route path = "userform" element = {<UserForm/>} />
      </Route>

      <Route path = "/login" element = {localStorage.getItem("currentUser") != null ? <Navigate to = "/"/>:<Login/>} />

      <Route path =  "/adminpanel" element = {<AdminPanel/>}>
        <Route path = "/productmanagement" element = {<ManageProduct/>}>
         
          <Route path = "deleteform" element = {<DeleteProductForm/>}/>
          <Route path = "editform" element = {<EditProductForm/>}/>
          <Route path = "addform" element = {<ProductForm/>}/>
        </Route>
        
        <Route path = "logs" element = {<Logs/>}/>
        <Route path = "manageuser" element = {<ManageUser/>} />
      
      </Route>

      <Route  path = "/register" element = {localStorage.getItem("currentUser") != null ? <Navigate to = "/"/>:<Register/>}/>
      <Route path = "/products" element = {<Products cartItems = {cartItems} setCartItems = {setCartItems} addItem = {addItem} removeItem = {removeItem}/>} />
      <Route path = "/mycart" element = {<Basket cartItems={cartItems} setCartItems = {setCartItems} addItem = {addItem} removeItem = {removeItem}/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
