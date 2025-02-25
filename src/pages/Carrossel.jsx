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
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [mobile, setMobile] = useState(()=>{
    const mediaQuery = window.matchMedia('(max-width:768px)')
    return mediaQuery.matches
  })
  const handleResize = ()=>{
    const mediaQuery = window.matchMedia('(max-width:768px)')
    setMobile(mediaQuery.matches)
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[mobile])
  
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

  const handleTouchStart = ({touches})=>{
    setStartX(touches[0].clientX)
    setStartY(touches[0].clientY)
  }

  const handleTouchMove =({touches}) =>{
    if(startX === 0 || startY === 0) return
    const deltaX = touches[0].clientX - startX
    const deltaY = touches[0].clientY - startY

    if(Math.abs(deltaY) > Math.abs(deltaX)) return

    
    if(deltaX > 50 ){
      handlePrevImg(-1)
      setStartX(0)
      setStartY(0)
    }else if(deltaX < -50){
      handleNextImg(1)
      setStartX(0)
      setStartY(0)
    }
  }

  const handleTouchEnd = ()=>{
    setStartX(0)
    setStartY(0)
  }
  
  return (
    <section className={styles.container}>
      <h1>Forma que acompanha a vida.</h1>
      <div 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={slideRef} className={styles.carrosselBackground} style={{ backgroundImage: `url(${slides[index].img})` }}>
        <div className={styles.overlay}>
          <div className={styles.carrosselContainer}>
            <div className={styles.content}>
              <h1 ref={tittleRef}>{slides[index].tittle}</h1>
              <p ref={paragrafRef}>{slides[index].paragraph}</p>
            </div>
           {!mobile && 
             <>
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
             </>
           }
          </div>
        </div>
      </div>
    </section>
  );
};
