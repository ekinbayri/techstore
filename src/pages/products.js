
import Productview from "../components/CardView";
import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Products(props){
    const { onAdd, onRemove } = props;
    let productType = localStorage.getItem("productType");
    let img = localStorage.getItem("img");
    return (
        <Container fluid = "true">
            <Header/>
            <h3>{productType}</h3>
             <Row sm = {2} md= {3} xl = {6} lg = {4} >
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                <Col> <Productview img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
                

            </Row> 
           
            

        </Container>
    
    );

}
export default Products;