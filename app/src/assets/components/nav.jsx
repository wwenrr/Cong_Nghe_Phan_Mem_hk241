import React from 'react';
import styles from '../css/nav.module.css'
import phone from '../img/gg_phone.svg'

function Nav() {
    return (
        <nav className={styles.nav}>
            <div className="layer1">
                <div className="group1">
                    <img src={phone} alt="" />
                    <div className="phone-num">1800-XX-XX-XX</div>
                </div>
            </div>

            <div className="layer2"></div>
        </nav>
    )
}

export default Nav