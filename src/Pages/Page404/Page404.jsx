import styles from './Page404.module.css'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import Conteiner from '../../componentes/Conteiner/Conteiner'

function Page404() {
  return (

    <>
        <Header /> 
        <Conteiner>
            <div className={styles.page404}>
            <h2>Conteudo não Localizado!</h2>
             <p> <span className={styles.error}>Error:</span>
             <span className={styles.numero}>404</span></p>
             <strong className={styles.notfound}>Page Not Found!</strong>
            </div>
        </Conteiner>
        <Footer />
    </>
  )
}

export default Page404