import React from 'react';



const Footer = () => {

    return (
        <>
    <footer className="footer" id="footer">
            <p className="footer__title">Alexander Hill</p>
            <p><b>E-Mail: KiserHill@gmail.com</b></p>
            <p><b>github.com/Software-with-Alex</b></p>
            <div className="footer__social">
                <a href="https://github.com/Software-with-Alex" class="footer__icon"><i className='bx bxl-github' ></i></a>
                <a href="#" class="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i className='bx bxl-google' ></i></a>
            </div>
            
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>
        

        </>
    )
}

export default Footer;