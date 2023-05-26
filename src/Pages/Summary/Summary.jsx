import { motion } from "framer-motion";
import "./style.css";
import PageButton from "../../Components/PageButton/pageButton";
import { footerVariants, pageVariant } from "../../Animation/Variants";

const Summary = () => {
  return (
    <div className="page-var">
      <div className="white-bg">
        <motion.div
          className="summary"
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
      </div>
      <div className="page-comp">
        <PageButton nextP="/success" backP="/addon" />
      </div>
    </div>
  );
};

export default Summary;
