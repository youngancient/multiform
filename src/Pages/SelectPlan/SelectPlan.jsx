
import { motion } from 'framer-motion';
const pageVariant ={
    initial :{
        x : "300px",
        opacity : 0,
    },
    final :{
        x : 0,
        opacity : 1,
        transition :{
            duration : 0.75,
        }
    },
    exit :{
        x : "-300px",
        opacity : 0,
        transition :{
            duration : 0.5,
        }
    }
}

const SelectPlan = () => {
    return ( 
        <motion.div className="select-plan"
        variants={pageVariant}
        initial ="initial"
        animate ="final"
        exit ="exit"
        >
            select plan
        </motion.div>
     );
}
 
export default SelectPlan;