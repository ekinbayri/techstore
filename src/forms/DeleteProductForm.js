import React, { useEffect, useState } from 'react'
import { Form, Table, Button, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ProductComponent from '../components/ProductComponent'

function DeleteProductForm() {
  const [products, setProducts] = useState([])
  const [productId, setproductId] = useState(0)
  let navigate = useNavigate();

  function deleteRequest(){
    fetch("http://localhost:8080/products/" + productId,{
        method : "DELETE",
        headers : {
            "Authorization": localStorage.getItem("tokenKey"),
            "Content-Type":"application/json"
        },
        
    })
    navigate(0)
  }

  useEffect(() => {
      fetch("http://localhost:8080/products/",{
        method : "GET",
        headers : {
            "Content-Type":"application/json"
        },

    })
      .then((res) => res.json())
      .then((result) =>  setProducts(result))
      .catch((err) => console.log(err)) 
    }, [])

  return (
    <div>
      
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter product id</Form.Label>
          <Form.Control placeholder="Enter id"  onChange={(e) => setproductId(e.target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Row>
          <Link to="/adminpanel/productmanagement"><Button> Go Back</Button> </Link>
        </Row>
        
        <Button variant="danger" onClick={() => deleteRequest()}>
          DELETE
        </Button>

      </Form>
      <Table responsive>

        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>category</th>
            <th>quantity</th>
            <th>price</th>
            
          </tr>
        </thead>

        <tbody>
          {products.map((product) => <ProductComponent product = {product}/>)}
        </tbody>
        
      </Table>
    </div>
    
  )
}

export default DeleteProductForm