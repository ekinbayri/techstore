import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductUpdateForm({productId, product}) {
    const [id, setId] = useState(productId)
    const [name,setName] = useState(product.name)
    const [category,setCategory] = useState(product.category)
    const [price,setPrice] = useState(product.price)
    const [quantity,setQuantity] = useState(product.quantity)
    const [description,setDescription] = useState(product.description)
    const [img,setImg] = useState(product.photo)

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
        sendRequest();
    }
    
    
    function sendRequest() {
        fetch("http://localhost:8080/products/",{
            method : "PUT",
            headers : {
                "Authorization": localStorage.getItem("tokenKey"),
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                id: id,
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
    <Form>
    
    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder={name} onChange={(e) => handleName(e.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder={description} onChange={(e) => handleDescription(e.target.value)}/>
      </Form.Group>

     

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Category</Form.Label>
          <Form.Control placeholder={category} onChange={(e) => handleCategory(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder={price} onChange={(e) => handlePrice(parseInt(e.target.value))}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Quantity</Form.Label>
          <Form.Control placeholder={quantity} onChange={(e) => handleQuantity(parseInt(e.target.value))}/>
        </Form.Group>
      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Add picture</Form.Label>
        <Form.Control type="file" onChange={(e) => handleImg(e.target.files[0])}/>
      </Form.Group>
        
      <Button variant="primary" onClick={handleForm}>
        Submit
      </Button>
      
    </Form>
  )
}

export default ProductUpdateForm