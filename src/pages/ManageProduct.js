import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ProductForm from '../forms/ProductForm'
import DeleteProductForm from '../forms/DeleteProductForm'

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
    function handleProductDeleteForm(){
      return <DeleteProductForm/>
  }



  return (
    <Container fluid = "true">
            <Button variant="outline-primary"  className = "buttontest"  onClick={handleShow}>Add product</Button>
            <Button variant="outline-primary"  className = "buttontest"  onClick={handleDelete}>Delete product</Button>
            <Button variant="outline-primary"  className = "buttontest"  onClick={handleShow}>Edit product</Button>
            { show ? handleProduct() : null }
            { deleteItem ? handleProductDeleteForm() : null }
    </Container>
   
   
  )
}

export default ManageProduct