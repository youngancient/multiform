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
      <div className="content">
        <div className="summary-div">
          <div className="sm-div-inner">
            <h4>Arcade (Monthly)</h4>
            <a href="#">Change</a>
          </div>
          <p className="price">$9/mo</p>
        </div>
        <hr />
        <div className="stored">
          <p className="desc">Online Service</p>
          <p className="price">+$1/mo</p>
        </div>
        <div className="stored">
          <p className="desc">Larger Storage</p>
          <p className="price">+$2/mo</p>
        </div>
      </div>
      <div className="total-div">
        <div className="total">
          <p className="desc">Total (per month)</p>
          <p className="price">+$12/mo</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
