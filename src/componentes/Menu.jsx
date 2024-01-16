import { TbCategoryPlus } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { MdCleanHands } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";

import styles from "./Menu.module.css";



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
        <div  >
        <button className={styles.menucat}><GiFruitBowl className={styles.menuIcon} />Alimentos</button>
        <button className={styles.menucat}><BiSolidDrink className={styles.menuIcon} />Bebidas</button>
        <button className={styles.menucat}><MdCleanHands className={styles.menuIcon} />Limpeza</button> 
        </div>
        

      </nav>
    </div>
  )
}

export default Menu