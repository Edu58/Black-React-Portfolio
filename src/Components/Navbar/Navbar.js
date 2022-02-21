import style from './Navbar.module.css';

function Navbar() {
    return ( 
        <nav>
        <div className={style.logo}>
            <h1>DevEdwin</h1>
        </div>
        
        <div className={style.navlinks}>
            <ul>
              <li>Work</li>
              <li>Capabilities</li>
              <li>Contact</li>
            </ul>
        </div>
      </nav>
     );
}

export default Navbar;