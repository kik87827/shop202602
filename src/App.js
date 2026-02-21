import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import bg1 from "./img/bg-1.png";
import data from "./data";
import { useState } from "react";
import CardData from "./Components/CardData";

function App() {
  const [productData, setProductData] = useState(data);
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{ backgroundImage: `url(${bg1})` }}></div>
      <Container>
        <Row>
          {productData.map((item, index) => (
            <CardData key={item.id} item={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
