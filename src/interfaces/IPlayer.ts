interface IPlayer {
  id: number;
  name: string;
  entered: string;
  exit: string;
  info: {
    name: string;
    role: string;
    shirt_number: number;
  };
  stats: {
    goals: number;
    assists: number;
    received: number;
  };
  trophys: [];
}

export default IPlayer;