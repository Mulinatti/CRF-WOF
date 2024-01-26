import { MoreHorizontal } from "lucide-react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import IPlayer from "../../interfaces/IPlayer";
import { Link } from "react-router-dom";

interface ActionsProps {
  player: IPlayer;
}

const Actions = ({player}: ActionsProps) => {
  const [actions, setActions] = useState(false);

  const actionsRef = useRef() as MutableRefObject<HTMLDivElement>;
  const optionsRef = useRef(null);

  const handleOutsideClick = (element: EventTarget) => {
    if(actionsRef.current) {
      const childrens = actionsRef.current.children;

      for (const child of childrens) {
        if (
          (element != child || element != actionsRef.current) &&
          element != optionsRef.current
        )
          setActions(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => handleOutsideClick(e.target!));
    return document.removeEventListener("click", (e) => handleOutsideClick(e.target!))
  }, []);

  return (
    <td className="relative">
      <MoreHorizontal
        ref={optionsRef}
        onClick={() => setActions(!actions)}
        className="cursor-pointer hover:bg-zinc-300/10  transition-all rounded-md p-[1px]"
        size={20}
      />
      <div
        ref={actionsRef}
        className={`${
          actions ? "block" : "hidden"
        } select-none border p-1 absolute top-0 translate-y-8 -translate-x-[77px] bg-zinc-950 *:transition-all z-50 flex flex-col w-24 rounded-md border-zinc-300/50 overflow-clip`}
      >
        <Link to={`/admin/form/${player.id}`} className=" p-1 text-start rounded-[4px] cursor-pointer border-zinc-300/20 hover:bg-zinc-300/10">
          Editar
        </Link>
        <button className="p-1 text-start rounded-[4px] cursor-pointer hover:bg-zinc-300/10">
          Excluir
        </button>
      </div>
    </td>
  );
};

export default Actions;
