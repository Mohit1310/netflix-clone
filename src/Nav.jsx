import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    const transitonNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
    window.addEventListener("scroll", transitonNavBar);
        return () => window.removeEventListener("scroll", transitonNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    className='nav__logo'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo" />

                <img
                    className='nav__avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix-avatar-logo" />
            </div>
        </div>
    )
}

export default Nav