import React from 'react'
import styles from './Home.module.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Button from '../ButtonOrca/Button'


const Home = () => {
  return (
    <section className={styles.homeContainer}>
       <header className={styles.header}>
        <a href="./">Moveis planejados</a> 
        <nav>
            <a href="./"><i className={styles.iconHeader}><FaFacebook/></i></a>
            <a href="./"><i className={styles.iconHeader}><FaInstagram/></i></a>
        </nav>
       </header>
       <div className={styles.content}>
         <h1>
            Transforme seu espaço 
            com elegância e <span>Sofisticação.</span>
        </h1>
        <Button/>
       </div>
    </section>
  )
}

export default Home