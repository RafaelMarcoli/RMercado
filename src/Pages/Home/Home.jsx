import React from 'react';
import Header from '../../componentes/Header/Header';
import styles from "./Home.module.css";
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Card from '../../componentes/Card/Card'
import alimentos from '../../json/alimentos.json'

function Home() {
  return (
    <>
    <Header/>
    <Conteiner>
      <h2>Alimentos</h2>
      <section className={styles.home}>
        
        {alimentos.map(alimento => 
          <Card id={alimento.id} imagem={alimento.imagem} nome={alimento.nome} preco={alimento.preco} key={alimento.id} />
        )}

      </section>
      
    </Conteiner>
    <Footer />
    </>
  )
}

export default Home
