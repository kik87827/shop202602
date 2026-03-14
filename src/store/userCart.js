import { createSlice, current } from "@reduxjs/toolkit";

let cartData = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    countChange(state, { payload }) {
      let findIndex = state.findIndex((item) => item.id === payload);
      if (findIndex >= 0) {
        state[payload].count++;
      }
    },
    productAdd(state, { payload }) {
      const overProduct = state.find((item) => payload.id === item.id);
      /* if (payload.id === state.id) {
        alert("같은상품이 있어요");
        return;
      } */
      console.log(overProduct);
      if (overProduct) {
        alert("같은상품이 있어요");
        return;
      }
      state.push(payload);
    },
    productDelete(state, { payload }) {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export let { countChange, productAdd, productDelete } = cartData.actions;
export default cartData;
