import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { Context1 } from "../App";

import { productAdd } from "../store/userCart";
import { useDispatch } from "react-redux";

let YellowBtn = styled.button`
  background: ${({ bg = "yellow" }) => bg};
  color: ${({ bg }) => (bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let NewYellowBtn = styled(YellowBtn)`
  border: 2px solid pink;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

/* class Detail2 extends React.Component {
  componentDidMount() {
    
  }
  componentDidUpdate() {
    
  }
  componentWillUnmount() {
    
  }
} */

export default function Detail({ shoes }) {
  const { id } = useParams();
  const cpro = shoes.find((item) => item.id === parseFloat(id));
  const [banner, setBanner] = useState(true);
  const [searchInput, setSeachInput] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const [tabActive, setActiveTab] = useState(1);
  const [pageLoad, setPageLoad] = useState("");
  let bannerTimer = 0;
  let loadTimer = 0;
  let dispatch = useDispatch();

  let navigate = useNavigate();

  //console.log(cpro, id);

  useEffect(() => {
    /* for (var i = 0; i < 10000; i++) {
      console.log(1);
    } */
    //console.log("안녕");

    bannerTimer = setTimeout(() => {
      setBanner(false);
    }, 2000);

    () => {
      clearTimeout(bannerTimer);
    };
  });

  useEffect(() => {
    //isNaN(searchInput) && searchInput.length > 0 ? "숫자만 입력하세요" : ""
    if (isNaN(searchInput) && searchInput.length > 0) {
      setSearchMessage("숫자만 입력하세요");
    } else {
      setSearchMessage("");
    }
  }, [searchInput]);

  useEffect(() => {
    /* loadTimer = setTimeout(() => {
      setPageLoad("end");
    }, 10); */
    setPageLoad("end");
    return () => {
      setPageLoad("");
    };
  }, [pageLoad]);

  let [count, setCount] = useState(0);

  const handlerSearch = (e) => {
    //
    console.log(!isNaN(searchInput));
    setSeachInput(e.target.value);
  };

  return (
    <div className={["container start", pageLoad].filter(Boolean).join(" ")} style={{ textAlign: "center" }}>
      {banner ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : ""}

      {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        버튼
      </button>
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn>버튼</YellowBtn>
        <NewYellowBtn>버튼</NewYellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${cpro.id + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <div>
            <input onChange={handlerSearch} />
            <br />
            {/* {isNaN(searchInput) && searchInput.length > 0 ? "숫자만 입력하세요" : ""} */ searchMessage}
          </div>
          <h4 className="pt-5">{cpro.title}</h4>
          <p>{cpro.content}</p>
          <p>{cpro.price}원</p>
          <button className="btn btn-danger" onClick={() => dispatch(productAdd({ id: cpro.id, count: 1, name: cpro.title }))}>
            주문하기
          </button>
          <button onClick={() => navigate("/cart")}>장바구니 바로가기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey={`link${tabActive}`}>
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => setActiveTab(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setActiveTab(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setActiveTab(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tabActive={tabActive} />
    </div>
  );
}

function TabContent({ tabActive }) {
  const [end, setEnd] = useState(false);
  let { storage, productData } = useContext(Context1);
  let timerId = 0;
  useEffect(() => {
    timerId = setTimeout(() => {
      setEnd(true);
    }, 10);
    return () => {
      setEnd(false);
      clearTimeout(timerId);
    };
  }, [tabActive]);
  return <div className={["start", end ? "end" : ""].filter(Boolean).join(" ")}>{[storage, "내용2", "내용3"][tabActive]}</div>;
}
