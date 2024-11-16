import React, { useState } from 'react';
import styles from './Carrossel.module.css';
import { GrPrevious, GrNext } from 'react-icons/gr';

const imgs = ['sala', 'quarto', 'cozinha'];

export const Carrossel = () => {
  const [index, setIndex] = useState(2);

  const handlePrevImg = () => {
    // if(index <= 2){
    //     setIndex(prevIndex => prevIndex - 1)
    // }
    // else if(index === 2){
    //     setIndex(0)
    // }
    console.log(index);
  };
  const handleNextImg = () => {
    // if(index <= 2){
    //     setIndex(prevIndex => prevIndex + 1)
    // }
    // else if(index === 2){
    //     setIndex(0)
    // }
    console.log(index);
  };

  return (
    <section className={styles.Container}>
      <h2>Forma que acompanha a vida.</h2>
      <div className={styles.carrosselContainer} style={{ backgroundImage: `url('./public/assets/carrossel/${imgs[index]}-carrossel.jpg')` }}>
        <button onClick={handlePrevImg} className={styles.btnPrev}>
          <i>
            <GrPrevious style={{ backgroundColor: '#fff !important' }} />
          </i>
        </button>
        <button onClick={handleNextImg} className={styles.btnNext}>
          <i>
            <GrNext />
          </i>
        </button>
      </div>
    </section>
  );
};
