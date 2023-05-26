import { configureStore } from "@reduxjs/toolkit";
import  dataReducer  from "./dataSlice";
import counterReducer from "./pageCounter";

export const store = configureStore({
    reducer : {
        data : dataReducer,
        counter : counterReducer,
    },
});