import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const priceVariants = {
  initial: {
    x: "-20px",
    opacity: 0,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    x: "-20px",
    transition: {
      duration: 0.5,
    },
  },
};
const PlansDiv = styled.div`
  .plans {
    display: flex;
    width: 100%;
    padding: 1rem;
    gap: 1.2rem;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid hsl(231, 11%, 63%);
    min-height: 100px;
  }
  .plans .tg {
    overflow: hidden;
  }
  .plans:hover {
    border: 1px solid hsl(243, 100%, 62%);
  }
  .plans .plan-txt {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    overflow-x: hidden;
  }
  .plans .price {
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
    .plans {
      display: flex;
      flex-direction: column;
      width: 33%;
      padding: 1rem;
      justify-content: unset;
      align-items: unset;
      gap: 2rem;
      min-height: 200px;
    }
    .plans .plan-txt {
      gap: 0.5rem;
    }
  }
  @media screen and (min-width: 998px) {
    .plans {
      padding: 1.8rem;
      gap: 3rem;
      min-height: 230px;
    }
    .plans .plan-txt {
      gap: 0.5rem;
    }
  }
`;
const Plans = ({ plan, yearlyOn }) => {

  return (
    <PlansDiv>
    <div className="plans">
      <div className="img">
        <img src={plan.img} alt={plan.name} className="" />
      </div>
      <div className="plan-txt">
        <h4>{plan.name}</h4>
        <div className="tg">
          <AnimatePresence mode="wait">
            {!yearlyOn && (
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
            {yearlyOn && (
              <motion.p
                className="price"
                key="price-y"
                initial="initial"
                variants={priceVariants}
                exit="exit"
              >
                {plan.yearlyPrice}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {yearlyOn && (
            <motion.div
              className="free"
              key="free"
              initial="initial"
              variants={priceVariants}
              exit="exit"
            >
              {plan.free}
            </motion.div>
          )}
          {!yearlyOn && <div className="div"></div>}
        </AnimatePresence>
      </div>
    </div>
    </PlansDiv>
  );
};

export default Plans;
