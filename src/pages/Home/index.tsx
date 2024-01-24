import AboutWof from "./AboutWof";

const Home = () => {
  return (
    <main className="h-full text-zinc-300 p-3">
      <section className="mt-20">
        <h1 className="font-bold text-center text-3xl font-[Nexa]">Bem-vindo a página da CRF do WoF!</h1>
      </section>
      <section className="text-center mt-5">
        <p>Nós somos uma equipe de um jogo brasileiro em estado de desenvolvimento, chamado World of Football!</p>
        <p>Essa página foi criada com o intuito de nós da equipe, nos divertirmos com nossas estatísticas dentro dos campeonatos da comunidade.</p>
      </section>
      <section className="mt-12">
        <figure>
          <a className="block mx-auto" href="https://www.playwof.com">
            <img className="w-52 mx-auto" src="https://uploads-ssl.webflow.com/62ec3361b018b33ae7c8ee7e/6384be7395e146d8612ed27e_full-logo-small.png" alt="" />
          </a>
        </figure>
        <AboutWof/>
      </section>
    </main>
  );
};

export default Home;
