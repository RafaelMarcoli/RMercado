import stylus from './Card.module.css'

function Card({id , imagem , nome , preco}) {
  return (
    <div className={stylus.card} id={`${id}`}>
        <img className={stylus.img} src={`./src/assets/${imagem}`} alt="alimento1" />
        <p>{nome}</p>
        <p>R${preco}</p>

    </div>
  )
}

export default Card