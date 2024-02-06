const playerObject = {
  entered: new Date().toLocaleDateString("pt-BR"),
  exit: "",
  activity: true,
  image: "",
  info: {
    name: "",
    shirt_number: "",
    role: "",
  },
  stats: {
    goals: 0,
    assists: 0,
    received: 0,
    matches: 0,
  },
  trophys: [],
};

export default playerObject;