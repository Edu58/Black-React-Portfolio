import style from './Homepage.module.css';
import { BsArrowDown } from 'react-icons/bs'

function Homepage() {
    return ( 
        <div className={style.hero}>
            <div className={style.homeslogan}>
                <h1>
                    I'm ready to design your website and build it with <span>React</span>
                </h1>

                <p>
                    Completes 10+ projects as a React Expert that helped my clients drive more leads, have a user friendly ui with smooth transitions and animations
                </p>

                <h2>
                    Check out my work <span className={style.arrow_icon}><BsArrowDown /></span>
                </h2>
            </div>

            <img src='images/vadim-artyukhin-0bcBEgTm6sk-unsplash.jpg'></img>
        </div>
     );
}

export default Homepage;