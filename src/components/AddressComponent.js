import React from 'react'
import { Card } from 'react-bootstrap'

function AddressComponent({title,city,district,street}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>
      <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {title} {city} {district} {street}
        </Card.Text>
        <Card.Link href="#">Edit address</Card.Link>
        <Card.Link href="#">Delete address</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default AddressComponent