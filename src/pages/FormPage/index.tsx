import {
  ChevronLeftCircle,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import FieldSet from "../../components/FieldSet";

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
            <FieldSet label="Nickname"/>
            <FieldSet label="N°" width="w-12"/>
          </div>
          <FieldSet label="Posição"/>
          <fieldset className="my-4 w-full">
            <label className="block mx-2">Imagem</label>
            <div className="flex items-center">
              <input className="text-xs w-full mx-2 md:text-sm" type="file"/>
            </div>
          </fieldset>
        </section>
        <section>
          <legend className="text-xl mb-4 font-bold">Estatísticas</legend>
          <FieldSet stat width="w-12" label="Gols"/>
          <FieldSet stat width="w-12" label="Assistências"/>
          <FieldSet stat width="w-12" label="Sofridos"/>
          <FieldSet stat width="w-12" label="Partidas"/>
        </section>
        <div className="flex items-center">
          <button className="p-3 mx-2 w-full border border-transparent hover:bg-zinc-950 hover:border-zinc-300/50 transition-all bg-zinc-900 rounded-lg text-sm font-bold">Confirmar</button>
        </div>
      </form>
    </main>
  );
};

export default FormPage;
