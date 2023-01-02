import React from 'react'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

function AdminPanel() {
  return (
    <Container fluid = "true">
    <Card>
    <Card.Header>
    <Card.Title>{"Welcome Admin:" + localStorage.getItem("currentUsername")}</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
     
    </Card.Header>
    <Card.Body>
    <Nav fill variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
        <Button variant="outline-primary"  className = "buttontest">Manage orders</Button>
        </Nav.Item>
        <Nav.Item>
        <Button variant="outline-primary"  className = "buttontest">Manage logs</Button>
        </Nav.Item>
        <Nav.Item>
      <Button variant="outline-primary"  className = "buttontest">Manage users</Button>
        </Nav.Item>
        <Nav.Item>
        <Link to ="productmanagement"><Button variant="outline-primary"  className = "buttontest">Add product</Button></Link>
        </Nav.Item>
        <Nav.Item>
      <Button variant="outline-primary"  className = "buttontest">Manage employees</Button>
        </Nav.Item>
      </Nav>
      
    </Card.Body>
  </Card>
  <Outlet/>
  </Container>
  )
}

export default AdminPanel