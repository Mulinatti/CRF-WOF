import { ChevronLeftCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import FieldSet from "../../components/FieldSet";
import { FormEvent, useEffect, useState } from "react";
import http from "../../api/connection";
import playerObject from "../../utils/playerObject";
import IPlayer from "../../interfaces/IPlayer";

const FormPage = () => {
  const back = useNavigate();
  const { id } = useParams();
  
  const [playerData, setPlayerData] = useState<IPlayer>(playerObject);

  const newPlayer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    http.post("/players", playerData).then((res) => console.log(res.data));
  };

  useEffect(() => {
    http.get<IPlayer>(`/players/${id}`)
      .then(res => {
        setPlayerData(res.data);
      })
  }, [id])

  console.log(playerData);

  return (
    <main className="p-4 overflow-hidden flex flex-col items-center">
      <div
        onClick={() => back(-1)}
        className="flex hover:text-zinc-400 transition-all p-2 items-center cursor-pointer absolute top-0 left-0"
      >
        <ChevronLeftCircle className="mr-2" />
        <p>Voltar</p>
      </div>
      <form onSubmit={newPlayer} className="w-full mt-10 max-w-[400px] *:mb-4">
        <section>
          <legend className="text-xl mb-4 font-bold">Informações</legend>
          <div className="flex justify-center">
            <FieldSet
              value={playerData.info.name}
              inputChange={(value) =>
                setPlayerData({
                  ...playerData,
                  info: {
                    ...playerData.info,
                    name: value,
                  },
                })
              }
              label="Nickname"
            />
            <FieldSet
              value={playerData.info.shirt_number}
              inputChange={(value) =>
                setPlayerData({
                  ...playerData,
                  info: {
                    ...playerData.info,
                    shirt_number: value,
                  },
                })
              }
              label="N°"
              width="w-12"
            />
          </div>
          <FieldSet
            value={playerData.info.role}
            inputChange={(value) =>
              setPlayerData({
                ...playerData,
                info: {
                  ...playerData.info,
                  role: value,
                },
              })
            }
            label="Posição"
          />
          <fieldset className="my-4 w-full">
            <label className="block mx-2">Imagem</label>
            <div className="flex items-center">
              <input className="text-xs w-full mx-2 md:text-sm" type="file" />
            </div>
          </fieldset>
        </section>
        <section>
          <legend className="text-xl mb-4 font-bold">Estatísticas</legend>
          <FieldSet
            value={playerData.stats.goals}
            inputChange={(value) =>
              setPlayerData({
                ...playerData,
                stats: {
                  ...playerData.stats,
                  goals: isNaN(parseInt(value)) ? 0 : parseInt(value),
                },
              })
            }
            stat
            width="w-12"
            label="Gols"
          />
          <FieldSet
            value={playerData.stats.assists}
            inputChange={(value) =>
              setPlayerData({
                ...playerData,
                stats: {
                  ...playerData.stats,
                  assists: isNaN(parseInt(value)) ? 0 : parseInt(value),
                },
              })
            }
            stat
            width="w-12"
            label="Assistências"
          />
          <FieldSet
            value={playerData.stats.received}
            inputChange={(value) =>
              setPlayerData({
                ...playerData,
                stats: {
                  ...playerData.stats,
                  received: isNaN(parseInt(value)) ? 0 : parseInt(value),
                },
              })
            }
            stat
            width="w-12"
            label="Sofridos"
          />
          <FieldSet
            value={playerData.stats.matches}
            inputChange={(value) =>
              setPlayerData({
                ...playerData,
                stats: {
                  ...playerData.stats,
                  matches: isNaN(parseInt(value)) ? 0 : parseInt(value),
                },
              })
            }
            stat
            width="w-12"
            label="Partidas"
          />
        </section>
        <div className="flex items-center">
          <button className="p-3 mx-2 w-full border border-transparent hover:bg-zinc-950 hover:border-zinc-300/50 transition-all bg-zinc-900 rounded-lg text-sm font-bold">
            Confirmar
          </button>
        </div>
      </form>
    </main>
  );
};

export default FormPage;
