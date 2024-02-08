import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import Banner from '../../componentes/Banner/Banner';
import Banner_Categoria_B from '../../assets/img-banner/Banner-categoria-B.png';
import styles from './Bebidas.module.css'


function Bebidas() {
  return (
    <>
       <section className={styles.bebidas}>
        <Header />
        <Conteiner>
        <Banner img={Banner_Categoria_B} />
        <Category category1='bebidas' titulo='Bebidas' /> 
        </Conteiner>
        <Footer />
      </section>
    </>
  )
}

export default Bebidas