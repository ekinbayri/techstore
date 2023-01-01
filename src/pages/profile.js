import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from '../components/AlertComponent.js'
import { Button, Card } from 'react-bootstrap';
import Navcard from '../components/Navcard.js';
function Profile() {
    return (
<Container fluid = "true">
    <Header/>
    <Navcard/> 
    <Outlet/>
</Container>
     
    );
  }
  export default Profile;