import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ProductForm from '../forms/ProductForm'


function ManageProduct() {
    const [show,setShow] = useState(false)
    function handleShow(){
        setShow(!show)
      }
    function handleProduct(){
        return <ProductForm/>
    }



  return (
    <Container>
            <Button variant="outline-primary"  className = "asdf"  onClick={handleShow}>Add product</Button>
            { show ? handleProduct() : null }
    </Container>
   
   
  )
}

export default ManageProduct