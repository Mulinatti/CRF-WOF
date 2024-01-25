const PlayerInfo = () => {
  return (
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
  );
};

export default PlayerInfo;
