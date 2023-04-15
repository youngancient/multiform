import { Checkbox } from "antd";
import "./style.css";

const AddCheck = ({ option }) => {
  const handleSelect = () => {
    console.log("ee");
  };
  return (
    <div className="add-check">
      <div className="add-check-sub">
        <Checkbox onChange={handleSelect} />
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
