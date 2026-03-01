import React from "react";
import { useParams } from "react-router-dom";

export default function Detail({ shoes }) {
  const { id } = useParams();
  const cpro = shoes.find((item) => item.id === parseFloat(id));
  console.log(cpro, id);
  return (
    <div className="container" style={{ textAlign: "center" }}>
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
