import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBCardText,
  } from "mdb-react-ui-kit";
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import { Form, useNavigate } from 'react-router-dom';
function EditProductForm() {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  const [show, setShow] = useState([])
  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [price,setPrice] = useState(0)
  const [quantity,setQuantity] = useState(1)
  const [description,setDescription] = useState("")
  const [img,setImg] = useState(null)
  let rows = [];
  useEffect(() => {
    fetch("http://localhost:8080/products",{
      method : "GET",
      headers : {
          "Content-Type":"application/json"
      },

  })
    .then((res) => res.json())
    .then((result) =>  setProducts(result))
    .catch((err) => console.log(err)) 
  }, [])


  function showProducts(){
    for (let i = 0; i < products.length; i++) {
        rows.push(<MDBRow className="mb-4 d-flex justify-content-between align-items-center">
        <MDBCol md="2" lg="2" xl="2">
          <MDBCardImage
            src = {products[i].photo}
            fluid className="rounded-3" alt="Cotton T-shirt" />
        </MDBCol>
        <MDBCol md="2" lg="2" xl="2">
        <MDBTypography tag="h6" className="text-black mb-0">
           {products[i].name}
          </MDBTypography>
          <MDBTypography tag="h6" className="text-muted">
          {products[i].description}
          </MDBTypography>
          
        </MDBCol>
         <MDBCol md="2" lg="2" xl="2" >
          <MDBTypography tag="h6" className="mb-0">
          Category: {products[i].category}
          </MDBTypography>
        </MDBCol>



        <MDBCol md="2" lg="2" xl="2" className="d-flex align-items-center">
      
        <MDBTypography tag="h6" className="mb-0">
         Quantity: {products[i].quantity}
          </MDBTypography>
    
        </MDBCol>
        <MDBCol md="3" lg="2" xl="2" >
          <MDBTypography tag="h6" className="mb-0">
          {products[i].price}$
          </MDBTypography>
        </MDBCol>

       
        
        <MDBCol md="3" lg="2" xl="2" >
          <MDBTypography tag="h6" className="mb-0">
          <Button variant = 'success' onClick={() =>{handleButton(products[i])}}>Edit product</Button>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="1" lg="1" xl="1" className="text-end">
          <a href="#!" className="text-muted">
            <MDBIcon fas icon="times" />
          </a>
        </MDBCol>
        <hr className="my-4" />
      
      </MDBRow> 
      )
    }
    return <Row>{rows}</Row>;
   
}
function handleButton(product){
    setShow(!show)
    setProduct(product)
}
function handleName (value){
  setName(value)
}
function handleCategory(value) {
  setCategory(value)
}
function handlePrice(value) {
  setPrice(value)
}
function handleQuantity(value){
  setQuantity(value)
}
function handleDescription(value){
  setDescription(value)
}
function handleImg(value){
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataURL = reader.result;
    setImg(dataURL);
    
  };
  reader.readAsDataURL(value);
}
function handleForm(){
  //sendRequest();
}
function sendRequest() {
  fetch("http://localhost:8080/products",{
      method : "PUT",
      headers : {
          "Authorization": localStorage.getItem("tokenKey"),
          "Content-Type":"application/json"
      },
      body : JSON.stringify({
          name: name,
          category : category,
          price: price,
          quantity: quantity,
          description: description,
          photo:img,
      })
  })
  .then((res) => res.json())
  .then((result) =>  console.log(result))
  .catch((err) => console.log(err))
}


  return (
    <Container>
        {showProducts()}
    </Container>
    
  )
}

export default EditProductForm