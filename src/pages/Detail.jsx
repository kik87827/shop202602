import React from "react";
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

export default function Detail({ shoes }) {
  const { id } = useParams();
  const cpro = shoes.find((item) => item.id === parseFloat(id));
  console.log(cpro, id);
  return (
    <div className="container" style={{ textAlign: "center" }}>
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
