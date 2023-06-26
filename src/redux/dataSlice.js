import { createSlice } from "@reduxjs/toolkit";
import { AddOn, listPlans } from "./data";

const initialState = {
  person: {
    name: "",
    email: "",
    number: "",
  },
  pageErrorExist: true,
  select: {
    selectedPlans: listPlans,
  },
  addOn: AddOn,
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
      const updatedArray = state.select.selectedPlans.map((ele) =>{
        if(ele.id == payload.id){
          return {...ele, isSelected : true}
        }else{
          return {...ele, isSelected : false} 
        }
      });
      state.select.selectedPlans = updatedArray;
    },
    setSelectPlanType: (state, { payload }) => {
      const updatedArray = state.select.selectedPlans.map((ele)=>{
        return { ...ele, isYearly: payload}
      });
      state.select.selectedPlans = updatedArray;
    },
    setAddons: (state, { payload }) => {
      const updatedArray = state.addOn.map((ele) => {
        if (ele.id == payload.id) {
          return { ...ele, checked: true };
        } else {
          return { ...ele };
        }
      });
      state.addOn = updatedArray;
    },
    removeFromAddons: (state, { payload }) => {
      const filtered = state.addOn.map((ele) => {
        if (ele.id == payload) {
          return { ...ele, checked: false };
        } else {
          return { ...ele };
        }
      });
      state.addOn = filtered;
    },
    setPageError : (state, {payload}) => {
      state.pageErrorExist = payload;
      console.log(payload);
    }
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
  setPageError,
  removeFromAddons,
} = dataSlice.actions;
export default dataSlice.reducer;
