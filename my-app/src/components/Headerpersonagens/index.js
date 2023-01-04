import React from "react";
import styles from './styles.module.css'

function HeaderPersonagens() {
    return (
        <div className={styles.headerpersonagens}>
           <img onClick={()=>window.location.href = 'http://localhost:3000/'} src="./logo_harry_potter_wizard3 1.png"></img>
        </div>
    )
}

export default HeaderPersonagens