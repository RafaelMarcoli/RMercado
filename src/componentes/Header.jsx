import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import './Header.css';

function Header() {

  return (
    <div className="header">
        
        <div>
            <img className="logo" src="./src/assets/logo/R.Mercado.png" alt="logo" />
        </div>
        
        <div className="nomesheader">
        <AiOutlineDoubleRight className="icon" size={27}/>
        <AiOutlineDoubleRight className="icon1" size={27}/>
        <AiOutlineDoubleRight className="icon" size={27}/>
        <h1>R.M<span>ercado</span></h1>
          <AiOutlineDoubleLeft className="icon" size={27}/>
          <AiOutlineDoubleLeft className="icon1" size={27}/>
          <AiOutlineDoubleLeft className="icon" size={27}/>
        </div>

        <div id="categorias">
            <button >
            <AiOutlineBars className="icon2" size={20}/>Menu 
            </button>
           
        </div>
    
    </div>
    
    
  )
}

export default Header