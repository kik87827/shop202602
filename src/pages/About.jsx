import React from "react";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h4>회사안내</h4>
      <Outlet />
    </div>
  );
}
