import React from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';


function Home() {
  return (
    <>
      <Header />
      <Conteiner>

        <Category category1='alimentos' titulo='Alimentos' /> 
        <Category category1='bebidas' titulo='Bebidas' /> 
        <Category category1='limpeza' titulo='Limpeza' /> 

      </Conteiner>
      <Footer />
    </>
  )
}

export default Home

