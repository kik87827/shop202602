import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import bg1 from "./img/bg-1.png";
import data from "./data";
import { createContext, useState } from "react";
import CardData from "./Components/CardData";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Event from "./pages/Event";
import axios from "axios";

export let Context1 = createContext();

function App() {
  const [storage, setStorage] = useState([10, 11, 12]);
  const [productData, setProductData] = useState(data);
  const [moreClick, setMoreClick] = useState(0);
  const [loading, setLoading] = useState(false);
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
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ storage, productData }}>
            <Detail shoes={productData} />
          </Context1.Provider>
        } />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" style={{ backgroundImage: `url(${bg1})` }}></div>

              <div style={{ textAlign: "center" }}>
                <button
                  onClick={() => {
                    let copyData = [...productData];
                    let filterData = copyData.sort((a, b) => a.title.localeCompare(b.title));
                    setProductData(filterData);
                  }}
                >
                  가나다순 정렬
                </button>
              </div>

              <Container>
                <Row>
                  {productData.map((item, index) => (
                    <CardData key={item.id} item={item} />
                  ))}
                </Row>
              </Container>
              {
                loading ? <div style={{ textAlign: 'center', backgroundColor: 'red' }}>로딩중...</div> : null
              }
              {
                moreClick <= 1 ? <div style={{ textAlign: 'center' }}>

                  <button onClick={() => {
                    setLoading(true);
                    Promise.all([axios.get('https://codingapple1.github.io/shop/data2.json'), axios.get('https://codingapple1.github.io/shop/data3.json')]).then(([res1, res2]) => {
                      console.log(res1.data, res2.data);
                      let moreData = [...productData, ...res1.data];
                      let moreData2 = [...productData, ...res2.data];

                      if (moreClick === 0) {
                        setProductData(moreData);
                      } else {
                        setProductData(moreData2);
                      }

                      setMoreClick(prev => prev + 1);

                      setLoading(false);
                    }).catch(() => {
                      setLoading(false);
                      console.log('실패');
                    });

                    /* fetch('https://codingapple1.github.io/shop/data2.json') */


                    // axios.post("/asb",{name : "kim"})
                    /* axios.get("https://codingapple1.github.io/shop/data2.json").then((result) => {

                      let moreData = [...productData, ...result.data]
                      //let moreData = copyData.push(result.data);
                      // setProductData(moreData)
                      setProductData(moreData);
                      setMoreClick(prev => prev + 1);
                    }).catch(() => {
                      console.log('실패');
                    }) */
                  }}>더보기</button>
                </div> : ""
              }
            </>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
