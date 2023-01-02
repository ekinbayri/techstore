import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ProductForm from '../forms/ProductForm'


function ManageProduct() {
    const [show,setShow] = useState(false)
    const [deleteItem,setDelete] = useState(false)
    const [edit,setEdit] = useState(false)
    function handleShow(){
        setShow(!show)
      }
      function handleDelete(){
        setDelete(!deleteItem)
      }
      function handleShow(){
        setShow(!show)
      }
    function handleProduct(){
        return <ProductForm/>
    }



  return (
    <Container fluid = "true">
            <Button variant="outline-primary"  className = "buttontest"  onClick={handleShow}>Add product</Button>
            <Button variant="outline-primary"  className = "buttontest"  onClick={handleShow}>Delete product</Button>
            <Button variant="outline-primary"  className = "buttontest"  onClick={handleShow}>Edit product</Button>
            { show ? handleProduct() : null }
    </Container>
   
   
  )
}

export default ManageProduct