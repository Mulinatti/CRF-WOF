const PlayerStats = () => {
  return (
    <div className="grid grid-cols-3 text-sm z-10 relative *:border *:border-white/10 *:rounded-lg *:p-2 *:bg-zinc-900/50 *:backdrop-blur-sm gap-3">
      <div className="flex flex-col justify-between h-20">
        <span>Goals</span>
        <span className="text-end text-2xl font-bold">6</span>
      </div>
      <div className="flex flex-col justify-between h-20">
        <span>Assists</span>
        <span className="text-end text-2xl font-bold">2</span>
      </div>
      <div className="flex flex-col justify-between h-20">
        <span>Matches</span>
        <span className="text-end text-2xl font-bold">5</span>
      </div>
    </div>
  );
};

export default PlayerStats;
