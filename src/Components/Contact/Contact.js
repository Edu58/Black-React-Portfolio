import style from './Contact.module.css';
import { BsArrowRight } from 'react-icons/bs';

function Contact() {
    return ( 
        <div className={style.container}>
            <h1>Do you want a new website that looks good and converts well?</h1>

            <p className={style.desc}>
            If you have a project in mind or are simply interested in finding out more, please fill the form below and lets get things moving.
            </p>

            <form>
                <div className={style.names}>
                    <input type='text' name="first_name" className={style.first_name} placeholder='First Name'></input>
                    <input type='text' name="last_name" id='last_name' placeholder='Last Name'></input>
                </div>

                <input type='email' className={style.email} placeholder='Email Address'></input>

                <textarea placeholder='Message...' rows={8}></textarea>

                <p className={style.submit}>Submit <span> <BsArrowRight /> </span></p>
            </form>
        </div>
    );
}

export default Contact;