import { useLocation, useNavigate } from "react-router-dom";
import { confirmVariant, exitButton } from "../../Animation/Variants";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/pageCounter";

const PageButton = ({nextP, backP}) => {
  // get location
  const loc = useLocation();
  const navigate = useNavigate();

  // get the dispatch for the counter reducer
  const dispatch = useDispatch()

  const nextPage = () => {
    dispatch(increment());
    navigate(nextP);
  };
  const backPage = () => {
    dispatch(decrement());
    navigate(backP);
  };
  return (
    <div className="btn">
      <AnimatePresence>
        {loc.pathname !== "/" ? (
          <motion.button
            onClick={backPage}
            key="backbtn"
            className="back"
            variants={exitButton}
            initial="initial"
            exit="exit"
          >
            Go back
          </motion.button>
        ) : (
          <div className="none"></div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={nextPage}
        className={`next`}
        variants={confirmVariant}
        initial="initial"
        animate={loc.pathname !== "/summary" ? "initial" : "final"}
      >
        {loc.pathname !== "/summary" ? "Next Step" : "Confirm"}
      </motion.button>
    </div>
  );
};

export default PageButton;
