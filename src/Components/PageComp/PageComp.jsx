import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import { useEffect } from "react";
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
  
const PageComp = ({ comp, pageNo, next, back }) => {
  const loc = useLocation();
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
                <button onClick={back} key="backbtn">
                  Go back
                </button>
              ) : (
                <div className="none"></div>
              )}
              <button onClick={next}>
                {pageNo == 3 ? "Confirm" : "Next Step"}
              </button>
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
