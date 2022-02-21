import style from './WebDevelopment.module.css';

function WebDevelopment() {
    return ( 
        <div className={style.container}>
        <div className={style.text}>
            <p className={style.design}>Web Development</p>

            <p className={style.lead_text}>
            Your success will begin with a fully functional website with React
            </p>

            <p className={style.desc}>
            As a React Developer, I build your website with all the features you need. I make sure that your website performs well on all devices.
            <br></br>
            <br></br>
            If you are not familiar with React, I record a screencast at the end of the project so you can watch and learn how to use your website.
            </p>

            <ul>
                <div className={style.list_left}>
                    <li>Webflow Development</li>
                    <li>Maintenance</li>
                    <li>Mobile Optimization</li>
                </div>
                <div>
                    <li>SEO Audit</li>
                    <li>Bug Fixing</li>
                    <li>Ongoing Support</li>
                </div>
            </ul>
        </div>

        <img src='/images/blue-web-dev.png'></img>
    </div>
     );
}

export default WebDevelopment;