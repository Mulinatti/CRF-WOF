import { ArrowRight, ChevronLeft } from "lucide-react";

const PlayerPage = () => {
  return (
    <main className="overflow-hidden">
      <div className="flex items-start w-full pt-2 h-screen absolute" style={{background: "linear-gradient(180deg, rgba(153,27,27,1) 0%, rgba(11,11,11,1) 50%)"}}>
        <ChevronLeft strokeWidth={3} size={28} />
        <p className="uppercase translate-y-[1px] font-bold">Back</p>
      </div>
      <div className="p-4">
      <section className="mt-8">
        <div className="relative">
          <div>
            <img
              className="invert absolute -top-0 -translate-x-1/2 left-1/2 -translate-y-6 w-[260px] opacity-10"
              src="../logos/logo.svg"
              alt="asda"
            />
          </div>
          <div>
            <img
              //A PROPORÇAO DE ALTURA E LARGURA É CALCULADA POR WIDTH x 1,33 = ALTURA
              className="absolute w-[200px] h-[266px] transition-all md:w-[300px] md:h-[400px] top-10 md:top-0 -right-16 md:right-0"
              src="../images/cr72.png"
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
      </section>
      <section className="backdrop-blur-sm py-5">
        <div className="flex">
          <ArrowRight color="green" strokeWidth={3} size={20}/>
          <p className="text-sm ml-3">10/06/2023</p>
        </div>
      </section>
      <section className="backdrop-blur-sm bg-zinc-900/50 rounded-lg border border-white/10 p-2">
        <h3 className="ml-1 text-xs bg-zinc-900 p-1 px-2 rounded-lg w-fit">Campeonatos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm text-center mt-2">Weekly - 20/12/2023</p>
          </div>
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm text-center mt-2">Weekly - 20/12/2023</p>
          </div>
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm text-center mt-2">Weekly - 20/12/2023</p>
          </div>
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm text-center mt-2">Weekly - 20/12/2023</p>
          </div>
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm text-center mt-2">Weekly - 20/12/2023</p>
          </div>
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm text-center mt-2">Weekly - 20/12/2023</p>
          </div>
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm text-center mt-2">Weekly - 20/12/2023</p>
          </div>
          <div className="flex flex-col items-center border-b border-white/10 w-full py-4">
            <img className="w-10" src="../images/trophy.png" alt="" />
            <p className="text-sm text-center mt-2">Weekly - 20/12/2023</p>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default PlayerPage;
