import { useEffect } from "react";
import "./style.css";
import { motion } from "framer-motion";

const numVariants = {
  initial: {
    background: "rgba(0,0,0,0.1)",
    color: "#fafbff",
    border: "2px solid #fafbff",
    transition: {
      duration: 0.5,
    },
  },
  final: {
    background: "#bfe2fd",
    color: "#02295a",
    border: "0px",
    scale : 1.2,
    transition: {
      duration: 1,
    },
  },
};
const FixedNav = ({ num, step, pageNo, id }) => {
  return (
    <div className="fixed-div">
      <motion.div
        className="num"
        variants={numVariants}
        // initial = "initial"
        animate={pageNo === id ? "final" : "initial"}
      >
        <p>{num}</p>
      </motion.div>
      <div className="step desktop">
        <div className="step-num">STEP {num}</div>
        <h4>{step}</h4>
      </div>
    </div>
  );
};

export default FixedNav;
