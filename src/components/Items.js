import ListGroup from 'react-bootstrap/ListGroup';
import CardView from './CardView';


function Items() {
  
  return (
    <ListGroup horizontal>
       <ListGroup.Item><CardView img = "house" cardTitle = 'House Electronics' productType='houseelectronics' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/></ListGroup.Item>
      <ListGroup.Item><CardView img = "phone" cardTitle = 'SmartPhones' productType='smartphone' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/></ListGroup.Item>
      <ListGroup.Item><CardView img = "laptop" cardTitle = 'Laptops' productType='laptop' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products' /></ListGroup.Item>
      <ListGroup.Item><CardView img = "tv" cardTitle = 'Tv' productType='tv' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products' /> </ListGroup.Item>
     
    </ListGroup>
  );
}

export default Items;