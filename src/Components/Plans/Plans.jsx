import "./style.css";

const Plans = ({plan}) => {
    return (  
        <div className="plans bdr">
            <div className="img">
            <img src={plan.img} alt={plan.name} className="" />
            </div>
            <div className="plan-txt">
                <h4>{plan.name}</h4>
                <p>{plan.price}</p>
            </div>
        </div>
    );
}
 
export default Plans;