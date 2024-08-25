import React, { useRef } from 'react';
import phone from '../img/gg_phone.svg'
import account from '../img/account.svg'
import shop from '../img/shop.svg'
import search from '../img/search.svg'
import { Outlet, Link, generatePath } from 'react-router-dom';
import style from '../css/nav.module.scss'

function Nav({ point, setPoint }) {
    const inputRef = useRef(null)
    setPoint(0)

    return (
        <>
            <div>
                <nav className={style.nav}>
                    <layer1 className={style.layer1}>
                        <div className={style.phone_gr}>
                            <img src={phone} alt="" />
                            <div className={style.num}>1800-XX-XX-XX</div>
                        </div>
                        <div className={style.logo}>LOGO</div>
                        <div className={style.cta}>
                            <img src={account} alt="" />
                            <img src={shop} alt="" />
                        </div>
                    </layer1>

                    <div className={style.layer2}>
                        <ul className={style.cta}>
                            <Link>Xu hướng</Link>
                            <Link>Trang sức</Link>
                            <Link>Thương hiệu</Link>
                            <Link>Khuyến mãi</Link>
                        </ul>
                        
                        <div className={style.search_box}>
                            <input type="text" name="" placeholder='Tìm kiếm' ref={inputRef}/>
                            <img src={search} alt="" 
                                onClick={() => {
                                    inputRef.current.focus()
                                }}
                            />
                        </div>
                    </div>
                </nav>


            </div>
            <Outlet />
        </>
    )
}

export default Nav