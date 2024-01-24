import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PlayersPage from "./pages/PlayersPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="/players" element={<PlayersPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;