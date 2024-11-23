import styles from './Card.module.css'

function Card({ imagem, nome, preco, category }) {

  return (
    <div
      className={`${styles.card}
      ${category === "alimentos" ? styles.card_a : ''}
      ${category === "bebidas" ? styles.card_b : ''}
      ${category === "limpeza" ? styles.card_l : ''}`} id={`${imagem}`}>
      <img className={styles.img} src={`/assets/${category}/${imagem}`} alt={`${nome}`} />
      <p className={`${category === "alimentos" ? styles.nomes_a : ''} 
                       ${category === "bebidas" ? styles.nomes_b : ''}
                       ${category === "limpeza" ? styles.nomes_l : ''}`}>{nome}</p>
      <p className={styles.precos}><span>R$</span> {preco}</p>

    </div>
  )
}

export default Card