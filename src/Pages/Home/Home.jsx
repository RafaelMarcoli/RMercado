import React from 'react';
import Header from '../../componentes/Header/Header';
import styles from "./Home.module.css";
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';

function Home() {
  return (
    <>
    <Header/>
    <Conteiner>
      <h2>
        Home
      </h2>
    </Conteiner>
    <Footer />
    </>
  )
}

export default Home
