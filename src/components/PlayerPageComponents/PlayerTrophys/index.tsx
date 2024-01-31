import ITrophy from "../../../interfaces/ITrophy";

interface PlayerTrophysProps {
  trophys: ITrophy[];
}

const PlayerTrophys = ({ trophys }: PlayerTrophysProps) => {
  return (
    trophys.length > 0 && (
      <section className="backdrop-blur-sm bg-zinc-900/50 rounded-lg border border-white/10 p-2">
        <h3 className="ml-1 text-xs bg-zinc-900 p-1 px-2 rounded-lg w-fit">
          Campeonatos
        </h3>
        {trophys.map((trophy) => (
          <div key={trophy.date} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
              <img className="w-10" src="../images/trophy.png" alt="" />
              <p className="text-sm text-center mt-2">{`${trophy.name} - ${trophy.date}`}</p>
            </div>
          </div>
        ))}
      </section>
    )
  );
};

export default PlayerTrophys;
