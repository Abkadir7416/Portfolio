import React from "react";
// import {MdReorder} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs';
import '../styles/Footer.css'

// let copy = React.string({js|©|js});
function Footer(){
    
    return(
        <div className="footer">
            <div className="socialMedia">
                <BsInstagram />
                {/* <AiOutlineInstagram /> */}
                <BsFacebook />
                <FaTwitter />
                <BsLinkedin />
            </div>
            <p> © 2022 pedrotech.com</p>
        </div>
    )
}

export default Footer;