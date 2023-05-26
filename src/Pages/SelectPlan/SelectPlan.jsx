import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import { useState } from "react";
import Plans from "../../Components/Plans/Plans";
import { Switch } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  confirmVariant,
  exitButton,
  pageVariant,
} from "../../Animation/Variants";
import PageButton from "../../Components/PageButton/pageButton";
import { useSelector } from "react-redux";

const footerVariants = {
  exit: {
    y: "100px",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const SelectPlan = () => {
  const [monthlyPlans, setMonthlyPlans] = useState([
    {
      img: "/assets/icon-arcade.svg",
      name: "Arcade",
      price: "$9/mo",
      yearlyPrice: "$90/yr",
      free: "2 months free",
    },
    {
      img: "/assets/icon-advanced.svg",
      name: "Advanced",
      price: "$12/mo",
      yearlyPrice: "$120/yr",
      free: "2 months free",
    },
    {
      img: "/assets/icon-pro.svg",
      name: "Pro",
      price: "$15/mo",
      yearlyPrice: "$150/yr",
      free: "2 months free",
    },
  ]);
  const [yearlyOn, setYearlyOn] = useState(false);
  const { select } = useSelector((state) => state.data);

  const onChange = () => {
    setYearlyOn(!yearlyOn);
  };
  return (
    <div className="page-var">
      <div className="white-bg">
        <motion.div
          className="select-plan"
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
                <div
                  className="s-letter"
                  style={
                    yearlyOn
                      ? { color: "hsl(231, 11%, 63%)" }
                      : { color: "hsl(213, 96%, 18%)" }
                  }
                >
                  Monthly
                </div>
                <Switch
                  onChange={onChange}
                  style={{ backgroundColor: "hsl(213, 96%, 18%)" }}
                />
                <div
                  className="s-letter"
                  style={
                    yearlyOn
                      ? { color: "hsl(213, 96%, 18%)" }
                      : { color: "hsl(231, 11%, 63%)" }
                  }
                >
                  Yearly
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="page-comp">
          <PageButton nextP="/addon" backP="/" />
      </div>
    </div>
  );
};

export default SelectPlan;
