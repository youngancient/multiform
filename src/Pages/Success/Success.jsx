import { motion } from "framer-motion";
import "./style.css";

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
    x: "300px",
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

const Success = () => {
  return (
    <motion.div
      className="success"
      variants={pageVariant}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <div className="success white-bg">success here</div>
    </motion.div>
  );
};

export default Success;
