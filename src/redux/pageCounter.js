import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 1,
}

export const counterSlice = createSlice({
    name : "counter",
    initialState : initialState,
    reducers : {
        increment :(state)=>{
            if(state.count <= 4 && state.count >=0 ){
                state.count += 1;
            }
        },
        decrement :(state)=>{
            if(state.count <= 4 && state.count >=0 ){
                state.count -= 1;
            }
        },
    }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;