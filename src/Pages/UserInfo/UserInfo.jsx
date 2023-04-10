import "./style.css";
import { motion } from "framer-motion";

const pageVariant = {
  initial: {
    x: "300px",
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
const UserInfo = () => {
  return (
    <motion.div
      className="user-info white-bg"
      variants={pageVariant}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <div className="head">
        <h1>Personal info</h1>
        <p className="intro">
          {" "}
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form>
        <div className="form-ele">
          <div className="label">
            <label htmlFor="name">Name</label>
            <p className="error">Name can't be empty</p>
          </div>
          <div className="input">
            <input type="text" name="name" id="" />
          </div>
        </div>
        <div className="form-ele">
          <div className="label">
            <label htmlFor="name">Email</label>
            <p className="error">Email can't be empty</p>
          </div>
          <div className="input">
            <input type="email" name="email" id="" />
          </div>
        </div>
        <div className="form-ele">
          <div className="label">
            <label htmlFor="number">Phone Number</label>
            <p className="error">field can't be empty</p>
          </div>
          <div className="input">
            <input type="tel" name="number" id="" />
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default UserInfo;
