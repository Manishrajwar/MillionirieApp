import Main from "../Components/Main";
import Pyramid from "../Components/Pyramid";
import Timmer from "../Components/Timmer";

function GamePage() {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-[75%] main relative">
        {/* for clock  */}
        <div className="w-[50px] absolute  bottom-[40%] left-[10%] h-[50px] bg-[#020234] rounded-full border-2 border-white text-2xl font-bold flex justify-center items-center"><Timmer/></div>

        <Main />
      </div>

      <div className="w-[25%]">
        <Pyramid />
      </div>
    </div>
  );
}

export default GamePage;
