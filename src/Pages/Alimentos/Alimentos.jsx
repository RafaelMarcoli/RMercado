import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import Banner from '../../componentes/Banner/Banner';
import Banner_Categoria_A from '../../assets/img-banner/Banner-categoria-A.png';
import styles from './Alimentos.module.css'

function Alimentos() {
  return (
    <section className={styles.alimentos}>
      <Header />
      <Conteiner>

        <Banner img={Banner_Categoria_A} />
        <Category category1='alimentos' titulo='Alimentos' /> 

      </Conteiner>
      <Footer />
    </section>
  )
}

export default Alimentos