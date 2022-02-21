import style from './Footer.module.css';

function Footer() {
    return ( 
        <footer>
          <div className={style.footer_logo}>
            <h3>DevEdwin</h3>
            <p>Full Stack Web Developer</p>
          </div>

          <div className={style.copy}>
              <p>&copy; 2019 DEvEdwin. All rights reserved.</p>
          </div>
      </footer>
     );
}

export default Footer;