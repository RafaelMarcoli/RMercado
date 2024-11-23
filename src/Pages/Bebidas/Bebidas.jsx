import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import Banner from '../../componentes/Banner/Banner';
import styles from './Bebidas.module.css'


function Bebidas() {
  return (
    <>
      <section className={styles.bebidas}>
        <Header />
        <Conteiner>
          <Banner img="/assets/img-banner/Banner-categoria-B.png" />
          <Category category1='bebidas' titulo='Bebidas' />
        </Conteiner>
        <Footer />
      </section>
    </>
  )
}

export default Bebidas