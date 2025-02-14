import React from "react";
import styles from '../styles/Contato.module.css'
import Form from "../components/Form/Form";

const Contato = ({id, ref}) => {
  return (
    <section ref={ref} id={id} className={styles.container}>
        <Form/>
    </section>
  )
}

export default Contato
