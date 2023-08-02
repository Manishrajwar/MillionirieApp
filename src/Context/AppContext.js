import winning from "../assets/correctAns.mp3";
import loose from "../assets/loose.mp3";
import { createContext, useState, useEffect } from "react";
import questionsData from "../questionsData";
import { useNavigate } from "react-router-dom";
import moneyData from "../moneyData";


export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  const [ans, setAns] = useState("");
  const [wrongAns, setWrongAns] = useState("");
  let data;
  data = questionsData[price];
  
  if(price === questionsData.length-1){
        navigate("/wonpage");
       }


  function checkAnswer(option) {
    if (option === data.answer) {

      setAns(option);
      new Audio(winning).play();
      setTimeout(() => {
       
        setTotalMoney((prev)=>(
          prev+ moneyData[price].money
        ))
        if(price <= moneyData.length ){
          setPrice((prev)=>prev+1);
        }
        else{
          navigate("/wonPage");
        }
        setAns("");
      
      }, 1000);


    } else {
      setWrongAns(option);
      new Audio(loose).play();
      setTimeout(() => {
        navigate("/playAgain");
      }, 1000);
    }
  }

 



  const value = {
    ans,
    setAns,
    wrongAns,
    setWrongAns,
    price,
    setPrice,
    checkAnswer,
    data,
    totalMoney,
    setTotalMoney,
    questionsData,
  
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
