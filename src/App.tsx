import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Squad from "./pages/Squad";
import PlayerPage from "./pages/PlayerPage";
import Admin from "./pages/Admin";
import FormPage from "./pages/FormPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="/players" element={<Squad/>}/>
        </Route>
        <Route path="/players/:name" element={<PlayerPage/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/form/:id" element={<FormPage/>}/>
        <Route path="/admin/form/create" element={<FormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;