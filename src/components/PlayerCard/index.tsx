import { Link } from "react-router-dom";
import IPlayer from "../../interfaces/IPlayer";
import colors from "../../utils/roleColors";


interface PlayerCardProps {
  player: IPlayer;
}

const PlayerCard = ({player}: PlayerCardProps) => {

  const { info } = player;

  return (
    <li className="max-w-[238px] group max-h-[325] cursor-pointer hover:scale-105 transition-all relative shadow-lg bg-gradient-to-b from-red-700 to-black  rounded-xl overflow-hidden">
      <Link to={`/players/${info.name}`}>
        <div className="relative px-3 pt-3">
          <img className="w-[210px] h-[300px] z-10 group-hover:-z-10 relative" src="./images/cr72.png" alt="" />
          <span className="absolute font-[Nexa] transition-colors opacity-20 group-hover:opacity-100 text-white text-5xl italic top-2 right-4">{info.shirt_number}</span>
        </div>
        <div className="p-3 absolute bottom-0 z-10 bg-black/50 backdrop-blur-sm rounded-t-2xl w-full">
          <p className={`font-[Nexa] text-4xl ${colors[info.role]} italic`}>{info.role}</p>
          <div className="font-bold capitalize font-[Nexa] text-2xl italic">{info.name}</div>
        </div>
      </Link>
    </li>
  );
};

export default PlayerCard;
