import React from 'react'
import ASRSlogo from "../assets/ASRSlogo.png"
import styles from './GeneralNav.module.css'

const { navBar, logo, logoImage, title } = styles

function GeneralNav(props) {
    return (
        <div>
            <div className={navBar}>
                <div className={`flex items-center ml-8 ${logo}`}><img src={ASRSlogo} alt="" className={logoImage} /></div>
                <div className={` text-5xl flex items-center justify-center font-custom ${title}`}>{props.heading}</div>
            </div>
        </div>
    )
}

export default GeneralNav;