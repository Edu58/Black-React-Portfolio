import style from './Work.module.css'
import { BsArrowRight } from 'react-icons/bs'

function Work() {
    return ( 
        <div className={style.section2}>
            <h2 className={style.byte}>Byte</h2>

            <h3>
                The startup used React to make intuitive ui and webapges that manipulated more attractive colors
            </h3>

            <p className={style.desc}>
            Byte invisible aligner is an innovative product for people who want a better smile. It's a competitive market and React was the perfect solution for UI problem.
            <br></br>
            <br></br>
            First I helped their design process for the marketing website and customer portal. Then I built their responsive website with React.
            </p>

            <p className={style.see_it_live}>
                See it live <span><BsArrowRight /></span>
            </p>

            <div className={style.byte_img}>
                <img src='/images/byte.png'></img>
            </div>
        </div>
     );
}

export default Work;