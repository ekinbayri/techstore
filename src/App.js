
import './App.css';
import Index from './pages/index.js';

import Profile from './pages/profile.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return(
    <BrowserRouter>
    
    <Routes>
      <Route index element={ <Index/> }/>
      <Route path ="/profile" element = {<Profile/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
