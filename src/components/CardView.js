import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CardView({img,cardTitle,cardText,buttonText,buttonLink,productType}) {
  let navigate = useNavigate();
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={`../img/${img}.jpg`} height = {186} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
        <Button variant="primary" href = {buttonLink} onClick = {() => {localStorage.setItem("productType",productType); localStorage.setItem("productTitle",cardTitle); navigate(buttonLink)}}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardView;