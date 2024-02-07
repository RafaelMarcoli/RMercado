import styles from "./Category.module.css";
import produtos from '../../json/produtos.json'
import Card from "../Card/Card";
import Banner from "../Banner/Banner";

function Category({category1 , titulo}) {
  return (
    <div className={styles.top}>
            <Banner />
          <h2 className={styles.titulo}>{titulo}</h2>
          <section className={styles.category}>

            {produtos.filter(({ category }) => category === `${category1}`).map(produto =>
              <Card imagem={produto.imagem} category={produto.category} nome={produto.nome} preco={produto.preco} key={produto.imagem} />
            )}

          </section>
        </div>
  )
}

export default Category
