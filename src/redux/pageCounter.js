import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : null,
}

export const counterSlice = createSlice({
    name : "counter",
    initialState : initialState,
    reducers : {
        // handles setting the count from null to  the value as per the page
        setCount :(state, {payload}) =>{
            if(state.count === null){
                if(payload.loc.pathname === "/"){
                    state.count = 1;
                }else if(payload.loc.pathname === "/select"){
                    state.count = 2;
                }
                else if(payload.loc.pathname === "/addon"){
                    state.count = 3;
                }
                else if(payload.loc.pathname === "/summary"){
                    state.count = 4;
                }
            }
        },
        increment :(state,{payload})=>{
            if(payload.loc.pathname === "/"){
                state.count = 2;
            }else if(payload.loc.pathname === "/select"){
                state.count = 3;
            }
            else if(payload.loc.pathname === "/addon"){
                state.count = 4;
            }
            else if(payload.loc.pathname === "/summary"){
                state.count = 4;
            }
        },
        decrement :(state)=>{
            if(state.count <= 4 && state.count >=0 ){
                state.count -= 1;
            }
        },
        goToSelectPage : (state)=>{
            state.count = 2;
        },
    }
});

export const {increment, decrement, setCount, goToSelectPage} = counterSlice.actions;

export default counterSlice.reducer;