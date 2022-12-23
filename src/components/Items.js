import ListGroup from 'react-bootstrap/ListGroup';
import CardView from './CardView';


function Items() {
  
  return (
    <ListGroup horizontal>
       <ListGroup.Item><CardView img = "house" cardTitle = 'House Electronics' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/></ListGroup.Item>
      <ListGroup.Item><CardView img = "phone" cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/></ListGroup.Item>
      <ListGroup.Item><CardView img = "laptop" cardTitle = 'Laptops' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products' /></ListGroup.Item>
      <ListGroup.Item><CardView img = "tv" cardTitle = 'Tv' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products' /> </ListGroup.Item>
     
    </ListGroup>
  );
}

export default Items;