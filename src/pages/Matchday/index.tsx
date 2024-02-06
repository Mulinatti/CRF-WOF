import Area from "../../components/Area";
import Center from "../../components/Center";
import PlayerButton from "../../components/PlayerButton";

const Matchday = () => {
  return (
    <main className="relative p-3">
      <h1 className="font-[Nexa] mt-10 text-4xl italic text-center">CRF <i className="text-xl mx-2">x</i> NATA</h1>
      <h3 className="text-center text-xs mt-4 text-zinc-500/50">06/02/2024</h3>
      <h3 className="text-center mt-2">Copa do Brasil</h3>
      <section className="mt-20 w-full lg:w-3/5 mx-auto relative h-full border-4 border-white/20">
        <Area side/>
        <Area side={false}/>
        <Center/>
        <section className="w-full py-10 flex justify-around">
          <PlayerButton/>
        </section>
        <section className="w-full py-10 flex justify-around">
          <PlayerButton/>
        </section>
        <section className="w-full py-10 flex justify-around">
          <PlayerButton/>
          <PlayerButton/>
        </section>
        <section className="w-full py-10 flex justify-around">
          <PlayerButton/>
        </section>
      </section>
    </main>
  );
};

export default Matchday;
