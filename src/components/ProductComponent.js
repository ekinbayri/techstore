import React from 'react'

function ProductComponent({product}) {
  return (
    <tr>

        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
    </tr>
    
  )
}

export default ProductComponent