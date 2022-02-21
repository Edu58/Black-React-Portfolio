import style from './EmailText.module.css';

function EmailText() {
    return ( 
        <div className={style.container}>
            <h1>For everything else, you can email to</h1>
            <h2><a href='mailto: edumuriithi58@gmail.com'>edumuriithi58@gmail.com</a></h2>
        </div>
     );
}

export default EmailText;