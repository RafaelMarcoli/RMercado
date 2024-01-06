import { TbCategoryPlus } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { MdCleanHands } from "react-icons/md";



import './Menu.css';


function Menu () {
 
  return (

    <nav className="menucategorias" >
        <p><TbCategoryPlus />Categorias</p>
        <div id='botoes' >
        <button className='menucat'><GiFruitBowl className="menuIcon"/>Alimentos</button>
        <button className='menucat'><BiSolidDrink className="menuIcon" />Bebidas</button>
        <button className='menucat'><MdCleanHands className="menuIcon" />Limpeza</button> 
        </div>
        

    </nav>
    
  )
}

export default Menu