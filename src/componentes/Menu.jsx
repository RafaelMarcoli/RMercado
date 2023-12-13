import { TbCategoryPlus } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { MdCleanHands } from "react-icons/md";



import './Menu.css';

function Menu() {
  return (
    <div id='menucategorias'>
        <p><TbCategoryPlus />Categorias</p>
        <div id='botoes' >
        <button className='menucat'><GiFruitBowl className="semborda"/>Alimentos</button>
        <button className='menucat'><BiSolidDrink className="semborda" />Bebidas</button>
        <button className='menucat'><MdCleanHands className="semborda" />Limpeza</button> 
        </div>
        

    </div>
  )
}

export default Menu