import style from './BurtTestimonial.module.css';
import { CgQuote } from "react-icons/cg";

function BurtTestimonial() {
    return ( 
        <div className={style.testimonial}>
            <div className={style.quote}>
                <CgQuote />
            </div>

            <div className={style.text}>
                <p>
                Çağdaş has done great work for us with our new website, <br></br> including multiple updates and additions. He is quick to answer <br></br> and has a great pro-active mindset in terms of making <br></br>sure that we get exactly what we are expecting from a Webflow Expert.
                </p>

                <div className={style.CTO}>
                    <img src='images/burt-unsplash.jpg'></img>

                    <p>Nishanth Avva</p>
                    <p>Director Of Business Development Burt</p>
                </div>
            </div>
        </div>
     );
}

export default BurtTestimonial;