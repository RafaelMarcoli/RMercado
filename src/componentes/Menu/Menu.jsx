import { TbCategoryPlus } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { MdCleanHands } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";



function Menu () {

  const [ abrirMenu, setAbrirMenu ] = useState(false);
  
  function toggleMenu() {
     setAbrirMenu(!abrirMenu);
     console.log(abrirMenu)
   }

  return (
    <div >

      <button className={styles.abrirMenu1} onClick={toggleMenu}>
       <AiOutlineBars 
       className={styles.icon2} size={20} 
        />Menu 
      </button>

      <nav 
        className={`${styles.menucategorias} ${ abrirMenu ? styles.show :''}`}
        onClick={toggleMenu}
        >
        <p><TbCategoryPlus />Categorias</p>
        <>
          
          <Link to="/" className={styles.menucat}><IoIosHome className={styles.menuIcon} />Inicio</Link>
          <Link to="/alimentos" className={styles.menucat}><GiFruitBowl className={styles.menuIcon} />Alimentos</Link>
          <Link to="/bebidas" className={styles.menucat}><BiSolidDrink className={styles.menuIcon} />Bebidas</Link>
          <Link to="/limpeza" className={styles.menucat}><MdCleanHands className={styles.menuIcon} />Limpezas</Link> 
            
         </>
        

      </nav>
    </div>
  )
}

export default Menu
