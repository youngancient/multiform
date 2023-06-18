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
import { useDispatch, useSelector } from "react-redux";
import { setSelectPlanType } from "../../redux/dataSlice";

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
  // Tasks: 
  // the selected components are not switching in the UI. Check warriz going on bruv!
  // we need to check for errors in each page before transiting to the next
  // work on the order summary

  // const [isYearly, setisYearly] = useState(false);
  const { select } = useSelector((state) => state.data);
  const allPlans = select.selectedPlans;
  const dispatch = useDispatch();
  const isYearly = allPlans[0].isYearly;

  const onChange = () => {
    console.log(isYearly)
    dispatch(setSelectPlanType(!isYearly));
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
              {allPlans.map((plan) => (
                <Plans plan={plan} key={plan.name} isYearly={plan.isYearly} isSelected={plan.isSelected} />
              ))}
            </div>
            <div className="switch-layer">
              <div className="switch-fl">
                <div
                  className="s-letter"
                  style={
                    select.isYearly
                      ? { color: "hsl(231, 11%, 63%)" }
                      : { color: "hsl(213, 96%, 18%)" }
                  }
                >
                  Monthly
                </div>
                <Switch
                  onChange={onChange}
                  defaultChecked={isYearly}
                  style={{ backgroundColor: "hsl(213, 96%, 18%)" }}
                />
                <div
                  className="s-letter"
                  style={
                    select.isYearly
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
