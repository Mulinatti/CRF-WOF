import {
  ChevronLeftCircle,
  MinusCircle,
  PlusCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const back = useNavigate();

  return (
    <main className="p-4 overflow-hidden flex flex-col items-center">
      <div
        onClick={() => back(-1)}
        className="flex hover:text-zinc-400 transition-all p-2 items-center cursor-pointer absolute top-0 left-0"
      >
        <ChevronLeftCircle className="mr-2" />
        <p>Voltar</p>
      </div>
      <form className="w-full mt-10 max-w-[400px] *:mb-4">
        <section>
          <legend className="text-xl mb-4 font-bold">Informações</legend>
          <div className="flex justify-center">
            <fieldset className="w-full mr-1">
              <label className="block">Nickname</label>
              <input type="text" />
            </fieldset>
            <fieldset className="w-12">
              <label className="block">N°</label>
              <input type="text-center" />
            </fieldset>
          </div>
          <fieldset>
            <label>Posição</label>
            <input type="text" />
          </fieldset>
          <fieldset className="my-4">
            <label className="block">Imagem</label>
            <input className="text-xs md:text-sm" type="file"/>
          </fieldset>
        </section>
        <section>
          <legend className="text-xl mb-4 font-bold">Estatísticas</legend>
          <fieldset>
            <label className="block">Gols</label>
            <div className="flex items-center">
              <MinusCircle className="cursor-pointer"/>
              <input className="w-12 mx-2" type="text" />
              <PlusCircle className="cursor-pointer" />
            </div>
          </fieldset>
          <fieldset>
            <label className="block">Assistências</label>
            <div className="flex items-center">
              <MinusCircle  className="cursor-pointer"/>
              <input className="w-12 mx-2" type="text" />
              <PlusCircle  className="cursor-pointer"/>
            </div>
          </fieldset>
          <fieldset>
            <label className="block">Partidas</label>
            <div className="flex items-center">
              <MinusCircle  className="cursor-pointer"/>
              <input className="w-12 mx-2" type="text" />
              <PlusCircle  className="cursor-pointer"/>
            </div>
          </fieldset>
        </section>
        <button className="p-3 w-full border border-transparent hover:bg-zinc-950 hover:border-zinc-300/50 transition-all bg-zinc-900 rounded-lg text-sm font-bold">Confirmar</button>
      </form>
    </main>
  );
};

export default FormPage;
