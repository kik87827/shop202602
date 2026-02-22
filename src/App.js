import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import bg1 from "./img/bg-1.png";
import data from "./data";
import { useState } from "react";
import CardData from "./Components/CardData";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Event from "./pages/Event";

function App() {
  const [productData, setProductData] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate(-1)}>Back</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>상세페이지</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>어바웃페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" style={{ backgroundImage: `url(${bg1})` }}></div>
              <Container>
                <Row>
                  {productData.map((item, index) => (
                    <CardData key={item.id} item={item} />
                  ))}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
