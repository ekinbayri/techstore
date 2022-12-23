import { ListGroup } from "react-bootstrap";
import CardView from "../components/CardView";
import Phone from '../img/phone.jpg'
import Tv from '../img/tv.jpg';
import Laptop from '../img/laptop.jpg';
import House from '../img/house.jpg';
import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from "react-router-dom";
function Products(){
    let productType = localStorage.getItem("productType");
    let img = localStorage.getItem("img");
    console.log(img)
    return (
        <Container fluid = "true">
            <Header/>
            <h3>{productType}</h3>
             <Row sm = {2} md= {3} xl = {6} lg = {4} >
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                <Col> <CardView img = {img} cardTitle = 'SmartPhones' cardText = 'Default text' buttonText = 'Check products' buttonLink= '/products'/> </Col>
                

            </Row> 
           
            

        </Container>
    
    );

}
export default Products;