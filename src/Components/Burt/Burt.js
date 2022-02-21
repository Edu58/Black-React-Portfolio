import style from './Burt.module.css';
import { BsArrowRight } from 'react-icons/bs';

function Burt() {
    return ( 
        <div className={style.section_burt}>
            <div className={style.text}>
                <p className={style.burt}>
                    Burt
                </p>

                <p className={style.lead_text}>
                    The ad tech startup is winning clients from around the world
                </p>

                <p className={style.desc}>
                    Burt is a leading ad tech company that operates internationally. Since Webflow is the favorite tool of marketing people, they need my expertise to build their website.
                    <br></br>
                    <br></br>
                    After understanding their business goals and priorities, I contributed their design process and built their website on Webflow. Then I provided ongoing support for their regular needs.
                </p>

                <p className={style.see_it}>
                    See it live <BsArrowRight />
                </p>
            </div>

            <img src='images/burt.png'></img>
        </div>
     );
}

export default Burt;