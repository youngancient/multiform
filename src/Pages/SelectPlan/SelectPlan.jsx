import { motion } from "framer-motion";
import "./style.css";
import { useState } from "react";
import Plans from "../../Components/Plans/Plans";

const pageVariant = {
  initial: {
    x: "300px",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    x: "-300px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SelectPlan = () => {
  const [monthlyPlans, setMonthlyPlans] = useState([
    {img : "/assets/icon-arcade.svg", name : "Arcade", price : "$9/mo"},
    {img : "/assets/icon-advanced.svg", name : "Advanced", price : "$12/mo"},
    {img : "/assets/icon-pro.svg", name : "Pro", price : "$15/mo"},
  ])
  const [yearlyPlans, setYearlyPlans] = useState([
    {img : "/assets/icon-arcade.svg", name : "Arcade", price : "$90/yr", free: "2 months free"},
    {img : "/assets/icon-advanced.svg", name : "Advanced", price : "$120/yr", free: "2 months free"},
    {img : "/assets/icon-pro.svg", name : "Pro", price : "$150/yr", free: "2 months free"},
  ])
  return (
    <motion.div
      className="select-plan white-bg"
      variants={pageVariant}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <div className="head">
        <h1>Select your plan</h1>
        <p className="intro">
          {" "}
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="content">
        <div className="plans-cont">
          {monthlyPlans.map((plan)=>(
            <Plans plan={plan} key={plan.name} />
          ))}
        </div>
        <div className="switch-layer">
          switch 
        </div>
      </div>
    </motion.div>
  );
};

export default SelectPlan;
