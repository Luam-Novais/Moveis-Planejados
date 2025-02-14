import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from '../styles/Carrossel.module.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { slides } from '../database';

export const Carrossel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const slideRef = useRef(null);
  const tittleRef = useRef();
  const paragrafRef = useRef();

  const handlePrevImg = (newDirection) => {
    gsap.to(slideRef.current, {
      x: -newDirection * 300,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        setDirection(newDirection);
        setIndex((prevIndex) => (prevIndex - newDirection + slides.length) % slides.length);
      },
    });
  };
  const handleNextImg = (newDirection) => {
    gsap.to(slideRef.current, {
      x: -newDirection * 300,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        setDirection(newDirection);
        setIndex((prevIndex) => (prevIndex + newDirection + slides.length) % slides.length);
      },
    });
  };
  useEffect(() => {
    gsap.fromTo(slideRef.current, { x: direction * 300, opacity: 0, duration: 0.5, ease: 'power2.inOut' }, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.inOut' });
  }, [index]);

  return (
    <section className={styles.container}>
      <h1>Forma que acompanha a vida.</h1>
      <div ref={slideRef} className={styles.carrosselBackground} style={{ backgroundImage: `url(${slides[index].img})` }}>
        <div className={styles.overlay}>
          <div className={styles.carrosselContainer}>
            <div className={styles.content}>
              <h1 ref={tittleRef}>{slides[index].tittle}</h1>
              <p ref={paragrafRef}>{slides[index].paragraph}</p>
            </div>
            <button onClick={() => handlePrevImg(-1)} className={styles.btnPrev}>
              <i>
                <GrPrevious style={{ color: '#fff !important' }} />
              </i>
            </button>
            <button onClick={() => handleNextImg(1)} className={styles.btnNext}>
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
