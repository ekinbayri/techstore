
import Productview from "../components/CardView";
import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";

function Products(props){
    const { onAdd, onRemove } = props;
    let productType = localStorage.getItem("productType");
    let img = localStorage.getItem("img");
    const [products, setProducts] = useState([])
    const rows = [];
    useEffect(() => {
        fetch("http://localhost:8080/products/category/tv",{
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
            return <Col> <Productview img = 'tv' cardTitle = {products[i].name} cardText = {products[i].description} buttonText = 'Add to cart' onAdd= {onAdd} onRemove= {onRemove}/> </Col>
        }
       
    }
    return (
        <Container fluid = "true">
            <Header/>
            <h3>{productType}</h3>
             <Row sm = {2} md= {3} xl = {6} lg = {4} >
               {showProduct()}
          
                

            </Row> 
           
            

        </Container>
    
    );

}
export default Products;