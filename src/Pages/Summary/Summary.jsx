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
const Summary = () => {
    return ( 
        <motion.div className="summary"
        variants={pageVariant}
        initial ="initial"
        animate ="final"
        exit ="exit"
        >
            I am summary
        </motion.div>
     );
}
 
export default Summary;