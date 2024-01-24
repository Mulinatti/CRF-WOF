import PlayerCard from "../../components/PlayerCard"

const PlayersPage = () => {
  return (
    <main className="p-5">
      <ul className="flex justify-center gap-x-10 gap-y-5 flex-wrap">
        <PlayerCard/>
        <PlayerCard/>
      </ul>
    </main>
  )
}

export default PlayersPage