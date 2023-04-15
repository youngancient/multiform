import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const footerVariants = {
  exit: {
    y: "100px",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
const confirmVariant = {
  initial : {
    backgroundColor : "hsl(213, 96%, 18%)",
    transition :{
      duration: 0.5,
    },
  },
  final : {
    backgroundColor : "hsl(243, 100%, 62%)",
    transition :{
      duration: 0.5,
    }
  }
}
  
const PageComp = ({ comp, pageNo, next, back }) => {
  const loc = useLocation();
  // const ref = useRef(null);
  // useEffect(() => {
  //   console.log(ref.current.clientHeight)
  // })
  return (
    <div className="page-comp">
      <div className="comp">{comp}</div>
      <AnimatePresence>
        {pageNo !== 4 ? (
          <motion.div
            className="desktop"
            key="desktop-buttons"
            variants={footerVariants}
            exit="exit"
          >
            <div className="btn">
              {pageNo !== 0 ? (
                <button onClick={back} key="backbtn" className="back">
                  Go back
                </button>
              ) : (
                <div className="none"></div>
              )}
              <motion.button onClick={next} className={`next`}
              variants={confirmVariant}
              initial = "initial"
              animate = {pageNo == 3 ? "final" : "initial"}
              >
                {pageNo == 3 ? "Confirm" : "Next Step"}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageComp;
