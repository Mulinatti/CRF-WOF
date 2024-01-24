const PlayerCard = () => {
  return (
    <li className="max-w-[238px] cursor-pointer hover:scale-105 transition-all relative shadow-lg bg-gradient-to-b from-red-700 to-black  rounded-xl overflow-hidden">
      <div className="relative px-3 pt-3">
        <img src="./images/cr7.png" alt="" />
        <span className="absolute font-[Nexa] opacity-20 text-white text-5xl italic top-2 right-4">9</span>
      </div>
      <div className="p-3 absolute z-10 bottom-0 bg-black/50 rounded-t-2xl w-full">
        <p className="font-[Nexa] text-4xl text-red-600 italic">CF</p>
        <div className="font-bold font-[Nexa] text-2xl italic">GowBraian212</div>
      </div>
    </li>
  );
};

export default PlayerCard;
