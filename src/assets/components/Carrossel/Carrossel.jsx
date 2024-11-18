import React, { useEffect, useRef, useState } from 'react';
import styles from './Carrossel.module.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { slides } from '../../../database';

export const Carrossel = () => {
  const [index, setIndex] = useState(0);
  const tittleRef = useRef()
  const paragrafRef = useRef()

  useEffect(()=>{
    // showDown 1s forwards
    tittleRef.current.style.animation = 'showDown .6s forwards';
    paragrafRef.current.style.animation = 'showDown 1s forwards';

    const timeout = setTimeout(()=>{ 
      tittleRef.current.style.animation = '';
    paragrafRef.current.style.animation = '';


    }, 0)

    return () => clearTimeout(timeout)
  },[index])


  const handlePrevImg = () => {
    if(index > 0){
      setIndex(prevIndex => prevIndex - 1)
    }else if(index === 0 ){
      setIndex(slides.length -1)
    }
  };
  const handleNextImg = () => {
    if(index < slides.length -1){
      setIndex(prevIndex => prevIndex + 1)
    }else if(index ===  slides.length -1 ){
      setIndex(0)
    }
  };

  return (
    <section className={styles.Container}>
      <h2>Forma que acompanha a vida.</h2>
      <div className={styles.carrosselBackground} style={{ backgroundImage: `url(${slides[index].img})` }}>
          <div className={styles.overlay}>
          <div className={styles.carrosselContainer}>
          <div className={styles.content}>
            <h1 ref={tittleRef}>{slides[index].tittle}</h1>
            <p ref={paragrafRef}>{slides[index].paragraph}</p>
          </div>
          <button onClick={handlePrevImg} className={styles.btnPrev}>
            <i>
              <GrPrevious style={{ color: '#fff !important' }} />
            </i>
          </button>
          <button onClick={handleNextImg} className={styles.btnNext}>
            <i>
              <GrNext />
            </i>
          </button>
        </div>
          </div>
      </div>
    </section>
  );
};
