import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import EditProductPage from '../pages/EditProductPage'

function ProductComponentWButton({product}) {
    let navigate = useNavigate()
  return (
    <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td><Button onClick={()=>  }></Button></td>
    </tr>
  )
}

export default ProductComponentWButton