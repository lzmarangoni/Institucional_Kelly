import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Section from "./Components/Section";
import Sobre from "./Components/Sobre";
import Videos from "./Components/Videos";

function App() {

  /*https://www.isabelaandres.com/*/
  let opcoes = [{ nome: "Sobre", id: "#1" }, { nome: "Terapia e Movimento", id: "#2" },{ nome: "Videos", id: "#3" },{ nome: "Contato", id: "#4" },];
  return (
    <div className="App">
      <Header itens={opcoes}/>

      <Section tipo={"sectionCustom"} id="1">
       <Sobre/>
      </Section>
      <Section tipo={"sectionCustom"} id="2">
       <Main></Main>
      </Section>
      <Section tipo={"sectionCustom"} id="3">
        <Videos/>
      </Section>
      <Section tipo={"sectionCustom2"} id="4">
        test 2
      </Section>
    </div>
  );
}

export default App;
