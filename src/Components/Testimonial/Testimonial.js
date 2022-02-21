import style from './Testimonial.module.css';
import { CgQuote } from "react-icons/cg";

function Testimonial() {
    return ( 
        <div className={style.testimonial}>
            <div className={style.quote}>
                <CgQuote />
            </div>

            <div className={style.text}>
                <p>
                Edwin is very thorough in his plan, email communication and execution. <br />He provided great designs, worked through challenges on what we provided, <br />came up with ideas and solutions to the problems as <br />that brought great encouragement to our team.
                </p>

                <div className={style.CTO}>
                    <img src='/images/face-unsplash.jpg'></img>

                    <p>Mark Junior</p>
                    <p>CTO at Byte</p>
                </div>
            </div>
        </div>
     );
}

export default Testimonial;