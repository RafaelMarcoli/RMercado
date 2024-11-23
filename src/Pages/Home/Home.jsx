import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Conteiner from '../../componentes/Conteiner/Conteiner';
import Category from '../../componentes/Category/Category';
import styles from './Home.module.css';
import Banner from '../../componentes/Banner/Banner';

function Home() {
  return (
    <main className={styles.home}>
      <Header />
      <Conteiner>
        <Banner img="/assets/img-banner/banner-alimentos.png" /> {/* Caminho para imagem em public */}
        <Category category1='alimentos' titulo='Alimentos' />
        <Banner img="/assets/img-banner/banner-bebidas.png" />
        <Category category1='bebidas' titulo='Bebidas' />
        <Banner img="/assets/img-banner/banner-limpeza1.png" />
        <Category category1='limpeza' titulo='Limpeza' />
      </Conteiner>
      <Footer />
    </main>
  );
}

export default Home;
