import React from 'react'

function ProductView() {
  return (
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={`../img/${img}.jpg`} height = {186} />
    <Card.Body>
      <Card.Title>{cardTitle}</Card.Title>
      <Card.Text>
        {cardText}
      </Card.Text>
      <Button variant="primary">{buttonText}</Button>
    </Card.Body>
  </Card>

  );
}

export default ProductView