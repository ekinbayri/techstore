
import Productview from "../components/CardView";
import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Products({cartItems,setCartItems,countItems,setCountItems}){

    let productType = localStorage.getItem("productType");
    let title = localStorage.getItem("productTitle");
    let navigate = useNavigate();
    const [products, setProducts] = useState([])
    
    const rows = [];

    useEffect(() => {
        fetch("http://localhost:8080/products/category/" + productType,{
          method : "GET",
          headers : {
              "Authorization": localStorage.getItem("tokenKey"),
              "Content-Type":"application/json"
          },
         
      })
        .then((res) => res.json())
        .then((result) =>  setProducts(result))
        .catch((err) => console.log(err)) 
      }, [])



    function showProduct(){
        for (let i = 0; i < products.length; i++) {
            rows.push(<Col>  <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src= {products[i].photo} height = {186} />
            <Card.Body>
              <Card.Title>{products[i].name}</Card.Title>
              <Card.Text>
                {products[i].description}
              </Card.Text>
              <Button variant="primary" onClick = {() => (addItem(products[i]))}>Add to cart</Button>
            </Card.Body>
          </Card>        
          </Col>)
        }
        return <Row>{rows}</Row>;
       
    }
    
    function addItem(product){
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
      console.log(cartItems)
    }
    
    function asfp(){
        navigate('/mycart')
    }
    return (
        <Container fluid = "true">
            <Header/>
            <h3>{title}</h3>        
               {showProduct()}
                                 
        </Container>
    
    );

}
export default Products;