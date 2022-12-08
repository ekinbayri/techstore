
import './App.css';
import Index from './pages/index.js';
import Header from './components/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={ <Index/> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
