import React from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import styles from './Home.module.css'
import Banner from '../../componentes/Banner/Banner';
import Banner_alimentos from '../../assets/img-banner/banner-alimentos2.png';
import Banner_bebidas from '../../assets/img-banner/banner-bebidas.png';
import Banner_limpeza from '../../assets/img-banner/banner-limpeza1.png';

function Home() {
  return (
    <main className={styles.home}>
      <Header />
      <Conteiner>
        <Banner img={Banner_alimentos} />
        <Category category1='alimentos' titulo='Alimentos' /> 
        <Banner img={Banner_bebidas}  />
        <Category category1='bebidas' titulo='Bebidas' /> 
        <Banner img={Banner_limpeza}/>
        <Category category1='limpeza' titulo='Limpeza' /> 

      </Conteiner>
      <Footer />
    </main>
  )
}

export default Home

