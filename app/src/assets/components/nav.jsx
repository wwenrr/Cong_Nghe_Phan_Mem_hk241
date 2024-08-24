import React, { useRef } from 'react';
import styles from '../css/nav.module.css'
import phone from '../img/gg_phone.svg'
import account from '../img/account.svg'
import shop from '../img/shop.svg'
import search from '../img/search.svg'
import { Outlet, Link } from 'react-router-dom';

function Nav() {
    const inputRef = useRef(null)

    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.layer1}>
                    <div className={styles.group1}>
                        <div className={styles.phone}>
                            <img src={phone} alt="" />
                            <div className="">1800-XX-XX-XX</div>
                        </div>

                        <div className={styles.logo}>LOGO</div>
                    </div>

                    <div className={styles.group2}>
                        <img src={account} alt="" />
                        <img src={shop} alt="" />
                    </div>
                </div>

                <div className={styles.layer2}>
                    <ul className={styles.group1}>
                        <Link to="/">Xu hướng</Link>
                        <Link to="/trang-suc">Trang sức</Link>
                        <Link to="/thuong-hieu">Thương hiệu</Link>
                        <Link to="/khuyen-mai">Khuyến mãi</Link>
                    </ul>

                    <div className={styles.search}>
                        <input type="text" placeholder='Tìm kiếm' ref={inputRef} />
                        <img src={search} alt="" onClick={() => inputRef.current.focus()} />
                    </div>

                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Nav