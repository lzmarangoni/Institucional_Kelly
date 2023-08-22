import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Section from "./Components/Section";

function App() {

  /*https://www.isabelaandres.com/*/
  let opcoes = [{ nome: "Sobre", id: "#1" }, { nome: "Terapia e Movimento", id: "#2" },{ nome: "Videos", id: "#3" },{ nome: "Contato", id: "#4" },];
  return (
    <div className="App">
      <Header itens={opcoes}/>

      <Section tipo={"sectionCustom"} id="1">
       <Content/>
       <h2>Sobre</h2>
       <p>Lorem</p>
      </Section>
      <Section tipo={"sectionCustom2"} id="2">
        <p>Teste</p>
      </Section>
      <Section tipo={"sectionCustom"} id="3">
        test 1
      </Section>
      <Section tipo={"sectionCustom2"} id="4">
        test 2
      </Section>
    </div>
  );
}

export default App;
