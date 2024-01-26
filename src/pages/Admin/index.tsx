import { PlusCircle } from "lucide-react";
import Actions from "../../components/Actions";
import { useEffect, useState } from "react";
import http from "../../api/connection";
import IPlayer from "../../interfaces/IPlayer";
import { Link } from "react-router-dom";

const Admin = () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    http.get<IPlayer[]>("/players").then((res) => {
      setPlayers(res.data);
    });
  }, []);

  return (
    <main className="p-5">
      <section className="w-1/2 min-w-[500px] mx-auto">
        <table className="table-auto w-full select-none">
          <thead className="border-b border-white/20">
            <tr className="text-start *:p-2">
              <th className="text-start">Id</th>
              <th className="text-start">Nick</th>
              <th className="text-start">Posição</th>
              <th>
                <Link to="/admin/form/create">
                  <PlusCircle
                    size={20}
                    className="bg-zinc-300 hover:bg-zinc-950 transition-all border border-transparent hover:border-zinc-300 rounded-full text-zinc-900 hover:text-zinc-300 cursor-pointer"
                  />
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="*:p-2 *:border-b *:border-zinc-300/20 text-sm">
                <td>{player.id}</td>
                <td>{player.info.name}</td>
                <td>{player.info.role}</td>
                <Actions player={player}/>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Admin;
