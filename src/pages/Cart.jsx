import React, { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { countChange, productDelete } from "./../store/userCart";
import { changeName, changeAge } from "./../store/userSlice";

let Child = memo(() => {
  console.log("재렌더링됨");
  return <div>Child</div>;
});

function FuncAction() {
  return "반복문 10억번";
}

export default function Cart() {
  let { user, cartData } = useSelector((state) => state);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);
  let result = useMemo(() => {
    return FuncAction();
  }, [count]);

  return (
    <div>
      <Child count={count} />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
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
                <button
                  onClick={() => {
                    dispatch(productDelete(id));
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
