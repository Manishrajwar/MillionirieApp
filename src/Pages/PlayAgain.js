import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PlayAgain(){
    const {totalMoney } = useContext(AppContext);
    
  return (
    <div className="w-full  flex flex-col gap-6 justify-center items-center text-2xl">

         <p>You earn ${totalMoney} </p>
        <Link to="/">
      <button className="border-2 border-white rounded-md p-3 hover:bg-[#37377b] transition-all duration-150">Play Again</button>
        </Link>
    </div>
  )
}

export default PlayAgain;