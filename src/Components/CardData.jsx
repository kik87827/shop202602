import React from "react";
import { Col } from "react-bootstrap";

export default function CardData({ item }) {
  return (
    <Col md={4} style={{ textAlign: "center" }} key={item.id}>
      <img
        src={`${process.env.PUBLIC_URL}/shoes${item.id + 1}.jpg`}
        style={{ width: "100%" }}
        alt=""
      />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </Col>
  );
}
