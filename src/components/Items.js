import ListGroup from 'react-bootstrap/ListGroup';

function Items() {
  return (
    <ListGroup horizontal>
      <ListGroup.Item><a href = "#">Phones</a></ListGroup.Item>
      <ListGroup.Item><a href = "#">Laptops</a></ListGroup.Item>
      <ListGroup.Item><a href = "#">Tv</a></ListGroup.Item>
      <ListGroup.Item><a href = "#">House Electronics</a></ListGroup.Item>
    </ListGroup>
  );
}

export default Items;