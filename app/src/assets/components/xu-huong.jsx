import React, { useRef, useState } from 'react';
import banner1 from '../img/xu-huong/banner/banner1.png'
import banner2 from '../img/xu-huong/banner/cac-loai-trang-suc-2.jpeg'
import styles from '../css/xu-huong.module.css'
import left from '../img/xu-huong/left-arrow.png'
import right from '../img/xu-huong/right-arrow.png'


function Xu_huong() {
    const [banner, setBanner] = useState(banner1)

    return (
        <div className={styles.banner1}>
            <img src={banner} alt="" />

            <div className={styles.arrow}>
                <div className={styles.left}
                    onClick={() => {
                        if (banner == banner1) setBanner(banner2);
                        else setBanner(banner1)
                        console.log(banner)
                    }}>
                    <img src={left} alt="" />
                </div>
                <div className={styles.right}
                    onClick={() => {
                        if (banner == banner1) setBanner(banner2);
                        else setBanner(banner1)
                        console.log(banner)
                    }}>
                    <img src={right} alt=""
                    />
                </div>
            </div>
        </div>
    )
}


export default Xu_huong;