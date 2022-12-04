import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardView({img,cardTitle,cardText,buttonLink}) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img} height = {186} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
        <Button variant="primary">{buttonLink}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardView;