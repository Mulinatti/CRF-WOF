import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const location = useLocation();

  const handleMenu = () => {
    if (window.innerWidth >= 768) setMenu(false);
  };

  useEffect(() => {
    setMenu(false);

    window.addEventListener("resize", handleMenu);

    return () => window.removeEventListener("resize", handleMenu);
  }, [location]);

  return (
    <>
      <header className="bg-red-800 font-semibold p-2">
        <div className="w-full flex justify-between items-center">
          <figure>
            <div className="flex items-center">
              <img
                className="w-16 h-16"
                src="./logos/logo.svg"
                alt="logo da crf"
              />
              <figcaption className="font-black text-zinc-300">WoF</figcaption>
            </div>
          </figure>
          <nav className="hidden md:block">
            <ul className="flex *:mx-3 text-zinc-950">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/matchday">Matchday</NavLink>
              </li>
              <li>
                <NavLink to="/players">Jogadores</NavLink>
              </li>
              <li>
                <NavLink to="/matches">Partidas</NavLink>
              </li>
            </ul>
          </nav>
          <div className="mr-3 md:hidden">
            <Menu
              className="cursor-pointer"
              onClick={() => setMenu(!menu)}
              size={30}
            />
          </div>
        </div>
        <div
          className={` ${
            menu ? "block" : "hidden"
          } right-1 bg-zinc-300 w-[160px] rounded-lg border border-red-700 overflow-clip absolute`}
        >
          <nav>
            <ul className="flex flex-col *:hover:text-zinc-950 *:w-full *:cursor-pointer text-zinc-950">
              <NavLink className="hover:bg-zinc-400/30 py-3 px-2" to="/">
                Home
              </NavLink>
              <NavLink
                className="hover:bg-zinc-400/30 py-3 px-2"
                to="/matchday"
              >
                Matchday
              </NavLink>
              <NavLink className="hover:bg-zinc-400/30 py-3 px-2" to="/players">
                Jogadores
              </NavLink>
              <NavLink className="hover:bg-zinc-400/30 py-3 px-2" to="/matches">
                Partidas
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
