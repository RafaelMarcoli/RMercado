import stylus from './Card.module.css'

function Card({ imagem , nome , preco, category}) {
  return (
    <div className={stylus.card} id={`${imagem}`}>
        <img className={stylus.img} src={`./src/assets/${category}/${imagem}`} alt={`${nome}`} />
        <p className={stylus.nomes}>{nome}</p>
        <p className={stylus.precos}>R${preco}</p>

    </div>
  )
}

export default Card