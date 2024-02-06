import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Squad from "./pages/Squad";
import PlayerPage from "./pages/PlayerPage";
import Matchday from "./pages/Matchday";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="/players" element={<Squad/>}/>
          <Route path="/matchday" element={<Matchday/>}/>
        </Route>
        <Route path="/players/:id" element={<PlayerPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;