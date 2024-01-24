import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";

import './Header.css';
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <Link to="/">
         <img className="logo" src="./src/assets/logo/R.Mercado.png" alt="logo" />
      </Link>
        
        <div className="nomesheader">
          <AiOutlineDoubleRight className="icon" size={27}/>
          <AiOutlineDoubleRight className="icon1" size={27}/>
          <AiOutlineDoubleRight className="icon" size={27}/>
          <h1>R.M<span>ercado</span></h1>
          <AiOutlineDoubleLeft className="icon" size={27}/>
          <AiOutlineDoubleLeft className="icon1" size={27}/>
          <AiOutlineDoubleLeft className="icon" size={27}/>
        </div>

        <div >
          <Menu />
        </div>        
    </header>
  )
}

export default Header
