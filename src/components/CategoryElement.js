import Nav from 'react-bootstrap/Nav';

function Categories() {
  function MouseOver(event) {
    event.target.style.background = 'silver';
  }
  function MouseOut(event){
    event.target.style.background="";
  }
  return (
    <Nav className="justify-content-center" fill variant="tabs"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <Nav.Link eventKey = "link-1" style = {{color : "black"}}>SmartPhones</Nav.Link>
      </Nav.Item>
      <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <Nav.Link eventKey="link-2" style = {{color : "black"}}>Laptops</Nav.Link>
      </Nav.Item>
      <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <Nav.Link eventKey="link-3" style = {{color : "black"}}>Tv</Nav.Link>
      </Nav.Item>
      <Nav.Item onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <Nav.Link eventKey="link-4" style = {{color : "black"}}>House Electronics</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Categories;