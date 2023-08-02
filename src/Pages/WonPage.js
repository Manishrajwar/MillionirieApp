import { Link } from "react-router-dom";


function WonPage(){
return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
  <p className="text-white text-3xl font-bold">you won 7 crore</p>
  <Link to="/">
      <button className="border-2 border-white rounded-md p-3 hover:bg-[#37377b] transition-all duration-150">Play Again</button>
        </Link>
    </div>
)
}
 export default WonPage;