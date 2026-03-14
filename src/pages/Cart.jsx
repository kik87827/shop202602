import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { countChange } from "./../store/userCart";
import { changeName, changeAge } from "./../store/userSlice";

export default function Cart() {
  let { user, cartData } = useSelector((state) => state);
  let dispatch = useDispatch();

  console.log(cartData);

  return (
    <div>
      {user.name} {user.age}의 장바구니
      <br />
      <button onClick={() => dispatch(changeName())}>이름변경</button>
      <button onClick={() => dispatch(changeAge(10))}>나이변경</button>
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
              <td>{id}</td>
              <td>{name}</td>
              <td>{count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(countChange(id));
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
