import ListGroup from 'react-bootstrap/ListGroup';
import CardView from './CardView';
import Phone from '../img/phone.jpg'
import Tv from '../img/tv.jpg';
import Laptop from '../img/laptop.jpg';
import House from '../img/house.jpg';
function Items() {
  return (
    <ListGroup horizontal>
      <ListGroup.Item><CardView img = {Phone} cardTitle = 'SmartPhones' cardText = 'Default text' buttonLink = 'test'/></ListGroup.Item>
      <ListGroup.Item><CardView img = {Laptop} cardTitle = 'Laptops' cardText = 'Default text' buttonLink = 'test'/></ListGroup.Item>
      <ListGroup.Item><CardView img = {Tv} cardTitle = 'Tv' cardText = 'Default text' buttonLink = 'test'/></ListGroup.Item>
      <ListGroup.Item><CardView img = {House} cardTitle = 'House Electronics' cardText = 'Default text' buttonLink = 'test'/></ListGroup.Item>
    </ListGroup>
  );
}

export default Items;