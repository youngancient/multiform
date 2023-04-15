import { motion } from "framer-motion";
import "./style.css";
import { useState } from "react";
import Plans from "../../Components/Plans/Plans";
import { Switch } from "antd";

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
    { img: "/assets/icon-arcade.svg", name: "Arcade", price: "$9/mo", yearlyPrice : "$90/yr",free: "2 months free" },
    { img: "/assets/icon-advanced.svg", name: "Advanced", price: "$12/mo", yearlyPrice:  "$120/yr",free: "2 months free" },
    { img: "/assets/icon-pro.svg", name: "Pro", price: "$15/mo", yearlyPrice :"$150/yr", free: "2 months free" },
  ]);
  const [yearlyOn, setYearlyOn] = useState(false);

  const onChange = () => {
    setYearlyOn(!yearlyOn);
  };
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
          {monthlyPlans.map((plan) => (
            <Plans plan={plan} key={plan.name} yearlyOn={yearlyOn} />
          ))}
        </div>
        <div className="switch-layer">
          <div className="switch-fl">
            <div className="s-letter" style={yearlyOn ? {color : "hsl(231, 11%, 63%)"} : {color : "hsl(213, 96%, 18%)"}}>Monthly</div>
            <Switch
              onChange={onChange}
              style={{ backgroundColor: "hsl(213, 96%, 18%)" }}
            />
            <div className="s-letter" style={yearlyOn ? {color : "hsl(213, 96%, 18%)"} : {color : "hsl(231, 11%, 63%)"}}>Yearly</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectPlan;
