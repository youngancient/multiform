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

const AddOn = () => {
    return ( 
        <motion.div className="add-on"
        variants={pageVariant}
        initial ="initial"
        animate ="final"
        exit ="exit"
        >
            Add on
        </motion.div>
     );
}
 
export default AddOn;