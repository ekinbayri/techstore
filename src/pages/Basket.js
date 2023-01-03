import React from 'react'
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBCardText,
  } from "mdb-react-ui-kit";
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
function Basket({cartItems, countItems}) {
  const rows = [];
  let totalCost = 0;
  let navigate = useNavigate();
  function showProduct(){
    for (let i = 0; i < cartItems.length; i++) {
        totalCost += cartItems[i].price;
        rows.push(  <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
        <MDBCol md="2" lg="2" xl="2">
          <MDBCardImage
            src = {cartItems[i].photo}
            fluid className="rounded-3" alt="Cotton T-shirt" />
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3">
          <MDBTypography tag="h6" className="text-muted">
          {cartItems[i].description}
          </MDBTypography>
          <MDBTypography tag="h6" className="text-black mb-0">
           {cartItems[i].name}
          </MDBTypography>
        </MDBCol>
        <MDBCol md="2" lg="2" xl="2" className="d-flex align-items-center">
      
        <MDBTypography tag="h6" className="mb-0">
         Quantity: {countItems[i].quantity}
          </MDBTypography>
    
        </MDBCol>
        <MDBCol md="3" lg="2" xl="2" className="text-end">
          <MDBTypography tag="h6" className="mb-0">
          {cartItems[i].price}$
          </MDBTypography>
        </MDBCol>
        <MDBCol md="1" lg="1" xl="1" className="text-end">
          <a href="#!" className="text-muted">
            <MDBIcon fas icon="times" />
          </a>
        </MDBCol>
        <hr className="my-4" />
      
      </MDBRow> 
      )
    }
    return <Row>{rows}</Row>;
   
}
  return (
    <Container fluid = "true">
      <Header/>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                           {cartItems.length} items
                          </MDBTypography>
                        </div>
      
                        <hr className="my-4" />
      
                        {showProduct()}
      
                        
                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText tag="a" href="#!" className="text-body">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" /> <Link to = "/" style={{color:'black'}}> Back to shop</Link> 
                         
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                          Summary
                        </MDBTypography>
      
                        <hr className="my-4" />
      
                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                          {cartItems.length} items 
                          </MDBTypography>
                         
                        </div>
      
                        
                        
                <MDBCol lg="12">
                <MDBCard className="bg-primary text-white rounded-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBTypography tag="h5" className="mb-0">
                        Card details
                      </MDBTypography>
                      
                    </div>

                    <p >Name on Card</p>
                    

                    <form className="mt-4">
                    <InputGroup className="mb-4" size = "lg">
                   
                    <Form.Control
                    placeholder="Cardholder's Name"
                    aria-label="cardnumber"
                        aria-describedby="basic-addon1"
                                />
                      </InputGroup>
                      <p >Card number</p>
                      <InputGroup className="mb-4" size = "lg">
                      
                   <Form.Control
                   placeholder="1234 5678 9012 3457"
                   aria-label="cardnumber"
                       aria-describedby="basic-addon1"
                               />
                     </InputGroup>
                    

              
                      <MDBRow className="mb-4">
                        <MDBCol md="6">
                        <p >Expiration</p>
                          <MDBInput className="mb-4" type="text" size="lg"
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                        </MDBCol>
                        <MDBCol md="6">
                        <p >CVV</p>
                          <MDBInput className="mb-4" type="text" size="lg" minLength="3"
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                        </MDBCol>
                      </MDBRow>
                    </form>

                    <hr />

                  
                  
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
           
                        <hr className="my-4" />
      
                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">$ {totalCost}</MDBTypography>
                        </div>
      
                        <Button variant="dark" size="lg">
                          Purchase now
                        </Button>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
    </Container>
   
  );
}

export default Basket