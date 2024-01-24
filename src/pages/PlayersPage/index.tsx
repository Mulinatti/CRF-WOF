import { useEffect, useState } from "react"
import PlayerCard from "../../components/PlayerCard"
import http from "../../api/connection"
import IPlayer from "../../interfaces/IPlayer"

const PlayersPage = () => {

  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    http.get<IPlayer[]>("/players")
      .then(res => {
        setPlayers(res.data)
        console.log(players)
      })
  }, [players])

  return (
    <main className="p-5">
      <ul className="flex justify-center md:justify-start gap-x-10 gap-y-5 flex-wrap">
        {players.map(player => <PlayerCard key={player.id} player={player}/>)}
      </ul>
    </main>
  )
}

export default PlayersPage