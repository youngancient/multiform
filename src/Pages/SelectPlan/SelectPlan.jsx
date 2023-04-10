import { motion } from "framer-motion";
import "./style.css";

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
        contents here
      </div>
    </motion.div>
  );
};

export default SelectPlan;
