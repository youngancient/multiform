import { motion } from "framer-motion";
import "./style.css";
import { useState } from "react";
import AddCheck from "../../Components/AddCheck/AddCheck";
import PageButton from "../../Components/PageButton/pageButton";

const pageVariant = {
  initial: {
    x: "-300px",
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

const AddOn = () => {
  const [addons, setAddons] = useState([
    {
      name: "Online service",
      detail: "Access to multiplayer games",
      price: "+$1/mo",
      yearlyPrice: "+$10/mo",
    },
    {
      name: "Larger storage",
      detail: "Extra 1TB of cloud save",
      price: "+$2/mo",
      yearlyPrice: "+$20/mo",
    },
    {
      name: "Customizable Profile",
      detail: "Custom theme on your profile",
      price: "+$2/mo",
      yearlyPrice: "+$20/mo",
    },
  ]);
  return (
    <div className="page-var">
      <div className="white-bg">
        <motion.div
          className="add-on"
          variants={pageVariant}
          initial="initial"
          animate="final"
          exit="exit"
        >
          <div className="head">
            <h1>Pick add-ons</h1>
            <p className="intro">
              {" "}
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          <div className="content">
            <div className="addons">
              {addons.map((option) => (
                <AddCheck option={option} key={option.name} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="page-comp">
        <PageButton nextP="/summary" backP="/select" />
      </div>
    </div>
  );
};

export default AddOn;
