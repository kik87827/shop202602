import React, { useDeferredValue, useState, useTransition } from "react";

export default function ElseFunc() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);
  let a = new Array(10000).fill(0);
  return (
    <div>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />
      <div>{isPending ? "로딩중" : a.map((item) => <div>{state}</div>)}</div>
    </div>
  );
}
