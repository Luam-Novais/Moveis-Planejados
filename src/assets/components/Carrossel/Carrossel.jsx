import React, { useState } from 'react';
import styles from './Carrossel.module.css';
import { GrPrevious, GrNext } from 'react-icons/gr';

export const Carrossel = () => {
  const [carrossel, setCarrossel] = useState([]);
  return (
    <section className={styles.Container}>
      <h2>Forma que acompanha a vida.</h2>
      <div className={styles.carrosselContainer} style={{ backgroundImage: "url('./public/assets/carrossel/cozinha-carrossel.jpg')" }}>
        <button className={styles.btnPrev}>
          <i>
            <GrPrevious style={{backgroundColor: '#fff !important'}}/>
          </i>
        </button>
        <button className={styles.btnNext}>
          <i>
            <GrNext />
          </i>
        </button>
      </div>
    </section>
  );
};
