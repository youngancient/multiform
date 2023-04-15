import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import { useEffect, useRef } from "react";

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

const Plans = ({ plan, yearlyOn }) => {
  const ref = useRef(null);
  // useEffect(() => {
  //   console.log(ref.current.clientHeight)
  // })
  return (
    <div className="plans" ref={ref}>
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
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Plans;
