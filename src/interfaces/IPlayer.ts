import ITrophy from "./ITrophy";

interface IPlayer {
  id?: number;
  entered: string;
  exit: string;
  activity: boolean;
  info: {
    name: string;
    shirt_number: string;
    role: string;
  };
  stats: {
    goals: number;
    assists: number;
    received: number;
    matches: number;
  };
  trophys: ITrophy[];
}

export default IPlayer;