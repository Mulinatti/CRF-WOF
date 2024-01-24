import { Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header className="bg-red-800 font-semibold flex justify-end">
      <div className="md:w-1/2 w-full flex justify-between items-center">
        <figure className="flex flex-col items-start">
          <div className="flex items-center md:flex-col md:-translate-x-1/2">
            <img className="w-16 h-16" src="./logos/logo.svg" alt="logo da crf" />
            <figcaption className="font-black text-zinc-300">WoF</figcaption>
          </div>
        </figure>
        <nav className="hidden lg:block">
          <ul className="flex *:mx-3 text-zinc-950">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/matchday">Matchday</NavLink></li>
            <li><NavLink to="/players">Jogadores</NavLink></li>
            <li><NavLink to="/matches">Partidas</NavLink></li>
          </ul>
        </nav>
        <div className="mr-3 lg:hidden">
          <Menu size={28}/>
        </div>
      </div>
    </header>
    <Outlet/>
    </>
  );
};

export default Header;
