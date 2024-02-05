import stylus from './Card.module.css'

function Card({ imagem , nome , preco, category}) {
  return (
    <div className={stylus.card} id={`${imagem}`}>
        <img className={stylus.img} src={`./src/assets/${category}/${imagem}`} alt={`${nome}`} />
        <p>{nome}</p>
        <p>R${preco}</p>

    </div>
  )
}

export default Card