import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import Banner from '../../componentes/Banner/Banner';
import Banner_Categoria_L from '../../assets/img-banner/Banner-categoria-L.png';
import styles from './Limpeza.module.css'

function Limpeza() {
  return (
    <>
      <section className={styles.limpeza}>
      <Header />
      <Conteiner>
        <Banner img={Banner_Categoria_L} />
        <Category category1='limpeza' titulo='Limpeza' /> 
      </Conteiner>
      <Footer />
    </section>
    </>
  )
}

export default Limpeza
