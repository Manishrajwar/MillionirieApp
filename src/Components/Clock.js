import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";



function Clock(){
 

return (
    <div>
        <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#090986] flex justify-center items-center text-2xl font-bold"></div>
    </div>
)
}

export default Clock;