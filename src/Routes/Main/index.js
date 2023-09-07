import React from "react";
import styles from "./Main.module.css";
import Card from "../../Components/Card"
import { HiClock, HiHome, HiMap, HiChatAlt2 } from "react-icons/hi";
import Titulo from "../../Components/Titulo";

export default function Main() {
  const beneficios = [
    {
      simbolo: <HiClock size={40}/>,
      titulo: "Flexibilidade",
      texto:
        "A terapia online oferece maior flexibilidade de horários, permitindo que os pacientes escolham horários que sejam mais convenientes para eles.",
    },
    {
      simbolo: <HiHome size={40}/>,
      titulo: "Comodidade",
      texto:
        "Os pacientes podem realizar a terapia no conforto do local de sua escolha, o que pode criar uma sensação de segurança e relaxamento durante as sessões terapêuticas.",
    },
    {
      simbolo: <HiMap size={40}/>,
      titulo: "Acessibilidade",
      texto:
        "A terapia online elimina a necessidade de deslocamento, economizando tempo e custos associados a transporte. Além disso, possibilita o acesso a profissionais qualificados, mesmo que não haja serviços de psicologia disponíveis localmente.",
    },
    {
      simbolo: <HiChatAlt2 size={40}/>,
      titulo: "Continuidade",
      texto:
        "A terapia online permite que os pacientes continuem o tratamento, mesmo quando estão viajando a negócios, de férias ou enfrentando situações que dificultariam a participação nas sessões presenciais.",
    },
  ];
  return (
    <>
      <Titulo>Terapia Online</Titulo>
      <div className={styles.main}>
        <div className={styles.cards}>
          {beneficios.map(beneficio => {return <Card key={beneficio.titulo} data={beneficio}/>}) }
        </div>
      </div>
    </>
  );
}
