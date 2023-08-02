import { Routes , Route } from "react-router-dom";
import "./App.css";
import LogInPage from "./Pages/LogInPage";
import GamePage from "./Pages/GamePage";
import PlayAgain from "./Pages/PlayAgain";
import WonPage from "./Pages/WonPage";





function App() {

  return (
    <div className="bg-[#020230] w-screen h-screen text-white flex">

      <Routes>
<Route path="/" element={<LogInPage/>} />
<Route path="/game" element={<GamePage/>}/>
<Route path="/playAgain" element={<PlayAgain/>}/>
<Route path="/wonPage" element={<WonPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
