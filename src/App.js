import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import bg1 from "./img/bg-1.png";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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
          <Col md={4}>
            <img src={process.env.PUBLIC_URL + "/shoes1.jpg"} alt="" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img src={process.env.PUBLIC_URL + "/shoes2.jpg"} alt="" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img src={process.env.PUBLIC_URL + "/shoes3.jpg"} alt="" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
