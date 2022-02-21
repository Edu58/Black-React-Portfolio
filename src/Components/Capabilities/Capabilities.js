import style from './Capabilities.module.css';

function Capabilities() {
    return ( 
        <div className={style.container}>
            <div className={style.text}>
                <h1>Capabilities</h1>
                <p className={style.design}>Web Design</p>

                <p className={style.lead_text}>
                Uncovering hidden problems and solving them in a beautiful way with web design
                </p>

                <p className={style.desc}>
                I work closely with each client, establishing what your goals and values are as a brand, what you want your business to achieve and where you fit in your industry.
                <br></br>
                <br></br>
                Whether your goal is to increase sign ups, duration on your site or promote a particular part of your business, I can help as a freelance web designer.
                </p>

                <ul>
                    <div className={style.list_left}>
                        <li>Web Design</li>
                        <li>Landing Page Design</li>
                    </div>
                    <div>
                        <li>UI design</li>
                        <li>UX design</li>
                    </div>
                </ul>
            </div>

            <img src='/images/web-design.png'></img>
        </div>
     );
}

export default Capabilities;