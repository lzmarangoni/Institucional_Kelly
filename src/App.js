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
import Videos from "./Routes/Videos";


function App() {

  /*https://www.isabelaandres.com/*/
  let opcoes = [{ nome: "Sobre", id: "#1" }, { nome: "Terapia Online ", id: "#2" },{ nome: "Videos", id: "#3" },{ nome: "Dúvidas Frequentes", id: "#4" },{ nome: "Contato", id: "#5" },];
  return (
    <div className="App">
      <Header itens={opcoes}/>
      <Section  id="1">
       <Sobre/>
      </Section>
      <Section  id="2">
       <Main></Main>
      </Section>
      <Section  id="3">
        <Videos/>
      </Section>
      <Section id="4">
        <PerguntasFrequentes/>
      </Section>
      <Section id="5">
        <Contato/>
      </Section>
    
        <Rodape/>
    
      <WhatsApp className="whatsapp"/>
    </div>
  );
}

export default App;
