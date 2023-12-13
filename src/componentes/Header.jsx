import { AiOutlineBars } from "react-icons/ai";
import './Header.css';

function Header() {

  return (
    <div className="header">
        
        <div>
            <img className="logo" src="./src/assets/logo/R.Mercado.png" alt="logo" />
        </div>
        
        <div>
        <h1>R.M<span>ercado</span></h1>
        </div>

        <div id="categorias">
            <button >
              Categorias  
            </button>
           
        </div>
    
    </div>
  )
}

export default Header