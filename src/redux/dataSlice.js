import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    person :{
        name : "",
        email : "",
        number : "",
        sectionError : {},     
    },
    select :{
        selectedPlan : {
            img: "/assets/icon-arcade.svg",
            name: "Arcade",
            price: "$9/mo",
            yearlyPrice: "$90/yr",
            free: "2 months free",
            id : 1,
          },
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
        setName :(state, {payload})=>{
            state.person = {
                ...state.person,
                name: payload
            }
        },
        setEmail :(state, {payload})=>{
            state.person = {
                ...state.person,
                email: payload
            }
        },
        setPhoneNo :(state, {payload})=>{
            state.person = {
                ...state.person,
                number: payload
            }
        },
        setError :(state, action)=>{
            state.person = {
                ...state.person,
                sectionError: action.payload
            }
        },
        changeSelectedPlan :(state, {payload})=>{
            state.select.selectedPlan = payload;
        },
        setSelectPlanType :(state, {payload})=>{
            state.select.isYearly = payload;
        },
    }
});


export const {setEmail, setName, setPhoneNo, setError, changeSelectedPlan, setSelectPlanType} = dataSlice.actions;
export default dataSlice.reducer;