
import { useRef,useEffect } from 'react';
import './style.css';
import { motion } from 'framer-motion';


// trying to build my stitch comp
const switchVariants ={
    initial :{
        flexDirection: "row",
    },
    final :{
        flexDirection: "row-reverse",
        transition : {
            ease: "linear",
            duration: 2,
        }
    }
}

const Switch = ({setSwitchOn, switchOn}) => {
    let switchRef = useRef();
    useEffect(()=>{
        let handler =(e)=>{
          if(switchRef.current != undefined){
            if(!switchRef.current.contains(e.target)){
              setSwitchOn(!switchOn);
            }
          }
        };
        document.addEventListener("mousedown", handler);
      })
    return ( 
        <motion.div className="switch"
        variants={switchVariants}
        initial = "initial"
        animate= {switchOn ? "final" : "initial"}
        layout
        >
            <div className="inner-switch half" ref={switchRef}></div>
            <div className="space half" >
            </div>
        </motion.div>
     );
}
 
export default Switch;