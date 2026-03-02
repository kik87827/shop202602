import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  let bannerTimer = 0;
  console.log(cpro, id);

  useEffect(() => {
    /* for (var i = 0; i < 10000; i++) {
      console.log(1);
    } */
    console.log("안녕");

    bannerTimer = setTimeout(() => {
      setBanner(false);
    }, 2000);

    () => {
      clearTimeout(bannerTimer);
      bannerTimer = 0;
    };
  });

  let [count, setCount] = useState(0);

  return (
    <div className="container" style={{ textAlign: "center" }}>
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
          <h4 className="pt-5">{cpro.title}</h4>
          <p>{cpro.content}</p>
          <p>{cpro.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
