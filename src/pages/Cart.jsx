import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { change, countChange } from "../store";

export default function Cart() {
  let { user, storage, cartData } = useSelector((state) => state);
  let dispatch = useDispatch();

  console.log(cartData);

  return (
    <div>
      {user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {/*  <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr> */}
          {cartData.map(({ id, name, count }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{count}</td>
              <td>
                <button
                  onClick={() => {
                    console.log(count);
                    // dispatch(countChange());
                    // dispatch(countChange(cartData[index].count));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
