import { useContext } from "react";
import moneyData from "../moneyData";
import { AppContext } from "../Context/AppContext";

function Pyramid(){
    const {price} = useContext(AppContext);

    
  return (
    <div className="flex flex-col-reverse gap-4 w-full  h-full justify-center ">
        {
            moneyData.map((single)=>(
                
                <div key={single.id} className={`  cursor-pointer flex gap-[6rem] ml-10 w-[70%] h-[1.8rem] pl-2 rounded-md ${(single.id-1 !== price)?('bg-none'):('bg-[#0bb19e]')} `}>
                    <p>{single.id}</p>
                    <p>${single.money}</p>
                </div>
            ))
        }
    </div>
  )  

}

export default Pyramid;