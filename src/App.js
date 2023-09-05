import "./App.css";
import Header from "./Components/Header";
import ItemLista from "./Components/ItemLista";
import WhatsApp from "./Components/LogoWhatsApp";

import Section from "./Components/Section";
import Contato from "./Routes/Contato";
import Main from "./Routes/Main";
import PerguntasFrequentes from "./Routes/PerguntasFrequentes";
import Rodape from "./Routes/Rodape";
import Sobre from "./Routes/Sobre";
import Sobre2 from "./Routes/Sobre2";
import Videos from "./Routes/Videos";

function App() {
  
  let opcoes = [
    { nome: "Sobre", id: "#sobre" },
    { nome: "Terapia Online ", id: "#terapia_online" },
    { nome: "Entrevistas", id: "#entrevistas" },
    { nome: "Dúvidas Frequentes", id: "#duvidas" },
    { nome: "Contato", id: "#contato" },
  ];
  return (
    <div className="App">
      <Header itens={opcoes} />
      <Section id="sobre">
        <Sobre />
      </Section>
      
        <Sobre2 />
     
      <Section id="terapia_online">
        <Main></Main>
      </Section>
      <Section id="entrevistas">
        <Videos />
      </Section>
      <Section id="duvidas">
        <PerguntasFrequentes />
      </Section>
      <Section id="contato">
        <Contato />
      </Section>

      <Rodape />

      <WhatsApp className="whatsapp" />
    </div>
  );
}

export default App;
