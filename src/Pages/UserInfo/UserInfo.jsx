import { useEffect, useState } from "react";
import "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  confirmVariant,
  exitButton,
  pageVariant,
} from "../../Animation/Variants";
import PageButton from "../../Components/PageButton/pageButton";
import isEmail from "validator/lib/isEmail";
import { setEmail, setError, setName, setPhoneNo } from "../../redux/dataSlice";

const UserInfo = () => {
  const { person } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const [defaultFormVal, setDefaultFormVal] = useState({
    name: "",
    email: "",
    number: "",
  });

  // instantiating hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: person.name,
      email: person.email,
      number: person.number,
    },
  });

  const onFormSubmit = (data) => {
    if (data) {
      dispatch(setEmail(data.email));
      dispatch(setName(data.name));
      dispatch(setPhoneNo(data.number));
    }
    // pass the data into redux
  };
  const handleNameChange = (e) => {
    setDefaultFormVal({
      ...defaultFormVal,
      name: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    console.log(defaultFormVal);
    setDefaultFormVal({
      ...defaultFormVal,
      email: e.target.value,
    });
  };
  const handleNumberChange = (e) => {
    console.log(defaultFormVal);
    setDefaultFormVal({
      ...defaultFormVal,
      number: e.target.value,
    });
  };

  // note that the setstate is working, the actual problem happens when i set the value attribute to the defaultValue in state!!!!
  const handleError = (errors) => {
    console.log(errors);
  };

  return (
    <div className="page-var user-info">
      <form onSubmit={handleSubmit(onFormSubmit, handleError)}>
        <div className="white-bg">
          <motion.div
            className="user-inner"
            variants={pageVariant}
            initial="initial"
            animate="final"
            exit="exit"
          >
            <div className="head">
              <h1>Personal info </h1>
              <p className="intro">
                {" "}
                Please provide your name, email address, and phone number.
              </p>
            </div>
            <div className="form">
              <div className="form-ele">
                <div className="label">
                  <label htmlFor="name">Name</label>
                  {errors.name && errors.name.type === "required" && (
                    <p className="error">Name can't be empty</p>
                  )}
                </div>
                <div className="input">
                  <input
                    type="text"
                    id=""
                    // value={defaultFormVal.name}
                    onClick={handleNameChange}
                    onKeyDown={handleNameChange}
                    {...register("name", { required: true })}
                  />
                </div>
              </div>
              <div className="form-ele">
                <div className="label">
                  <label htmlFor="name">Email</label>
                  {errors.email && errors.email.type === "required" && (
                    <p className="error">Email can't be empty</p>
                  )}
                </div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    onClick={handleEmailChange}
                    onKeyDown={handleEmailChange}
                    id=""
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
              <div className="form-ele">
                <div className="label">
                  <label htmlFor="number">Phone Number</label>
                  {errors.number && errors.number.type === "required" && (
                    <p className="error">field can't be empty</p>
                  )}
                </div>
                <div className="input">
                  <input
                    type="tel"
                    name="number"
                    id=""
                    onClick={handleNumberChange}
                    onKeyDown={handleNumberChange}
                    {...register("number", { required: true })}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="page-comp">
          <PageButton nextP="/select" backP="/" />
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
