import React from "react";
import { Outlet } from "react-router-dom";

export default function Event() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h4>이벤트</h4>
        <Outlet />
      </div>
    </>
  );
}
