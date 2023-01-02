import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'


function ManageProduct() {
    const [show,setShow] = useState(false)
    function handleShow(){
        setShow(!show)
      }
    function handleProduct(){
        
    }



  return (
    <Container>
            <Button variant="outline-primary"  className = "asdf"  onClick={handleShow}>Add product</Button>
            { show ? handleProduct() : null }
    </Container>
   
   
  )
}

export default ManageProduct