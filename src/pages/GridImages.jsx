import React from 'react'
import styles from '../styles/GridImages.module.css'
import Button from '../components/ButtonOrca/Button'

const GridImages = ({galeria}) => {
  return (
    <section id={galeria} className={styles.container}>
      
        <h1>Explore ideias<span>.</span></h1>
        <div className={styles.gridContainer1}>
            <img className={`${styles.img} ${styles.imgDeitada} ${styles.img1}`} src="./public/assets/grid/img-grid1.jpg" alt="" />
            <img className={`${styles.img} ${styles.imgDeitada} ${styles.img2}`} src="./public/assets/grid/img-grid2.jpg" alt="" />
            <img className={`${styles.img} ${styles.imgEmPe} ${styles.img3}`} src="./public/assets/grid/img-grid3.jpg" alt="" />
        </div>
        <div className={styles.gridContainer2}>
            <img className={`${styles.img} ${styles.imgEmPe} ${styles.img4}`} src="./public/assets/grid/img-grid4.jpg" alt="" />
            <img className={`${styles.img} ${styles.imgQua} ${styles.img5}`} src="./public/assets/grid/img-grid5.jpg" alt="" />
            <img className={`${styles.img} ${styles.imgQua} ${styles.img6}`} src="./public/assets/grid/img-grid6.jpg" alt="" />
            <img className={`${styles.img} ${styles.imgDeitada} ${styles.img7}`} src="./public/assets/grid/img-grid7.jpg" alt="" />
        </div>
        <Button/>
    </section>
  )
}

export default GridImages