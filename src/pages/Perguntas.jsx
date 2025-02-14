import React from 'react'
import styles from '../styles/Perguntas.module.css'
import { FaChevronDown } from 'react-icons/fa'

const Perguntas = ({id}) => {


  return (
    <section id={id} className={styles.container}>
        <h1>Perguntas frequentes <span>.</span></h1>
        <table>
            <details>
                <summary>Qual o prazo de entrega e montagem dos Móveis Planejados?</summary>
                <p className={styles.hidden}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ut!</p>
            </details>
            <details>
                <summary>Quais os significados de MDF e MDP? Qual o melhor ?</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem temporibus rem velit repudiandae illo magnam.</p>
            </details>
            <details>
                <summary>Qual a garantia dos produtos ?</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem temporibus rem velit repudiandae illo magnam.</p>
            </details>
            <details>
                <summary>Quais as formas de pagamento nós trabalhamos ?</summary>
                <p>Aceitamos pagamento à vista com 10% de desconto, 50% de sinal e restante contra entrega,50% de sinal e restante parcelado no cartão em ate 3X sem juros e também parcelamento no cartão em até 10X com juros do cartão.</p>
            </details>

        </table>
    </section>
  )
}

export default Perguntas