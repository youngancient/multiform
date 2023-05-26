import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    person :{
        name : "",
        email : "",
        number : "",
        sectionError : {},     
    },
    select :{
        selectedPlan : {},
        isYearly: false
    },
    addOn :{
    },
    summary :{
    },
}

export const dataSlice = createSlice({
    name : "data",
    initialState : initialState,
    reducers :{
        setName :(state, action)=>{
            state.person = {
                ...state.person,
                name: action.payload
            }
        },
        setEmail :(state, action)=>{
            state.person = {
                ...state.person,
                email: action.payload
            }
        },
        setPhoneNo :(state, action)=>{
            state.person = {
                ...state.person,
                number: action.payload
            }
        },
        setError :(state, action)=>{
            state.person = {
                ...state.person,
                sectionError: action.payload
            }
        },
        setSelectPlan :(state, action)=>{
            state.select ={
                ...state.select,
                selectedPlan : action.payload
            }
        },
        setSelectPlanType :(state, action)=>{
            state.select ={
                ...state.select,
                isYearly : action.payload
            }
        },
    }
});


export const {setEmail, setName, setPhoneNo, setError} = dataSlice.actions;
export default dataSlice.reducer;