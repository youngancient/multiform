import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: {
    name: "",
    email: "",
    number: "",
    sectionError: {},
  },
  select: {
    selectedPlan: {
      img: "/assets/icon-arcade.svg",
      name: "Arcade",
      price: "$9/mo",
      yearlyPrice: "$90/yr",
      free: "2 months free",
      id: 1,
    },
    isYearly: false,
  },
  addOn: [{
    name: "Online service",
    detail: "Access to multiplayer games",
    price: "+$1/mo",
    yearlyPrice: "+$10/mo",
    id : 1,
    checked : false,    
  },
  {
    name: "Larger storage",
    detail: "Extra 1TB of cloud save",
    price: "+$2/mo",
    yearlyPrice: "+$20/mo",
    id : 2,
    checked : false,
  },
  {
    name: "Customizable Profile",
    detail: "Custom theme on your profile",
    price: "+$2/mo",
    yearlyPrice: "+$20/mo",
    id : 3,
    checked : false,
  },],
  summary: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.person = {
        ...state.person,
        name: payload,
      };
    },
    setEmail: (state, { payload }) => {
      state.person = {
        ...state.person,
        email: payload,
      };
    },
    setPhoneNo: (state, { payload }) => {
      state.person = {
        ...state.person,
        number: payload,
      };
    },
    setError: (state, action) => {
      state.person = {
        ...state.person,
        sectionError: action.payload,
      };
    },
    changeSelectedPlan: (state, { payload }) => {
      state.select.selectedPlan = payload;
    },
    setSelectPlanType: (state, { payload }) => {
      state.select.isYearly = !payload;
    },
    setAddons : (state, { payload }) => {
      const updatedArray = state.addOn.map((ele)=>{
        if(ele.id == payload.id){
          return {...ele, checked : true}
        }else{
          return {...ele};
        }
      });
      state.addOn = updatedArray;
    },
    removeFromAddons : (state, { payload }) => {
      const filtered = state.addOn.filter((ele)=> ele.id != payload);
      state.addOn = filtered;
    },
  },
});

export const {
  setEmail,
  setName,
  setPhoneNo,
  setError,
  changeSelectedPlan,
  setSelectPlanType,
  setAddons,
  removeFromAddons
} = dataSlice.actions;
export default dataSlice.reducer;
