import React from "react";
import styles from "./Avaliacoes.module.css";

import { HiStar} from "react-icons/hi";


import Titulo from "../../Components/Titulo";
import CardAvaliacao from "../../Components/CardAvaliacao";


export default function Avaliacoes() {



  const avaliacoes = [
    {
      simbolo: <div><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/></div>,
      nome: 'Paciente "A."',
      texto:
        '"Achei muito importante a percepção da Kelly num momento em que eu estava me colocando como culpada de certos abusos, e foi fundamental para me auxiliar no posicionamento que eu deveria ter, me ajudando a estabelecer a autoridade e segurança nas minhas atitudes."',
    },
    {
      simbolo: <div><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/></div>,
      nome: 'Paciente "G."',
      texto:
        '"Dr. Kelly é uma ótima profissional, muito atenciosa e dedicada, me senti muito confortável para contar pelo que estava passando e sempre com muita paciência e empatia buscou me orientar da melhor forma e organizar meus sentimentos, super indico!! Uma excelente profissional!"',
    },
    {
      simbolo:<div><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/></div>,
      nome: 'Paciente "K."',
      texto:
        '"Tive o prazer de fazer terapia com a Dra Kelly por alguns meses e mesmo no pouco tempo que pude ser tratada por ela, percebi um grande avanço psicológico. Sempre fui tratada com muito respeito, empatia e profissionalismo, da primeira à última consulta. Senti-me à vontade para falar sobre medos e fobias que antes nunca tinha tido coragem de externar, e recebi ajuda para aceitar, enfrentar e superar de um jeito muito simples e natural. Hoje tenho forças para seguir em busca do meu aperfeiçoamento contínuo graças as orientações que recebi nas consultas. Já passei com várias profissionais e a Dra Kelly é com certeza por mim a mais recomendada."',
    },
    {
      simbolo: <div><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/><HiStar size={30}/></div>,
      nome: 'Paciente "T."'  ,
      texto:
        '"Passei por um processo de crises de ansiedade muito forte no final de novembro em diante, com vários pontos da minha vida pessoal e profissional que acabaram ocasionando a piora.Iniciei o tratamento com a Kelly em janeiro e ela foi excepcional e incrível nesse período comigo. Ela me vez enxergar coisas que jamais seria possível sozinha e além disso, não me sentir culpada por me priorizar. Além de muito profissional, ela tem um jeito único de conversar conosco, o que faz o tratamento se tornar ainda mais especial, só tenho agradecer todo esse período de terapia"',
    },
  ];
  return (
    <>
      <Titulo>Avaliações</Titulo>
      <div className={styles.main}>
       
        
        <div className={styles.cards}>
          {avaliacoes.map(avaliacao => {return <CardAvaliacao key={avaliacao.titulo} data={avaliacao}/>}) }
        </div>
      </div>
    </>
  );
}
