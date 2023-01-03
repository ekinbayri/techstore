import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ProductForm from '../forms/ProductForm'
import DeleteProductForm from '../forms/DeleteProductForm'
import EditProductForm from '../forms/EditProductForm'
import { useNavigate } from 'react-router-dom'

function ManageProduct() {
    const [show,setShow] = useState(false)
    const [deleteItem,setDelete] = useState(false)
    const [edit,setEdit] = useState(false)
    let navigate = useNavigate()
    function handleShow(){
      setShow(!show)
    }
    function handleDelete(){
      setDelete(!deleteItem)
    }
    function handleEdit(){
      setEdit(!edit)
    }
    function handleProduct(){
      return <ProductForm/>
    }
    function handleProductDeleteForm(){
      return <DeleteProductForm/>
    }
    function handleEditForm(){
      return <EditProductForm/>
    }
   


  return (
    <Container fluid = "true">
            <Button variant="outline-primary"  className = "asdf2"  onClick={() => navigate('addform')}>Add product</Button>
            <Button variant="outline-primary"  className = "asdf2"  onClick={() => navigate('deleteform')}>Delete product</Button>
            <Button variant="outline-primary"  className = "asdf2"  onClick={() => navigate('editform')}>Edit product</Button>
          
    </Container>
   
   
  )
}

export default ManageProduct