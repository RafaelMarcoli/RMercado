import React from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import stylus from './Home.module.css'

function Home() {
  return (
    <main className={stylus.home}>
      <Header />
      <Conteiner>

        <Category category1='alimentos' titulo='Alimentos' /> 
        <Category category1='bebidas' titulo='Bebidas' /> 
        <Category category1='limpeza' titulo='Limpeza' /> 

      </Conteiner>
      <Footer />
    </main>
  )
}

export default Home

