import { configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import cartData from "./store/userCart";

export default configureStore({
  reducer: {
    user: user.reducer,
    cartData: cartData.reducer,
  },
});
