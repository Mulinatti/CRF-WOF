import { ChevronLeft } from "lucide-react";
import PlayerInfo from "../../components/PlayerPageComponents/PlayerInfo";
import PlayerStats from "../../components/PlayerPageComponents/PlayerStats";
import PlayerTrophys from "../../components/PlayerPageComponents/PlayerTrophys";
import PlayerActivity from "../../components/PlayerPageComponents/PlayerActivity";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import http from "../../api/connection";
import IPlayer from "../../interfaces/IPlayer";
import playerObject from "../../utils/playerObject";

const PlayerPage = () => {
  const { id } = useParams();

  const back = useNavigate();

  const [player, setPlayer] = useState<IPlayer>(playerObject);

  useEffect(() => {
    http.get<IPlayer>(`/players/${id}`).then((res) => {
      setPlayer(res.data);
    });
  }, [id]);

  return (
    <main className="overflow-hidden">
      <div
        className="w-full pt-2 h-screen absolute"
        style={{
          background:
            "linear-gradient(180deg, rgba(153,27,27,1) 0%, rgba(11,11,11,1) 50%)",
        }}
      >
        <div onClick={() => back(-1)} className="flex cursor-pointer w-fit hover:text-zinc-900">
          <ChevronLeft strokeWidth={3} size={28} />
          <p className="uppercase translate-y-[3px] font-bold">Voltar</p>
        </div>
      </div>
      <div className="p-4">
        <section className="mt-8">
          <PlayerInfo image={player.image} info={player.info} />
          <PlayerStats stats={player.stats}/>
        </section>
        <PlayerActivity entered={player.entered} exit={player.exit} />
        <PlayerTrophys trophys={player.trophys} />
      </div>
    </main>
  );
};

export default PlayerPage;
