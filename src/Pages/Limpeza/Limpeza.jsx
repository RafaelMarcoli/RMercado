import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import Banner from '../../componentes/Banner/Banner';
import styles from './Limpeza.module.css'

function Limpeza() {
  return (
    <>
      <section className={styles.limpeza}>
        <Header />
        <Conteiner>
          <Banner img="/assets/img-banner/banner-limpeza1.png" />
          <Category category1='limpeza' titulo='Limpeza' />
        </Conteiner>
        <Footer />
      </section>
    </>
  )
}

export default Limpeza
