import React from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import styles from './Home.module.css'
import Banner from '../../componentes/Banner/Banner';
import Banner_B from '../../componentes/Banner/Banner_B';
import Banner_L from '../../componentes/Banner/Banner_L';

function Home() {
  return (
    <main className={styles.home}>
      <Header />
      <Conteiner>
        <Banner/>
        <Category category1='alimentos' titulo='Alimentos' /> 
        <Banner_B />
        <Category category1='bebidas' titulo='Bebidas' /> 
        <Banner_L />
        <Category category1='limpeza' titulo='Limpeza' /> 

      </Conteiner>
      <Footer />
    </main>
  )
}

export default Home

