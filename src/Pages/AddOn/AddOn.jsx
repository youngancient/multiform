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

const AddOn = () => {
  return (
    <motion.div
      className="add-on"
      variants={pageVariant}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <div className="head">
        <h1>Pick add-ons</h1>
        <p className="intro"> Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="content">contents here</div>
    </motion.div>
  );
};

export default AddOn;
