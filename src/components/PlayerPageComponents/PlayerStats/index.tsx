interface PlayerStatsProps {
  stats: {
    goals: number;
    assists: number;
    received: number;
    matches: number;
  }
}

const PlayerStats = ({stats}: PlayerStatsProps) => {

  const {goals, assists, matches} = stats;

  return (
    <div className="grid grid-cols-3 text-sm z-10 relative *:border *:border-white/10 *:rounded-lg *:p-2 *:bg-zinc-900/50 *:backdrop-blur-sm gap-3">
      <div className="flex flex-col justify-between h-20">
        <span>Goals</span>
        <span className="text-end text-2xl font-bold">{goals}</span>
      </div>
      <div className="flex flex-col justify-between h-20">
        <span>Assists</span>
        <span className="text-end text-2xl font-bold">{assists}</span>
      </div>
      <div className="flex flex-col justify-between h-20">
        <span>Matches</span>
        <span className="text-end text-2xl font-bold">{matches}</span>
      </div>
    </div>
  );
};

export default PlayerStats;
