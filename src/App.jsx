import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import FixedNav from "./Components/FixedNav/FixedNav";
import AddOn from "./Pages/AddOn/AddOn";
import Error from "./Pages/Error/Error";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import Summary from "./Pages/Summary/Summary";
import UserInfo from "./Pages/UserInfo/UserInfo";
import Success from "./Pages/Success/Success";
import PageComp from "./Components/PageComp/PageComp";
import { AnimatePresence, motion } from "framer-motion";

const fixedNav = [
  { num: 1, step: "YOUR INFO" },
  { num: 2, step: "SELECT PLAN" },
  { num: 3, step: "ADD-ONS" },
  { num: 4, step: "SUMMARY" },
];

const pageDict = {
  0: "",
  1: "select",
  2: "addon",
  3: "summary",
  4: "success",
};

const footerVariants = {
  exit: {
    y: "100px",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
const btnVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  final: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};
const confirmVariant = {
  initial : {
    backgroundColor : "hsl(213, 96%, 18%)",
    transition :{
      duration: 0.5,
    }
  },
  final : {
    backgroundColor : "hsl(243, 100%, 62%)",
    transition :{
      duration: 0.5,
    }
  }
}

function App() {
  const loc = useLocation();
  const [pageNo, setPageNo] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let url = pageDict[pageNo];
    navigate(`/${url}`);
  }, [pageNo]);

  const next = () => {
    if (pageNo < 4 && pageNo >= 0) {
      setPageNo(pageNo + 1);
    }
  };
  const back = () => {
    if (pageNo <= 4 && pageNo >= 0) {
      setPageNo(pageNo - 1);
    }
  };
  return (
    <div className="app">
      <div className="in-app">
        <div className="fixed-nav">
          <div className="in-nav">
            {fixedNav.map((fxed, id) => (
              <FixedNav
                step={fxed.step}
                num={fxed.num}
                key={fxed.num}
                pageNo={pageNo}
                id={id}
              />
            ))}
          </div>
        </div>

        {/* continue here later */}
        <div className="pages">
          <AnimatePresence mode="wait">
            <Routes key={loc.pathname} location={loc}>
              <Route
                index
                element={
                  <PageComp
                    pageNo={pageNo}
                    next={next}
                    back={back}
                    comp={<UserInfo />}
                  ></PageComp>
                }
              />
              <Route
                path="/select"
                element={
                  <PageComp
                    pageNo={pageNo}
                    next={next}
                    back={back}
                    comp={<SelectPlan />}
                  ></PageComp>
                }
              />
              <Route
                path="/addon"
                element={
                  <PageComp
                    pageNo={pageNo}
                    next={next}
                    back={back}
                    comp={<AddOn />}
                  ></PageComp>
                }
              />
              <Route
                path="/summary"
                element={
                  <PageComp
                    pageNo={pageNo}
                    next={next}
                    back={back}
                    comp={<Summary />}
                  ></PageComp>
                }
              />
              <Route
                path="/success"
                element={
                  <PageComp
                    pageNo={pageNo}
                    next={next}
                    back={back}
                    comp={<Success />}
                  ></PageComp>
                }
              />
              <Route
                path="/*"
                element={
                  <Error />
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
      {pageNo !== 4 ? (
        <motion.div
          className="mobile-foot mobile"
          variants={footerVariants}
          exit="exit"
        >
          <div
            className="btn"
            
          >
            <AnimatePresence>
              {pageNo !== 0 ? (
                <motion.button
                  onClick={back}
                  variants={btnVariants}
                  key="back-btn"
                  className="back"
                  initial="initial"
                  animate="final"
                  exit="exit"
                >
                  Go back
                </motion.button>
              ) : (
                <div className="none"></div>
              )}
            </AnimatePresence>
            <motion.button onClick={next}
            variants={confirmVariant}
            initial = "initial"
            className="next"
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
}

export default App;
