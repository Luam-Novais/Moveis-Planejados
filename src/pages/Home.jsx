import React from 'react';
import styles from '../styles/Home.module.css';
import Button from '../components/ButtonOrca/Button';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <Header/>
      <div className={styles.content}>
        <h1>
          Transforme seu espaço com elegância e <span>Sofisticação.</span>
        </h1>
        <Button />
      </div>
    </section>
  );
};

export default Home;
