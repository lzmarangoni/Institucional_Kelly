import React from 'react'
import perguntas from './perguntas.json'
import ItemLista from '../../Components/ItemLista'
import Titulo from '../../Components/Titulo'
import styles from './Perguntas.module.css'

export default function PerguntasFrequentes() {
    const itens = perguntas.perguntas

  return (
    <div className={styles.pergFrequentes}>
        <Titulo>Dúvidas Frequentes</Titulo>
        <div className={styles.duvidas}>
        {itens.map( (item) => { return <ItemLista key={item.id} pergunta={item.pergunta} resposta={item.resposta}/>})}
        </div>
        
    </div>
  )
}
