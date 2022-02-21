import style from './Navbar.module.css';
import { BsCardText } from "react-icons/bs";

function Navbar() {
    return ( 
        <nav>
          <div className={style.logo}>
              <h1>DevEdwin</h1>
          </div>
          
          <div className={style.navlinks}>
              <ul className={style.navLi} id="navlinks">
                <li className={style.work}>Work</li>
                <li className={style.capabilities}>Capabilities</li>
                <li>Contact</li>
              </ul>
          </div>
      </nav>
     );
}

export default Navbar;