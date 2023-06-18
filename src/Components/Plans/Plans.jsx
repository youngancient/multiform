import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedPlan } from "../../redux/dataSlice";
import { priceVariants } from "../../Animation/Variants";


const PlansDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  gap: 1.2rem;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  min-height: 100px;
  border: 1px solid hsl(231, 11%, 63%);
  background-color: ${(props) => (props.isSelected ? `hsl(217, 100%, 97%)` : ``) };
  border:  ${(props) => (props.isSelected ? `1px solid hsl(243, 100%, 62%)` : ``)};

  :hover {
    border: 1px solid hsl(243, 100%, 62%);
  }

  .tg {
    overflow: hidden;
  }
  .plan-txt {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    overflow-x: hidden;
  }
  .price {
    color: hsl(231, 11%, 63%);
  }
  .plan-txt h4 {
    color: hsl(213, 96%, 18%);
    font-size: 1.1rem;
  }
  .plan-txt .free {
    font-size: 0.9rem;
    color: hsl(213, 96%, 18%);
  }
  @media screen and (min-width: 728px) {
    display: flex;
    flex-direction: column;
    width: 33%;
    padding: 1rem;
    justify-content: unset;
    align-items: unset;
    gap: 2rem;
    min-height: 200px;

    .plan-txt {
      gap: 0.5rem;
    }
    .plan-txt h4{
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 998px) {
    padding: 1.8rem;
    gap: 3rem;
    min-height: 230px;

    .plan-txt {
      gap: 0.5rem;
    }
    .plan-txt h4{
      font-size: 1.2rem;
    }
  }
`;
const Plans = ({ plan, isYearly, isSelected }) => {
  const dispatch = useDispatch();
  const handleClick =()=>{
    dispatch(changeSelectedPlan(plan));
  }
  return (
    <PlansDiv isSelected={isSelected} onClick={handleClick}>
      <div className="img">
        <img src={plan.img} alt={plan.name} className="" />
      </div>
      <div className="plan-txt">
        <h4>{plan.name}</h4>
        <div className="tg">
          <AnimatePresence mode="wait">
            {!isYearly && (
              <motion.p
                className="price"
                key="price-m"
                variants={priceVariants}
                initial="initial"
                animate="final"
                exit="exit"
              >
                {plan.price}
              </motion.p>
            )}
            {isYearly && (
              <motion.p
                className="price"
                key="price-y"
              >
                {plan.yearlyPrice}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isYearly && (
            <motion.div
              className="free"
              key="free"
            >
              {plan.free}
            </motion.div>
          )}
          {!isYearly && <div className="div"></div>}
        </AnimatePresence>
      </div>
    </PlansDiv>
  );
};

export default Plans;
