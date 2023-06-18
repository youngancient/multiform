import { motion } from "framer-motion";
import "./style.css";
import { useState } from "react";
import AddCheck from "../../Components/AddCheck/AddCheck";
import PageButton from "../../Components/PageButton/pageButton";
import { useSelector } from "react-redux";
import { pageVariant } from "../../Animation/Variants";


const AddOn = () => {
  const { addOn } = useSelector((state) => state.data);
  const { select } = useSelector((state) => state.data);
  const allPlans = select.selectedPlans;
  const isYearly = allPlans[0].isYearly;
  return (
    <div className="page-var">
      <div className="white-bg">
        <motion.div
          className="add-on"
          variants={pageVariant}
          initial="initial"
          animate="final"
          exit="exit"
        >
          <div className="head">
            <h1>Pick add-ons</h1>
            <p className="intro">
              {" "}
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          <div className="content">
            <div className="addons">
              {addOn.map((option) => (
                <AddCheck option={option} key={option.name} isYearly={isYearly} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="page-comp">
        <PageButton nextP="/summary" backP="/select" />
      </div>
    </div>
  );
};

export default AddOn;
