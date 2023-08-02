import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clock from "../assets/clock.mp3";
import loose from "../assets/loose.mp3"
import { AppContext } from "../Context/AppContext";


function Timmer(){
    const {price}= useContext(AppContext);

    const [timer , setTimer] = useState(30);
    useEffect(()=>{
        setTimer(30);
    },[price]);

const navigate = useNavigate();
useEffect(()=>{
    const interval = setInterval(() => {
    
         setTimer((prev)=>prev-1);

    }, 1000);
    return ()=> clearInterval(interval);
} , [timer])

if(timer >-1){
return timer;
}
else{
  new Audio(loose).play();
setTimeout(()=>{
    navigate("/playAgain");
},1000)
}
}

export default Timmer;