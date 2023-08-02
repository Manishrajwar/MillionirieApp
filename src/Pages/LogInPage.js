import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const containerVariants={
    hidden:{
        opacity:0,
        x:'--60vw'
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            type:"spring",
            stiffness:130
        }
    }
}

function LogInPage(){
    const [btn , setBtn ] = useState(false);
    const {setWrongAns ,setPrice  , setAns , setTotalMoney} = useContext(AppContext);
    setPrice(0);
    setWrongAns("");
    setAns("");
    setTotalMoney(0);
 return (
    <div className=" flex w-full flex-col gap-6 justify-center items-center">

        <p className="text-3xl">Want to play the game ?</p>
        <label className="flex flex-col gap-6">
            <p className="text-2xl font-bold ">ENTER YOUR NAME</p>
            <input onChange={()=>setBtn(true)} className="py-2 rounded-lg text-center text-black" required type="text" placeholder="ex - manish" />
        </label>
    <NavLink to="/game">
        {  btn &&
        <motion.button variants={containerVariants} initial="hidden" animate="visible" className="border-2 border-white px-6 text-xl font-bold py-2 rounded-md bg-black">Submit</motion.button>

}
    </NavLink>
            
 
    </div>
 )
}

export default LogInPage;