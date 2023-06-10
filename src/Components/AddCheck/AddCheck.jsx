import { Checkbox } from "antd";
import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromAddons, setAddons } from "../../redux/dataSlice";

const AddCheck = ({ option }) => {
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    if(e.target.checked){
      dispatch(setAddons(option));
    }else{
      dispatch(removeFromAddons(option.id));
    }
  };
  return (
    <div className="add-check">
      <div className="add-check-sub">
        <Checkbox onChange={handleSelect} defaultChecked={option.checked} />
        <div className="add-desc">
          <p className="head">{option.name}</p>
          <p className="desc">{option.detail}</p>
        </div>
      </div>
      <div className="add-price">{option.price}</div>
    </div>
  );
};

export default AddCheck;
