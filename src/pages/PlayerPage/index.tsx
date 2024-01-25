import { ArrowRight, ChevronLeft } from "lucide-react";

const PlayerPage = () => {
  return (
    <main className="p-4" style={{background: "linear-gradient(180deg, rgba(153,27,27,1) 0%, rgba(11,11,11,1) 50%)"}}>
      <div className="flex items-center">
        <ChevronLeft strokeWidth={3} size={28} />
        <p className="uppercase translate-y-[1px] font-bold">Back</p>
      </div>
      <section className="mt-5">
        <div className="relative">
          <div>
            <img
              className="invert absolute -top-0 -translate-x-6 -translate-y-6 w-4/5 opacity-10"
              src="../logos/logo.svg"
              alt="asda"
            />
          </div>
          <div>
            <img
              className="absolute w-[200px] h-[300px] -right-16"
              src="../images/cr7.png"
              alt=""
            />
          </div>
          <div className="font-[Nexa] h-64 flex flex-col justify-between">
            <div className="hover:z-10">
              <span className="text-4xl italic">9</span>
              <p className="text-3xl italic">GowBraian212</p>
            </div>
            <div className="mb-2">
              <span className="text-4xl italic text-red-500">CF</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 text-sm z-50 relative *:border *:border-white/10 *:rounded-lg *:p-2 *:bg-zinc-900/50 *:backdrop-blur-sm gap-3">
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
      </section>
      <section className="mt-6">
        <div className="flex">
          <ArrowRight color="green" strokeWidth={3} size={20}/>
          <p className="ml-2 text-sm">10/06/2023</p>
        </div>
      </section>
      <section className="mt-6 bg-zinc-900/50 rounded-lg border border-white/10 p-2">
        <h3 className="ml-1 text-xs bg-zinc-900 p-1 px-2 rounded-lg w-fit">Campeonatos</h3>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm">Weekly - 20/12/2023</p>
          </div>
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm">Weekly - 20/12/2023</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlayerPage;
