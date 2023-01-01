import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
function Categories() {
  function MouseOver(event) {
    event.target.style.background = 'silver';
  }
  function MouseOut(event){
    event.target.style.background="";
  }
  let navigate = useNavigate();

  function getItems(){
    fetch("http://localhost:8080/products/",{
      method : "GET",
      headers : {
          "Authorization": localStorage.getItem("tokenKey"),
          "Content-Type":"application/json"
      },
     
  })
    .then((res) => res.json())
    .then((result) =>  console.log(result))
    .catch((err) => console.log(err)) 
  }

  useEffect(() => {
    getItems()
    
  }, []);


  return (
    <Nav className="justify-content-center" fill variant="tabs"
      activeKey="/home"
      onSelect={(selectedKey) => {localStorage.setItem("productType",selectedKey); navigate("/products")}}
    >
      <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <Nav.Link eventKey = "Smartphones" style = {{color : "black"}}>SmartPhones</Nav.Link>
      </Nav.Item>
      <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <Nav.Link eventKey="Laptops" style = {{color : "black"}}>Laptops</Nav.Link>
      </Nav.Item>
      <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <Nav.Link eventKey="Tv" style = {{color : "black"}}>Tv</Nav.Link>
      </Nav.Item>
      <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <Nav.Link eventKey="House Electronics" style = {{color : "black"}}>House Electronics</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Categories;