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
const Summary = () => {
  return (
    <motion.div
      className="summary white-bg"
      variants={pageVariant}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <div className="head">
        <h1>Finishing up</h1>
        <p className="intro">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="content">contents here</div>
    </motion.div>
  );
};

export default Summary;
