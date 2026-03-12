import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers: {
        change(state) {
            return 'john' + state
        }
    }
})

export let { change } = user.actions;

let storage = createSlice({
    name: 'stock',
    initialState: [10, 11, 12],

});

let cartData = createSlice({
    name: 'cartData',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        countChange(state) {
            console.log(state);
            // return count + 1
        }
    }
})

export let { countChange } = cartData.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        storage: storage.reducer,
        cartData: cartData.reducer
    }
})