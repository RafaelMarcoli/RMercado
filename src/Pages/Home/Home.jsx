import React from 'react';
import Header from '../../componentes/Header/Header';
import styles from "./Home.module.css";

function Home() {
  return (
    <>
    <Header/>
    <h1 className={styles.home}>Home</h1>
    </>
  )
}

export default Home
