
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


function Main() {

  
  let { ans, wrongAns , data , checkAnswer} =  useContext(AppContext);
  console.log("the data is " , data);

  return (
    
    <div className=" absolute bottom-0 flex flex-col gap-10  w-[85%] mb-4 ml-[10%] ">
    
     ( <p className="bg-[#030328] text-center py-3 cursor-pointer rounded-lg border-[3px] border-white">
        {data.question}
      </p>

      <div className="grid grid-rows-2 cursor-pointer	grid-cols-2  gap-4 ">
        {data.options.map((option, index) => (
          <p
            key={index}
            onClick={() => checkAnswer(option)}
            className={` ${ans === option ? "correct" : ""} ${
              wrongAns === option ? "wrong" : ""
            } border-[3px] border-white bg-[#020230] rounded-lg text-center py-3 hover:bg-blue-900 transition-all duration-75 `}
          >
            {option}
          </p>
        ))}
      </div>)
        
    </div>
  );
}

export default Main;
