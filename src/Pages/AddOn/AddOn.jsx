import { motion } from "framer-motion";
import "./style.css";
import { useState } from "react";
import AddCheck from "../../Components/AddCheck/AddCheck";
import PageButton from "../../Components/PageButton/pageButton";
import { useSelector } from "react-redux";

const pageVariant = {
  initial: {
    x: "-300px",
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

const AddOn = () => {
  const { addOn} = useSelector((state) => state.data);
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
                <AddCheck option={option} key={option.name} />
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
