import { motion } from "framer-motion";
import "./style.css";
import PageButton from "../../Components/PageButton/pageButton";
import { footerVariants, pageVariant } from "../../Animation/Variants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { goToSelectPage } from "../../redux/pageCounter";
import { useEffect, useState } from "react";

const Summary = () => {
  // get location
  const loc = useLocation();
  const navigate = useNavigate();

  // get the dispatch for the counter reducer
  const dispatch = useDispatch();
  const { select, addOn } = useSelector((state) => state.data);
  const selectedPlan = select.selectedPlans.find(
    (ele) => ele.isSelected == true
  );
  // State controlling total
  const [total, setTotal] = useState(0);
  // total price initialized to the selected plan price, then we add it to the others
  let totalPrice = 0;
  const isYearly = selectedPlan.isYearly;
  isYearly
    ? (totalPrice = parseInt(selectedPlan.yearlyPrice.replace(/[^0-9]/g, "")))
    : (totalPrice = parseInt(selectedPlan.price.replace(/[^0-9]/g, "")));
  const addOns = addOn.filter((ele) => ele.checked == true);
  addOns.forEach((ele) => {
    let price = 0;
    isYearly
      ? (price = parseInt(ele.yearlyPrice.replace(/[^0-9]/g, "")))
      : (price = parseInt(ele.price.replace(/[^0-9]/g, "")));
      totalPrice += price;
    });
  
  useEffect(()=>{
    setTotal(totalPrice);
  },[totalPrice])
  
  const goToSelect = () => {
    dispatch(goToSelectPage());
  };
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
                <h4>{selectedPlan.name} ({isYearly ? "Yearly" : "Monthly"})</h4>
                <Link to="/select" onClick={goToSelect} className="change">
                  Change
                </Link>
              </div>
              <p className="price">{isYearly ? selectedPlan.yearlyPrice : selectedPlan.price}</p>
            </div>
            <hr />
            {addOns.map((ele) => (
              <div className="stored" key={ele.id}>
                <p className="desc">{ele.name}</p>
                <p className="price">
                  {isYearly ? ele.yearlyPrice : ele.price}
                </p>
              </div>
            ))}
          </div>
          <div className="total-div">
            <div className="total">
              <p className="desc">Total (per month)</p>
              <p className="price">+${total}{isYearly ? "/yr": "/mo"}</p>
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
