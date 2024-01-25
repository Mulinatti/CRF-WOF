import { ChevronLeft } from "lucide-react";
import PlayerInfo from "../../components/PlayerPageComponents/PlayerInfo";
import PlayerStats from "../../components/PlayerPageComponents/PlayerStats";
import PlayerTrophys from "../../components/PlayerPageComponents/PlayerTrophys";
import PlayerActivity from "../../components/PlayerPageComponents/PlayerActivity";

const PlayerPage = () => {
  return (
    <main className="overflow-hidden">
      <div className="flex items-start w-full pt-2 h-screen absolute" style={{background: "linear-gradient(180deg, rgba(153,27,27,1) 0%, rgba(11,11,11,1) 50%)"}}>
        <ChevronLeft strokeWidth={3} size={28} />
        <p className="uppercase translate-y-[1px] font-bold">Back</p>
      </div>
      <div className="p-4">
      <section className="mt-8">
        <PlayerInfo/>
        <PlayerStats/>
      </section>
      <PlayerActivity/>
      <PlayerTrophys/>
      </div>
    </main>
  );
};

export default PlayerPage;
