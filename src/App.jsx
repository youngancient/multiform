import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import FixedNav from "./Components/FixedNav/FixedNav";
import AddOn from "./Pages/AddOn/AddOn";
import Error from "./Pages/Error/Error";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import Summary from "./Pages/Summary/Summary";
import {UserInfo} from "./Pages/UserInfo/UserInfo";
import Success from "./Pages/Success/Success";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector} from "react-redux";
import { setCount } from "./redux/pageCounter";

const fixedNav = [
  { num: 1, step: "YOUR INFO" },
  { num: 2, step: "SELECT PLAN" },
  { num: 3, step: "ADD-ONS" },
  { num: 4, step: "SUMMARY" },
];


function App() {
  const loc = useLocation();
  // initialize page counter
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setCount({loc}));
  },[])
  return (
    <div className="app">
      <div className="in-app">
        <div className="fixed-nav">
          <div className="in-nav">
            {fixedNav.map((fxed, id) => (
              <FixedNav
                step={fxed.step}
                num={fxed.num}
                key={fxed.num}
                pageNo={count}
                id={id+1}
              />
            ))}
          </div>
        </div>

        {/* continue here later */}
        <div className="pages"> 
          <AnimatePresence mode="wait">
            <Routes key={loc.pathname} location={loc}>
              <Route index element={<UserInfo />} />
              <Route path="/select" element={<SelectPlan />} />
              <Route path="/addon" element={<AddOn />} />
              <Route path="/summary" element={<Summary/>} />
              <Route path="/success" element={<Success />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
